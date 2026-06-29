import { useEffect, useMemo, useRef, useState } from "react";
import type { Space } from "../../data/spaces";

type SpacesMapProps = {
  spaces: Space[];
  selectedSpaceId: number;
  onSelectSpace: (space: Space) => void;
};

const markerPositions = [
  { left: "22%", top: "42%" },
  { left: "38%", top: "58%" },
  { left: "50%", top: "36%" },
  { left: "65%", top: "46%" },
  { left: "78%", top: "62%" }
];

const KAKAO_SDK_ID = "kakao-map-sdk";

type MapLoadStatus = "fallback" | "loading" | "ready" | "error";

const getMarkerLabel = (space: Space) =>
  space.status === "마감" ? "마감" : `${space.remainingUnits}개 남음`;

const loadKakaoMapSdk = (appKey: string) =>
  new Promise<void>((resolve, reject) => {
    const resolveWhenReady = () => {
      if (!window.kakao?.maps) {
        reject(new Error("Kakao Maps SDK is unavailable."));
        return;
      }

      window.kakao.maps.load(resolve);
    };

    if (window.kakao?.maps) {
      resolveWhenReady();
      return;
    }

    const existingScript = document.getElementById(KAKAO_SDK_ID) as
      | HTMLScriptElement
      | null;

    if (existingScript) {
      existingScript.addEventListener("load", resolveWhenReady, { once: true });
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = KAKAO_SDK_ID;
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(
      appKey
    )}&autoload=false`;
    script.onload = resolveWhenReady;
    script.onerror = reject;
    document.head.appendChild(script);
  });

export function SpacesMap({
  spaces,
  selectedSpaceId,
  onSelectSpace
}: SpacesMapProps) {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const markerRefs = useRef<Array<{ setMap(map: unknown): void }>>([]);
  const kakaoMapKey = import.meta.env.VITE_KAKAO_MAP_APP_KEY;
  const hasKakaoMapKey = Boolean(kakaoMapKey);
  const [mapStatus, setMapStatus] = useState<MapLoadStatus>(
    hasKakaoMapKey ? "loading" : "fallback"
  );
  const selectedSpace = useMemo(
    () => spaces.find((space) => space.id === selectedSpaceId) ?? spaces[0],
    [selectedSpaceId, spaces]
  );

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
      .catch(() => {
        if (isMounted) {
          console.warn("Kakao Map SDK 로드에 실패해 fallback 지도를 표시합니다.");
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

    const center = new kakao.maps.LatLng(selectedSpace.lat, selectedSpace.lng);
    const map = new kakao.maps.Map(mapElementRef.current, {
      center,
      level: 6
    });

    spaces.forEach((space) => {
      const position = new kakao.maps.LatLng(space.lat, space.lng);
      const marker = new kakao.maps.Marker({ map, position });
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

    return () => {
      markerRefs.current.forEach((marker) => marker.setMap(null));
      markerRefs.current = [];
    };
  }, [mapStatus, onSelectSpace, selectedSpace, selectedSpaceId, spaces]);

  const shouldShowFallback = mapStatus === "fallback" || mapStatus === "error";

  return (
    <section className="spaces-map-section" aria-labelledby="spaces-map-title">
      <div className="spaces-map-heading">
        <div>
          <h2 id="spaces-map-title">지도에서 공간 현황 보기</h2>
          <p>지도에서 건물별 잔여 공간 수와 마감 상태를 확인하세요.</p>
        </div>
        <span className="map-mode-badge">
          {mapStatus === "ready"
            ? "Kakao Map 연결됨"
            : mapStatus === "loading"
              ? "지도 불러오는 중"
              : "지도 키 없음 · 샘플 지도"}
        </span>
      </div>

      <div className="spaces-map" aria-label="수성구 빈 상가 위치 지도">
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
              지도 API 키가 없거나 로드되지 않아 샘플 지도를 표시합니다.
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
                  style={markerPositions[index]}
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
