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

export function SpacesMap({
  spaces,
  selectedSpaceId,
  onSelectSpace
}: SpacesMapProps) {
  const hasKakaoMapKey = Boolean(import.meta.env.VITE_KAKAO_MAP_APP_KEY);

  return (
    <section className="spaces-map-section" aria-labelledby="spaces-map-title">
      <div className="spaces-map-heading">
        <div>
          <h2 id="spaces-map-title">지도에서 공간 현황 보기</h2>
          <p>지도에서 건물별 잔여 공간 수와 마감 상태를 확인하세요.</p>
        </div>
        <span className="map-mode-badge">
          {hasKakaoMapKey ? "지도 API 연결 준비됨" : "지도 API 연결 예정"}
        </span>
      </div>

      <div className="spaces-map" aria-label="수성구 빈 상가 위치 샘플 지도">
        <div className="map-grid-overlay" />
        {spaces.map((space, index) => {
          const isClosed = space.status === "마감";
          const isSelected = space.id === selectedSpaceId;
          const label = isClosed ? "마감" : `${space.remainingUnits}개 남음`;

          return (
            <button
              className={`map-pin ${isClosed ? "map-pin-closed" : ""} ${
                isSelected ? "map-pin-selected" : ""
              }`}
              key={space.id}
              onClick={() => onSelectSpace(space)}
              style={markerPositions[index]}
              type="button"
            >
              <strong>{space.area}</strong>
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
