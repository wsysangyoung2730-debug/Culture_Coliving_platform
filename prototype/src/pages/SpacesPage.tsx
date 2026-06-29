import { useState } from "react";
import { SectionLabel } from "../components/common/SectionLabel";
import { SpaceApplicationModal } from "../components/spaces/SpaceApplicationModal";
import { SpaceCard } from "../components/spaces/SpaceCard";
import { SpaceDetailPanel } from "../components/spaces/SpaceDetailPanel";
import { SpacesMap } from "../components/spaces/SpacesMap";
import { spaces } from "../data/spaces";
import type { Space } from "../data/spaces";

export function SpacesPage() {
  const [selectedSpace, setSelectedSpace] = useState<Space>(spaces[0]);
  const [applicationSpace, setApplicationSpace] = useState<Space | null>(null);

  const handleApply = (space: Space) => {
    if (space.status === "마감") {
      return;
    }

    setSelectedSpace(space);
    setApplicationSpace(space);
  };

  return (
    <div className="page-stack">
      <section className="page-intro">
        <SectionLabel>창작 거점 탐색</SectionLabel>
        <h1>공간 찾기</h1>
        <p>
          청년 창작자가 활동할 수 있는 빈 상가를 확인하고,
          <br />
          공간 사용을 신청할 수 있습니다.
        </p>
        <p>
          공간은 조건부 저비용 또는 감면 형태로 제공되며, 신청자는 기본 시설
          관리와 월 1회 주민 대상 문화 프로그램 운영에 동의해야 합니다.
        </p>
      </section>

      <SpacesMap
        onSelectSpace={setSelectedSpace}
        selectedSpaceId={selectedSpace.id}
        spaces={spaces}
      />

      <section className="content-section">
        <div className="section-heading">
          <SectionLabel>공간 목록</SectionLabel>
          <h2>사용 가능 공간 목록</h2>
          <p>사용 가능한 공간의 정보를 확인하고 비교하세요.</p>
        </div>
        <div className="spaces-layout">
          <div className="spaces-card-list">
            {spaces.map((space) => (
              <SpaceCard
                isSelected={space.id === selectedSpace.id}
                key={space.id}
                onApply={handleApply}
                onSelect={setSelectedSpace}
                space={space}
              />
            ))}
          </div>
          <SpaceDetailPanel space={selectedSpace} />
        </div>
      </section>

      <SpaceApplicationModal
        key={applicationSpace?.id ?? "closed"}
        onClose={() => setApplicationSpace(null)}
        space={applicationSpace}
      />
    </div>
  );
}
