import type { Space } from "../../data/spaces";

type SpaceDetailPanelProps = {
  space: Space;
};

export function SpaceDetailPanel({ space }: SpaceDetailPanelProps) {
  return (
    <aside className="space-detail-panel" aria-labelledby="space-detail-title">
      <span className="section-label">선택한 공간</span>
      <h2 id="space-detail-title">{space.name}</h2>
      <dl className="detail-list">
        <div>
          <dt>주소</dt>
          <dd>{space.address}</dd>
        </div>
        <div>
          <dt>시설 정보</dt>
          <dd>{space.facility}</dd>
        </div>
        <div>
          <dt>사용 조건</dt>
          <dd>{space.condition}</dd>
        </div>
        <div>
          <dt>프로그램 예시</dt>
          <dd>{space.programExample}</dd>
        </div>
      </dl>
    </aside>
  );
}
