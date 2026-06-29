import { useState } from "react";
import { SectionLabel } from "../components/common/SectionLabel";
import { ProgramApplicationModal } from "../components/programs/ProgramApplicationModal";
import { ProgramCard } from "../components/programs/ProgramCard";
import { ProgramPosterSlider } from "../components/programs/ProgramPosterSlider";
import { programs } from "../data/programs";
import type { Program } from "../data/programs";

const categoryChips = ["공연", "클래스", "세미나", "체험 부스"];

export function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <div className="page-stack">
      <section className="page-intro">
        <SectionLabel>주민 문화 접근</SectionLabel>
        <h1>프로그램</h1>
        <p>
          동네 가까이에서 열리는 공연, 클래스, 세미나, 체험 프로그램을 확인하고
          신청할 수 있습니다.
        </p>
        <p>
          지역 주민은 할인가로, 외부 방문객은 정가로 참여할 수 있으며 참가비는
          공간 유지와 다음 프로그램 운영으로 다시 순환됩니다.
        </p>
        <div className="policy-chip-list" aria-label="프로그램 유형">
          {categoryChips.map((chip) => (
            <span className="policy-chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      </section>

      <ProgramPosterSlider programs={programs} />

      <section className="content-section">
        <div className="section-heading">
          <SectionLabel>프로그램 목록</SectionLabel>
          <h2>주민 할인가로 만나는 동네 문화 프로그램</h2>
        </div>
        <div className="program-grid">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              onApply={setSelectedProgram}
              program={program}
            />
          ))}
        </div>
      </section>

      <ProgramApplicationModal
        key={selectedProgram?.id ?? "closed"}
        onClose={() => setSelectedProgram(null)}
        program={selectedProgram}
      />
    </div>
  );
}
