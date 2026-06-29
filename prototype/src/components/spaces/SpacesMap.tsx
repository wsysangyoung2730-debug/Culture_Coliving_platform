import { useEffect, useRef, useState } from "react";
import type { Space } from "../../data/spaces";

type SpacesMapProps = {
  spaces: Space[];
  selectedSpaceId: number;
  onSelectSpace: (space: Space) => void;
};

const markerPositions = [
  { left: "21%", top: "54%" },
  { left: "31%", top: "64%" },
  { left: "16%", top: "71%" },
  { left: "43%", top: "22%" },
  { left: "79%", top: "48%" },
  { left: "70%", top: "57%" }
];

const KAKAO_SDK_ID = "kakao-map-sdk";
const KAKAO_SDK_LOAD_TIMEOUT_MS = 8000;

type MapLoadStatus = "fallback" | "loading" | "ready" | "error";

let kakaoMapSdkPromise: Promise<void> | null = null;

const getMarkerLabel = (space: Space) =>
  space.status === "마감" ? "마감" : `${space.remainingUnits}개 남음`;

const loadKakaoMapSdk = (appKey: string) => {
  if (window.kakao?.maps) {
    return new Promise<void>((resolve) => window.kakao?.maps.load(resolve));
  }

  if (kakaoMapSdkPromise) {
    return kakaoMapSdkPromise;
  }

  kakaoMapSdkPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById(KAKAO_SDK_ID) as
      | HTMLScriptElement
      | null;
    let scriptElement = existingScript;

    const timeoutId = window.setTimeout(() => {
      kakaoMapSdkPromise = null;
      scriptElement?.remove();
      reject(new Error("Kakao Maps SDK load timed out."));
    }, KAKAO_SDK_LOAD_TIMEOUT_MS);

    const clearSdkTimeout = () => window.clearTimeout(timeoutId);

    const handleLoad = () => {
      if (!window.kakao?.maps) {
        clearSdkTimeout();
        kakaoMapSdkPromise = null;
        reject(new Error("Kakao Maps SDK is unavailable."));
        return;
      }

      window.kakao.maps.load(() => {
        clearSdkTimeout();
        resolve();
      });
    };

    const handleError = () => {
      clearSdkTimeout();
      kakaoMapSdkPromise = null;
      scriptElement?.remove();
      reject(new Error("Kakao Maps SDK failed to load."));
    };

    if (existingScript) {
      existingScript.addEventListener("load", handleLoad, { once: true });
      existingScript.addEventListener("error", handleError, { once: true });
      return;
    }

    const script = document.createElement("script");
    scriptElement = script;
    script.id = KAKAO_SDK_ID;
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(
      appKey
    )}&autoload=false`;
    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });
    document.head.appendChild(script);
  });

  return kakaoMapSdkPromise;
};

export function SpacesMap({
  spaces,
  selectedSpaceId,
  onSelectSpace
}: SpacesMapProps) {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<KakaoMap | null>(null);
  const initialBoundsRef = useRef<KakaoLatLngBounds | null>(null);
  const hasAppliedInitialBoundsRef = useRef(false);
  const markerRefs = useRef<Array<KakaoMarker | KakaoCustomOverlay>>([]);
  const kakaoMapKey = String(import.meta.env.VITE_KAKAO_MAP_APP_KEY ?? "").trim();
  const hasKakaoMapKey = Boolean(kakaoMapKey);
  const [mapStatus, setMapStatus] = useState<MapLoadStatus>(
    hasKakaoMapKey ? "loading" : "fallback"
  );

  const handleResetMap = () => {
    if (!mapRef.current || !initialBoundsRef.current) {
      return;
    }

    mapRef.current.setBounds(initialBoundsRef.current);
  };

  const handleZoomIn = () => {
    if (!mapRef.current) {
      return;
    }

    mapRef.current.setLevel(Math.max(1, mapRef.current.getLevel() - 1));
  };

  const handleZoomOut = () => {
    if (!mapRef.current) {
      return;
    }

    mapRef.current.setLevel(Math.min(14, mapRef.current.getLevel() + 1));
  };

  useEffect(() => {
    if (!hasKakaoMapKey) {
      console.info("VITE_KAKAO_MAP_APP_KEY가 없어 fallback 지도를 표시합니다.");
      return undefined;
    }

    let isMounted = true;

    loadKakaoMapSdk(kakaoMapKey)
      .then(() => {
        if (isMounted) {
          setMapStatus("ready");
        }
      })
      .catch((error: unknown) => {
        if (isMounted) {
          console.warn("Kakao Map SDK 로드에 실패해 fallback 지도를 표시합니다.", error);
          setMapStatus("error");
        }
      });

    return () => {
      isMounted = false;
    };
  }, [hasKakaoMapKey, kakaoMapKey]);

  useEffect(() => {
    const kakao = window.kakao;

    if (mapStatus !== "ready" || !mapElementRef.current || !kakao?.maps) {
      return undefined;
    }

    markerRefs.current.forEach((marker) => marker.setMap(null));
    markerRefs.current = [];

    const fallbackCenterSpace = spaces[0];
    const map =
      mapRef.current ??
      new kakao.maps.Map(mapElementRef.current, {
        center: new kakao.maps.LatLng(fallbackCenterSpace.lat, fallbackCenterSpace.lng),
        level: 7
      });
    mapRef.current = map;

    const bounds = new kakao.maps.LatLngBounds();

    spaces.forEach((space) => {
      const position = new kakao.maps.LatLng(space.lat, space.lng);
      const marker = new kakao.maps.Marker({ map, position });
      bounds.extend(position);
      const overlayElement = document.createElement("button");
      overlayElement.type = "button";
      overlayElement.className = `kakao-space-marker ${
        space.status === "마감" ? "kakao-space-marker-closed" : ""
      } ${space.id === selectedSpaceId ? "kakao-space-marker-selected" : ""}`;
      overlayElement.innerHTML = `<strong>${space.area}</strong><span>${getMarkerLabel(
        space
      )}</span>`;
      overlayElement.addEventListener("click", () => onSelectSpace(space));

      const overlay = new kakao.maps.CustomOverlay({
        content: overlayElement,
        map,
        position,
        yAnchor: 1.25
      });

      kakao.maps.event.addListener(marker, "click", () => onSelectSpace(space));
      markerRefs.current.push(marker, overlay);
    });

    initialBoundsRef.current = bounds;

    if (!hasAppliedInitialBoundsRef.current) {
      map.setBounds(bounds);
      hasAppliedInitialBoundsRef.current = true;
    }

    return () => {
      markerRefs.current.forEach((marker) => marker.setMap(null));
      markerRefs.current = [];
    };
  }, [mapStatus, onSelectSpace, selectedSpaceId, spaces]);

  const shouldShowFallback = mapStatus === "fallback" || mapStatus === "error";
  const shouldDisableControls = mapStatus !== "ready";

  return (
    <section className="spaces-map-section" aria-labelledby="spaces-map-title">
      <div className="spaces-map-heading">
        <div>
          <h2 id="spaces-map-title">지도에서 공간 현황 보기</h2>
          <p>지도에서 건물별 잔여 공간 수와 마감 상태를 확인하세요.</p>
        </div>
      </div>

      <div className="spaces-map" aria-label="수성구 빈 상가 위치 지도">
        <div className="map-control-group" aria-label="지도 제어">
          <button
            aria-label="지도 확대"
            disabled={shouldDisableControls}
            onClick={handleZoomIn}
            type="button"
          >
            +
          </button>
          <button
            aria-label="지도 축소"
            disabled={shouldDisableControls}
            onClick={handleZoomOut}
            type="button"
          >
            -
          </button>
          <button
            aria-label="지도 초기화"
            disabled={shouldDisableControls}
            onClick={handleResetMap}
            type="button"
          >
            ↺ 초기화
          </button>
        </div>
        {mapStatus === "loading" && (
          <div className="map-loading-panel">Kakao Map을 불러오는 중입니다.</div>
        )}
        <div
          aria-hidden={shouldShowFallback}
          className={shouldShowFallback ? "kakao-map-canvas is-hidden" : "kakao-map-canvas"}
          ref={mapElementRef}
        />
        {shouldShowFallback && (
          <>
            <div className="map-grid-overlay" />
            <p className="map-fallback-note">
              {mapStatus === "error"
                ? "Kakao Map 서비스 설정을 확인해 주세요. 샘플 지도를 표시합니다."
                : "지도 API 키가 없어 샘플 지도를 표시합니다."}
            </p>
            {spaces.map((space, index) => {
              const isClosed = space.status === "마감";
              const isSelected = space.id === selectedSpaceId;

              return (
                <button
                  aria-pressed={isSelected}
                  className={`map-pin ${isClosed ? "map-pin-closed" : ""} ${
                    isSelected ? "map-pin-selected" : ""
                  }`}
                  key={space.id}
                  onClick={() => onSelectSpace(space)}
                  style={markerPositions[index % markerPositions.length]}
                  type="button"
                >
                  <strong>{space.area}</strong>
                  <span>{getMarkerLabel(space)}</span>
                </button>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}
