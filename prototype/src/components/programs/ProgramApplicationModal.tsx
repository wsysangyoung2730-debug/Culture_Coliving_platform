import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { PriceSummary } from "./PriceSummary";
import type { Program } from "../../data/programs";

type ProgramApplicationModalProps = {
  program: Program | null;
  onClose: () => void;
};

type ParticipantType = "resident" | "visitor";

type ProgramForm = {
  name: string;
  contact: string;
  quantity: number;
  participantType: ParticipantType;
  request: string;
  agreeRefund: boolean;
  agreePrivacy: boolean;
};

const initialForm: ProgramForm = {
  name: "",
  contact: "",
  quantity: 1,
  participantType: "resident",
  request: "",
  agreeRefund: false,
  agreePrivacy: false
};

export function ProgramApplicationModal({
  program,
  onClose
}: ProgramApplicationModalProps) {
  const [form, setForm] = useState<ProgramForm>(initialForm);
  const [error, setError] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!program) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, program]);

  if (!program) {
    return null;
  }

  const maxQuantity = Math.min(program.capacity, 10);

  const updateForm = <Key extends keyof ProgramForm>(
    field: Key,
    value: ProgramForm[Key]
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleQuantityChange = (value: string) => {
    const nextQuantity = Number(value);

    if (Number.isNaN(nextQuantity)) {
      updateForm("quantity", 1);
      return;
    }

    updateForm("quantity", Math.min(Math.max(nextQuantity, 1), maxQuantity));
  };

  const isValid =
    form.name.trim() &&
    form.contact.trim() &&
    form.quantity >= 1 &&
    form.quantity <= maxQuantity &&
    form.participantType &&
    form.agreeRefund &&
    form.agreePrivacy;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid) {
      setError("필수 정보를 입력하고 모든 동의 항목을 체크해주세요.");
      return;
    }

    setError("");
    setIsCompleted(true);
  };

  return (
    <div className="modal-backdrop" role="presentation">
      <div
        aria-labelledby="program-application-title"
        aria-modal="true"
        className="application-modal program-modal"
        role="dialog"
      >
        {isCompleted ? (
          <div className="success-state">
            <span className="section-label">결제 완료</span>
            <h2 id="program-application-title">
              결제가 완료되었습니다.
              <br />
              프로그램 신청이 완료되었습니다.
            </h2>
            <p>입력하신 연락처로 프로그램 안내가 발송됩니다.</p>
            <button className="button button-primary" onClick={onClose} type="button">
              확인
            </button>
          </div>
        ) : (
          <>
            <div className="modal-heading">
              <div>
                <span className="section-label">프로그램 신청</span>
                <h2 id="program-application-title">프로그램 신청</h2>
                <p>
                  지역 주민은 할인가로, 외부 방문객은 정가로 프로그램에 참여할
                  수 있습니다.
                </p>
              </div>
              <button className="modal-close" onClick={onClose} type="button">
                닫기
              </button>
            </div>

            <div className="program-payment-layout">
              <PriceSummary
                participantType={form.participantType}
                program={program}
                quantity={form.quantity}
              />

              <form className="program-application-form" onSubmit={handleSubmit}>
                <div className="selected-space-summary">
                  <strong>{program.title}</strong>
                  <span>
                    {program.area} · {program.date} · {program.time}
                  </span>
                </div>

                <label>
                  이름
                  <input
                    onChange={(event) => updateForm("name", event.target.value)}
                    value={form.name}
                  />
                </label>
                <label>
                  연락처
                  <input
                    onChange={(event) => updateForm("contact", event.target.value)}
                    value={form.contact}
                  />
                </label>
                <label>
                  참여 인원
                  <input
                    max={maxQuantity}
                    min={1}
                    onChange={(event) => handleQuantityChange(event.target.value)}
                    type="number"
                    value={form.quantity}
                  />
                </label>

                <fieldset className="segmented-control">
                  <legend>참여 유형</legend>
                  <button
                    className={form.participantType === "resident" ? "segment-active" : ""}
                    onClick={() => updateForm("participantType", "resident")}
                    type="button"
                  >
                    지역 주민
                  </button>
                  <button
                    className={form.participantType === "visitor" ? "segment-active" : ""}
                    onClick={() => updateForm("participantType", "visitor")}
                    type="button"
                  >
                    외부 방문객
                  </button>
                </fieldset>

                <label>
                  요청사항
                  <textarea
                    onChange={(event) => updateForm("request", event.target.value)}
                    placeholder="참여 전 전달하고 싶은 내용을 적어주세요."
                    value={form.request}
                  />
                </label>

                <fieldset className="agreement-list">
                  <legend>필수 동의</legend>
                  <p>{program.refundPolicy}</p>
                  <label>
                    <input
                      checked={form.agreeRefund}
                      onChange={(event) => updateForm("agreeRefund", event.target.checked)}
                      type="checkbox"
                    />
                    환불 정책에 동의합니다.
                  </label>
                  <label>
                    <input
                      checked={form.agreePrivacy}
                      onChange={(event) => updateForm("agreePrivacy", event.target.checked)}
                      type="checkbox"
                    />
                    개인정보 수집 및 이용에 동의합니다.
                  </label>
                </fieldset>

                {error && <p className="form-error">{error}</p>}

                <button className="button button-primary form-submit" type="submit">
                  결제하기
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
