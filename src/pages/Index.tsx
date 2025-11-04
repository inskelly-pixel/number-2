import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Index = () => {
  const positions = [
    { id: 1, top: "32%", left: "65%" },
    { id: 2, top: "32%", left: "52%" },
    { id: 3, top: "32%", left: "40%" },
    { id: 4, top: "18%", left: "29%" },
    { id: 5, top: "14%", left: "23%" },
    { id: 6, top: "14%", left: "18%" },
    { id: 7, top: "61%", left: "5%" },
    { id: 8, top: "60%", left: "19.5%" },
    { id: 9, top: "88.5%", left: "18%" },
    { id: 10, top: "60%", left: "55%" },
    { id: 11, top: "88.5%", left: "52%" },
    { id: 12, top: "57%", left: "86%" },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-helvetica">
      {/* Header */}
      <header className="container mx-auto px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left */}
          <div className="space-y-1">
            <h1 className="text-lg md:text-xl font-normal">Eun Kyeol Kim</h1>
            <p className="text-sm md:text-base text-gray-400 leading-tight">
              Ewha Womans University Visual Design major,
              <br />
              double major in Art History
            </p>
          </div>

          {/* Center */}
          <div className="space-y-1 max-w-[800px] md:ml-[-50px]">
            <h2 className="text-lg md:text-xl font-normal">Design + Contexts</h2>
            <p className="text-sm md:text-base text-gray-400 leading-snug">
              I pursue digital communication design that connects the contexts of everyday life.
              With an integrative mindset and flexible, experimental perspective, I strive to present creative visual solutions.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col text-sm text-gray-400 space-y-1">
            {projects.map((p) => (
              <Link
                key={p.id}
                to={`/project/${p.id}`}
                className="hover:text-black transition-colors flex items-center"
              >
                <span className="italic ml-[140px] flex">
                  <span className="mr-5">{p.number}</span>
                  {p.title}
                </span>
                <span className="ml-auto">{p.year}</span>
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* MAP SECTION */}
      <section className="relative w-full h-[100vh] -mt-10 bg-white">
        {/* 영역 배경 텍스트 */}
        <p className="absolute bottom-[4%] left-[6%] -rotate-90 text-gray-400 text-xl md:text-base tracking-wide w-[150px] origin-left">
          Brand Identity / Experience Design
        </p>
        <p className="absolute bottom-[4%] left-[35%] -rotate-90 text-gray-400 text-xl md:text-base w-[120px] origin-left">
          Editorial / Graphic Design
        </p>
        <p className="absolute top-[15%] left-[4.5%] text-gray-400 text-xl w-[120px] md:text-base">
          Video / Web Design
        </p>
        <p className="absolute top-[56%] right-[18%] text-gray-400 text-xl w-[120px] md:text-base">
          UX/UI User Experience Design
        </p>

        {/* 선(Line)들 (z-0) */}
        <div className="absolute top-[12%] left-[3%] w-[32%] h-[2.5px] bg-gray-500 z-0" />
        <div className="absolute top-[95%] left-[3%] w-[80%] h-[2.5px]  bg-gray-500 z-0" />
        <div className="absolute top-[30%] left-[32.5%] w-[44%] h-[2.5px]  bg-gray-500 z-0" />
        <div className="absolute top-[30%] left-[4%] w-[15.5%] h-[2.5px]  bg-gray-400 z-0" />
        <div className="absolute top-[54%] right-[1.3%] w-[25%] h-[2.5px]  bg-gray-500 z-0" />
        <div className="absolute top-[95%] right-[1.3%] w-[8%] h-[2.5px]  bg-gray-500 z-0" />

        <div className="absolute top-[40.2%] left-[13.9%] w-[11%] h-[2.5px] rotate-90   bg-gray-400 z-0" />
        <div className="absolute top-[43.1%] left-[68%] w-[11.6%] h-[2.5px] rotate-90  bg-gray-500 z-0" />
        <div className="absolute top-[53.5%] left-[-19.1%] w-[44.4%] h-[2.5px] rotate-90  bg-gray-500 z-0" />
        <div className="absolute top-[74.5%] left-[87%] w-[19.5%] h-[2.5px] rotate-90  bg-gray-500 z-0" />
        <div className="absolute top-[22%] left-[28.4%] w-[8.4%] h-[2.5px] rotate-90  bg-gray-500 z-0" />

        {/* 십자가 기준선 (z-0) */}
        <div className="absolute left-[24.2%] bottom-[40%] w-0 h-0">
          <div className="absolute w-[12vw] h-[0.4vh] bg-gray-400 rotate-45 left-1/2 -translate-x-1/2 z-0"></div>
        </div>
        <div className="absolute left-[55%] bottom-[40%] w-0 h-0">
          <div className="absolute w-[12vw] h-[0.4vh] bg-gray-400 -rotate-45 left-1/2 -translate-x-1/2 z-0"></div>
        </div>

        {/* 프로젝트 번호 + 원 (z-10) */}
        {positions.map((item) => (
          <div
            key={item.id}
            className="absolute z-10 group" // group 추가
            style={{ top: item.top, left: item.left }}
          >
            <div className="relative inline-block">
              {/* 항상 보이는 검정 원 */}
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                           w-12 h-12 md:w-12 md:h-12 rounded-full bg-gray-300"
                aria-hidden="true"
              />

              {/* 프로젝트 번호 */}
              <Link
                to={`/project/${item.id}`}
                className="relative z-10 text-white group-hover:text-black font-helvetica text-base md:text-lg flex items-center justify-center w-14 h-14 md:w-16 md:h-16 transition-colors duration-300"
              >
                {item.id}
              </Link>

              {/* 호버 시 노란색 원 */}
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                           w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F8F3A1]
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
            </div>
          </div>
        ))}

        {/* 화살표 (z-20) */}
        <div
          className="absolute bottom-[3%] right-[11.5%]
             w-0 h-0
             border-l-[20px] border-l-transparent
             border-r-[20px] border-r-transparent
             border-b-[35px] border-b-black z-20"
        />
      </section>
    </div>
  );
};

export default Index;
