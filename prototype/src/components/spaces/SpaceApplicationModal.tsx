import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import type { Space } from "../../data/spaces";

type SpaceApplicationModalProps = {
  space: Space | null;
  onClose: () => void;
};

type ApplicationForm = {
  name: string;
  phone: string;
  email: string;
  creatorType: string;
  activity: string;
  possibleProgram: string;
  desiredSpace: string;
  agreeManage: boolean;
  agreeProgram: boolean;
  agreePrivacy: boolean;
};

const initialForm: ApplicationForm = {
  name: "",
  phone: "",
  email: "",
  creatorType: "",
  activity: "",
  possibleProgram: "",
  desiredSpace: "",
  agreeManage: false,
  agreeProgram: false,
  agreePrivacy: false
};

const creatorTypeOptions = ["개인 창작자", "예술팀", "스타트업", "기획자", "기타"];

export function SpaceApplicationModal({
  space,
  onClose
}: SpaceApplicationModalProps) {
  const [form, setForm] = useState<ApplicationForm>({
    ...initialForm,
    desiredSpace: space?.name ?? ""
  });
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!space) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, space]);

  if (!space) {
    return null;
  }

  const updateField = <Key extends keyof ApplicationForm>(
    field: Key,
    value: ApplicationForm[Key]
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const isValid =
    form.name.trim() &&
    form.phone.trim() &&
    form.email.trim() &&
    form.creatorType &&
    form.activity.trim() &&
    form.possibleProgram.trim() &&
    form.desiredSpace.trim() &&
    form.agreeManage &&
    form.agreeProgram &&
    form.agreePrivacy;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid) {
      setError("필수 정보를 입력하고 모든 동의 항목을 체크해주세요.");
      return;
    }

    setError("");
    setIsSubmitted(true);
  };

  const handleConfirm = () => {
    onClose();
  };

  return (
    <div className="modal-backdrop" role="presentation">
      <div
        aria-labelledby="space-application-title"
        aria-modal="true"
        className="application-modal"
        role="dialog"
      >
        {isSubmitted ? (
          <div className="success-state">
            <span className="section-label">신청 완료</span>
            <h2 id="space-application-title">신청되었습니다.</h2>
            <p>검토 후 대표자 연락처로 안내드리겠습니다.</p>
            <button className="button button-primary" onClick={handleConfirm} type="button">
              확인
            </button>
          </div>
        ) : (
          <>
            <div className="modal-heading">
              <div>
                <span className="section-label">공간 신청</span>
                <h2 id="space-application-title">공간 대여 신청</h2>
                <p>
                  청년 창작자는 조건부 저비용으로 공간을 사용하고,
                  월 1회 주민 대상 문화 프로그램을 운영합니다.
                </p>
              </div>
              <button className="modal-close" onClick={onClose} type="button">
                닫기
              </button>
            </div>

            <div className="selected-space-summary">
              <strong>{space.name}</strong>
              <span>
                {space.area} · {space.size} · {space.monthlyCost}
              </span>
            </div>

            <form className="application-form" onSubmit={handleSubmit}>
              <label>
                이름 또는 팀명
                <input
                  onChange={(event) => updateField("name", event.target.value)}
                  value={form.name}
                />
              </label>
              <label>
                대표자 연락처
                <input
                  onChange={(event) => updateField("phone", event.target.value)}
                  value={form.phone}
                />
              </label>
              <label>
                이메일
                <input
                  onChange={(event) => updateField("email", event.target.value)}
                  type="email"
                  value={form.email}
                />
              </label>
              <label>
                창작자 형태
                <select
                  onChange={(event) => updateField("creatorType", event.target.value)}
                  value={form.creatorType}
                >
                  <option value="">선택해주세요</option>
                  {creatorTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="form-wide">
                활동 내용
                <textarea
                  onChange={(event) => updateField("activity", event.target.value)}
                  placeholder="현재 하고 있는 창작 활동이나 프로젝트를 간단히 적어주세요."
                  value={form.activity}
                />
              </label>
              <label className="form-wide">
                제공 가능한 프로그램
                <textarea
                  onChange={(event) => updateField("possibleProgram", event.target.value)}
                  placeholder="지역 주민에게 제공할 수 있는 프로그램을 적어주세요. 예: 월 1회 공연, 원데이 클래스, 앱 체험부스, 세미나 등"
                  value={form.possibleProgram}
                />
              </label>
              <label className="form-wide">
                희망 공간
                <input
                  onChange={(event) => updateField("desiredSpace", event.target.value)}
                  value={form.desiredSpace}
                />
              </label>

              <fieldset className="agreement-list">
                <legend>필수 동의</legend>
                <label>
                  <input
                    checked={form.agreeManage}
                    onChange={(event) => updateField("agreeManage", event.target.checked)}
                    type="checkbox"
                  />
                  공간 관리 의무에 동의합니다.
                </label>
                <label>
                  <input
                    checked={form.agreeProgram}
                    onChange={(event) => updateField("agreeProgram", event.target.checked)}
                    type="checkbox"
                  />
                  월 1회 문화 프로그램 운영에 동의합니다.
                </label>
                <label>
                  <input
                    checked={form.agreePrivacy}
                    onChange={(event) => updateField("agreePrivacy", event.target.checked)}
                    type="checkbox"
                  />
                  개인정보 수집 및 이용에 동의합니다.
                </label>
              </fieldset>

              {error && <p className="form-error">{error}</p>}

              <button className="button button-primary form-submit" type="submit">
                신청하기
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
