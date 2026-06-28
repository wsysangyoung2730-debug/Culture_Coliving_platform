import { PlaceholderImage } from "../common/PlaceholderImage";
import type { Program } from "../../data/programs";

type ProgramCardProps = {
  program: Program;
  onApply: (program: Program) => void;
};

const priceFormatter = new Intl.NumberFormat("ko-KR");

export function ProgramCard({ program, onApply }: ProgramCardProps) {
  return (
    <article className="program-card">
      <PlaceholderImage label={program.posterText} variant="program" />
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
              정가 {priceFormatter.format(program.originalPrice)}원
            </span>
            <strong>주민 {priceFormatter.format(program.residentPrice)}원</strong>
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
