import { PlaceholderImage } from "../common/PlaceholderImage";
import type { Program } from "../../data/programs";
import { formatPrice } from "./price";

type ProgramCardProps = {
  program: Program;
  onApply: (program: Program) => void;
};

export function ProgramCard({ program, onApply }: ProgramCardProps) {
  return (
    <article className="program-card">
      {program.posterImage ? (
        <img
          className="program-card-poster"
          src={program.posterImage}
          alt={`${program.title} 포스터`}
        />
      ) : (
        <PlaceholderImage label={program.posterText} variant="program" />
      )}
      <div className="program-card-body">
        <div className="card-topline">
          <span>{program.category}</span>
          <span>{program.area}</span>
        </div>
        <h3>{program.title}</h3>
        <p>{program.shortDescription}</p>
        <dl className="meta-list">
          <div>
            <dt>장소</dt>
            <dd>{program.spaceName}</dd>
          </div>
          <div>
            <dt>일시</dt>
            <dd>
              {program.date} · {program.time}
            </dd>
          </div>
          <div>
            <dt>진행</dt>
            <dd>{program.host}</dd>
          </div>
        </dl>
        <div className="program-price-row">
          <div>
            <span className="original-price">
              정가 {formatPrice(program.originalPrice)}
            </span>
            <strong>주민 {formatPrice(program.residentPrice)}</strong>
          </div>
          <span className="discount-badge">{program.discountRate}% 할인</span>
        </div>
        <button
          className="button button-primary program-apply-button"
          onClick={() => onApply(program)}
          type="button"
        >
          신청하기
        </button>
      </div>
    </article>
  );
}
