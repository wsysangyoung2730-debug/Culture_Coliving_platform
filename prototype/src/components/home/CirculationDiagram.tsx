const circulationNodes = [
  "주민 참여",
  "프로그램 참가비",
  "공간 유지·관리",
  "다음 문화 프로그램"
];

export function CirculationDiagram() {
  return (
    <div className="circulation-diagram" aria-label="지역 순환 구조">
      <div className="circulation-orbit" aria-hidden="true">
        <span className="orbit-ring" />
        <span className="orbit-pulse" />
      </div>
      <div className="circulation-center">
        <span>지역 순환</span>
        <strong>공간과 문화가 다시 동네로</strong>
      </div>
      {circulationNodes.map((node, index) => (
        <div className={`cycle-node cycle-node-${index + 1}`} key={node}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{node}</strong>
        </div>
      ))}
      <p className="sr-only">
        주민 참여에서 프로그램 참가비, 공간 유지와 관리, 다음 문화 프로그램으로
        이어지고 다시 주민 참여로 돌아오는 순환 구조입니다.
      </p>
    </div>
  );
}
