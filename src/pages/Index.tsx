// ✅ 프로젝트 원 + 선 길이 px 고정 + 1440x900 기준 scale 반응형 전체 코드

import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useEffect, useState } from "react";

const Index = () => {
  const baseWidth = 1440;
  const baseHeight = 900;
  const [scale, setScale] = useState(1);

  // 프로젝트 원 좌표 (px 기준)
  const positions = [
    { id: 1, topPx: 300, leftPx: 1166 },
    { id: 2, topPx: 300, leftPx: 988 },
    { id: 3, topPx: 300, leftPx: 816 },
    { id: 4, topPx: 162, leftPx: 475 },
    { id: 5, topPx: 130, leftPx: 350 },
    { id: 6, topPx: 130, leftPx: 259.2 },
    { id: 7, topPx: 540, leftPx: 72 },
    { id: 8, topPx: 540, leftPx: 350 },
    { id: 9, topPx: 775, leftPx: 350 },
    { id: 10, topPx: 540, leftPx: 816 },
    { id: 11, topPx: 775, leftPx: 816 },
    { id: 12, topPx: 513, leftPx: 1550 },
  ];

  // 선 데이터(px 기준)
  const mapLines = [
    { topPx: 108, leftPx: 43, widthPx: 510, heightPx: 3, rotate: 0, color: 'gray-400' },
    { topPx: 855, leftPx: 43, widthPx: 1300, heightPx: 3, rotate: 0, color: 'gray-400' },
    { topPx: 270, leftPx: 500, widthPx: 750, heightPx: 3, rotate: 0, color: 'gray-400' },
    { topPx: 270, leftPx: 70, widthPx: 250, heightPx: 3, rotate: 0, color: 'gray-300' },
    { topPx: 485, leftPx: 1200, widthPx: 480, heightPx: 3, rotate: 0, color: 'gray-400' },
    { topPx: 855, leftPx: 1500, widthPx: 180, heightPx: 3, rotate: 0, color: 'gray-400' },

    { topPx: 470, leftPx: 320, widthPx: 200, heightPx: 3, rotate: 90, color: 'gray-300' },
    { topPx: 530, leftPx: 740, widthPx: 200, heightPx: 3, rotate: 45, color: 'gray-300' },
    { topPx: 270, leftPx: 1250, widthPx: 270, heightPx: 3, rotate: 90, color: 'gray-400' },
    { topPx: 108, leftPx: 46, widthPx: 750, heightPx: 3, rotate: 90, color: 'gray-400' },
    { topPx: 485, leftPx: 1650, widthPx: 372, heightPx: 3, rotate: 90, color: 'gray-400' },
    { topPx: 110, leftPx: 553, widthPx: 220, heightPx: 3, rotate: 90, color: 'gray-400' },
  ];

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth / baseWidth;
      const h = window.innerHeight / baseHeight;
      setScale(Math.min(w, h));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

      {/* MAP WRAPPER */}
      <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
        <div
          className="origin-top-left relative"
          style={{ width: `${baseWidth}px`, height: `${baseHeight}px`, transform: `scale(${scale})` }}
        >
          {/* 영역 텍스트 */}
          <p className="absolute bottom-[4.5%] left-[7%] -rotate-90 font-normal text-gray-400 text-2xl md:text-2xl tracking-wide w-[250px] origin-left">
            Brand Identity / Experience Design
          </p>
          <p className="absolute bottom-[61%] left-[42%] text-gray-400 text-2xl md:text-2xl w-[180px] origin-left">
            Editorial / Graphic Design
          </p>
          <p className="absolute top-[14%] left-[5%] text-gray-400 text-2xl w-[130px] md:text-2xl">
            Video / Web Design
          </p>
          <p className="absolute top-[56%] right-[-10%] text-gray-400 text-2xl w-[240px] md:text-2xl">
            UX/UI User Experience Design
          </p>

          {/* 선(Line) 렌더링 */}
          {mapLines.map((line, i) => (
            <div
              key={i}
              className={`absolute bg-${line.color} z-0`}
              style={{
                top: line.topPx,
                left: line.leftPx,
                width: line.widthPx,
                height: line.heightPx,
                transform: `rotate(${line.rotate}deg)`,
                transformOrigin: 'top left',
              }}
            />
          ))}

          {/* 프로젝트 원 + 번호 */}
          {positions.map((item, index) => (
            <div
              key={item.id}
              className="absolute z-10 group"
              style={{ top: item.topPx, left: item.leftPx }}
            >
              <div className="relative inline-block">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#F8F3A1]" aria-hidden="true" />
                <Link
                  to={`/project/${item.id}`}
                  className="relative z-10 text-black group-hover:text-black font-helvetica text-base flex items-center justify-center w-14 h-14 transition-colors duration-300"
                >{item.id}</Link>
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </div>
            </div>
          ))}

          {/* 화살표 */}
          <div
            className="absolute z-20"
            style={{
              bottom: "3%",
              right: "-5%",
              width: 0,
              height: 0,
              borderLeft: "20px solid transparent",
              borderRight: "20px solid transparent",
              borderBottom: "35px solid black",
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Index;
