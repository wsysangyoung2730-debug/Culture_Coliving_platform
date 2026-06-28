import { PlaceholderImage } from "../common/PlaceholderImage";
import type { Space } from "../../data/spaces";

type SpaceCardProps = {
  space: Space;
  isSelected: boolean;
  onSelect: (space: Space) => void;
  onApply: (space: Space) => void;
};

export function SpaceCard({
  space,
  isSelected,
  onSelect,
  onApply
}: SpaceCardProps) {
  const isClosed = space.status === "마감";

  return (
    <article className={`space-card ${isSelected ? "space-card-selected" : ""}`}>
      <button
        className="space-card-select"
        onClick={() => onSelect(space)}
        type="button"
      >
        <PlaceholderImage label={space.area} variant="space" />
        <div className="space-card-body">
          <div className="card-topline">
            <span>{space.area}</span>
            <span className={isClosed ? "badge badge-muted" : "badge"}>
              {space.status}
            </span>
          </div>
          <h3>{space.name}</h3>
          <p>{space.shortDescription}</p>
          <dl className="meta-list">
            <div>
              <dt>유형</dt>
              <dd>{space.type}</dd>
            </div>
            <div>
              <dt>면적</dt>
              <dd>{space.size}</dd>
            </div>
            <div>
              <dt>층수</dt>
              <dd>{space.floor}</dd>
            </div>
            <div>
              <dt>잔여</dt>
              <dd>
                {space.remainingUnits}/{space.totalUnits}
              </dd>
            </div>
            <div>
              <dt>조건</dt>
              <dd>{space.monthlyCost}</dd>
            </div>
          </dl>
          <div className="chip-list" aria-label="추천 활용 분야">
            {space.recommendedFor.map((item) => (
              <span className="soft-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </button>
      <div className="space-card-actions">
        <button
          className="button button-primary space-apply-button"
          disabled={isClosed}
          onClick={() => onApply(space)}
          type="button"
        >
          {isClosed ? "신청 마감" : "지금 바로 신청하기"}
        </button>
      </div>
    </article>
  );
}
