import type { Program } from "../../data/programs";

type ProgramPosterSliderProps = {
  programs: Program[];
};

const priceFormatter = new Intl.NumberFormat("ko-KR");

export function ProgramPosterSlider({ programs }: ProgramPosterSliderProps) {
  const repeatedPrograms = [...programs, ...programs];

  return (
    <section className="program-slider-section" aria-labelledby="program-slider-title">
      <div className="section-heading">
        <span className="section-label">진행 예정 프로그램</span>
        <h2 id="program-slider-title">이번 달 동네 문화 포스터</h2>
      </div>
      <div className="poster-marquee" aria-label="프로그램 포스터 슬라이드">
        <div className="poster-track">
          {repeatedPrograms.map((program, index) => (
            <article className="program-poster" key={`${program.id}-${index}`}>
              <span className="poster-category">{program.category}</span>
              <h3>{program.posterText}</h3>
              <p>{program.title}</p>
              <div className="poster-meta">
                <span>{program.date}</span>
                <span>{program.area}</span>
              </div>
              <strong>주민 {priceFormatter.format(program.residentPrice)}원</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
