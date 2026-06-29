const pilotSchedule = [
  {
    month: "1개월차",
    activities: ["공간 최종 점검", "참여 창작자 모집", "공간-창작자 매칭"]
  },
  {
    month: "2개월차",
    activities: ["사용협약 체결", "공간 기본 정비", "첫 프로그램 기획 등록"]
  },
  {
    month: "3개월차",
    activities: ["정기 프로그램 운영 시작", "주민 참여 모집", "후기 수집 시작"]
  },
  {
    month: "4개월차",
    activities: ["월간 이행 점검", "참가비·운영비 기록", "주민 재방문 데이터 확인"]
  },
  {
    month: "5개월차",
    activities: ["프로그램 개선 운영", "주민 서포터즈 운영", "공간 관리 상태 점검"]
  },
  {
    month: "6개월차",
    activities: ["성과 데이터 정리", "손익분기 검토", "재계약·확장 여부 평가"]
  }
];

export function PilotScheduleTable() {
  return (
    <div className="pilot-schedule-panel">
      <div className="pilot-schedule-heading">
        <span>6-MONTH PILOT</span>
        <h3>시범 운영 실행 일정</h3>
      </div>
      <div className="pilot-schedule-scroll">
        <table className="pilot-schedule-table">
          <thead>
            <tr>
              {pilotSchedule.map((phase) => (
                <th key={phase.month} scope="col">
                  {phase.month}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {pilotSchedule.map((phase) => (
                <td key={phase.month}>
                  <ul>
                    {phase.activities.map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
