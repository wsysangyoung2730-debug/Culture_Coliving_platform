import type { Program } from "../../data/programs";

type ParticipantType = "resident" | "visitor";

type PriceSummaryProps = {
  program: Program;
  participantType: ParticipantType;
  quantity: number;
};

const priceFormatter = new Intl.NumberFormat("ko-KR");

export function PriceSummary({
  program,
  participantType,
  quantity
}: PriceSummaryProps) {
  const isResident = participantType === "resident";
  const unitPrice = isResident ? program.residentPrice : program.originalPrice;
  const totalPrice = unitPrice * quantity;

  return (
    <aside className="price-summary" aria-label="결제 금액 요약">
      <span className="section-label">결제 요약</span>
      <h3>{program.title}</h3>
      <dl>
        <div>
          <dt>선택한 프로그램</dt>
          <dd>{program.spaceName}</dd>
        </div>
        <div>
          <dt>참여 유형</dt>
          <dd>{isResident ? "지역 주민" : "외부 방문객"}</dd>
        </div>
        <div>
          <dt>참여 인원</dt>
          <dd>{quantity}명</dd>
        </div>
        <div>
          <dt>1인 가격</dt>
          <dd>
            {isResident ? (
              <>
                <span className="original-price">
                  정가 {priceFormatter.format(program.originalPrice)}원
                </span>
                <strong>주민 할인가 {priceFormatter.format(program.residentPrice)}원</strong>
                <span>{program.discountRate}% 할인</span>
              </>
            ) : (
              <>
                <strong>정가 {priceFormatter.format(program.originalPrice)}원</strong>
                <span>할인 없음</span>
              </>
            )}
          </dd>
        </div>
        <div className="summary-total">
          <dt>총 결제 금액</dt>
          <dd>{priceFormatter.format(totalPrice)}원</dd>
        </div>
      </dl>
    </aside>
  );
}
