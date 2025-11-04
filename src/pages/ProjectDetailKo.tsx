import { useParams, Link } from "react-router-dom";
import { projectsKo } from "../data/projects";
import ProjectDetailMediaSection from "./ProjectDetailMediaSection";

const ProjectDetailKo = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsKo.find((p) => p.id === String(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>프로젝트를 찾을 수 없습니다</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <header className="relative px-4 md:px-6 py-8">
        <div className="absolute top-5 right-5 flex gap-6">
          {project?.icons?.[0] && (
            <Link to={`/project/${id}`}>
              <img
                src={project.icons[0]}
                alt="KR/EN"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </Link>
          )}
          {project?.icons?.[1] && (
            <Link to="/">
              <img
                src={project.icons[1]}
                alt="Close"
                className="w-7 h-7 md:w-10 md:h-10"
              />
            </Link>
          )}
        </div>

        <div className="mt-16 flex flex-col gap-18">
          <div className="flex flex-row gap-8 items-start">
            <div className="ml-2 space-y-1 w-[200px]">
              <h1 className="text-xl font-normal">{project.title}</h1>
              <p className="text-md text-muted-foreground">{project.year}</p>
            </div>
            <div className="flex flex-row gap-6 w-[1000px]">
              <div className="space-y-1 w-[460px]">
                <h2 className="text-md font-normal">{project.category}</h2>
                <p className="text-md text-muted-foreground leading-7">
                  {project.description3}
                </p>
              </div>
              <div className="space-y-1 w-[460px]">
                <h2 className="text-md font-normal invisible">kkk</h2>
                <p className="text-md text-muted-foreground leading-7">
                  {project.description4}
                </p>
              </div>
            </div>
          </div>
          {project.script2 && (
            <p className="text-md text-muted-foreground w-[150px] leading-6 ml-auto mr-2 text-right">
              {project.script2}
            </p>
          )}
        </div>
      </header>

      {/* Project Images + Media */}
      <main className="px-4 md:px-6 py-12 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          {project.images.map((image, index) => (
            <div key={index} className="relative w-full">
              <img
                src={image}
                alt={`${project.title} - 이미지 ${index + 1}`}
                className="w-full h-auto object-contain"
              />

              {/* textSets 기반 세로 배치 / 문단 형태 */}
              {project.textSets?.map((textSet, tsIndex) => {
                if (!textSet.title && (!textSet.texts || textSet.texts.length === 0))
                  return null;

                return (
                  <div
                    key={tsIndex}
                    className="absolute flex flex-col items-start p-3 text-sm rounded-lg max-w-[40%] z-50"
                    style={{
                      bottom: textSet.position?.bottom,
                      left: textSet.position?.left,
                      color: textSet.color || "white", // ✅ 색상 반영
                    }}
                  >
                    {textSet.title && (
                      <span className="text-lg font-semibold mb-2">
                        {textSet.title}
                      </span>
                    )}
                    {textSet.texts?.map((txt, i) => (
                      <p key={i} className="mb-1 whitespace-pre-line leading-7">
                        {txt}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <ProjectDetailMediaSection
          id={String(project.id)}
          title={project.title}
          description5={project.description5} // ✅ 추가

        />
      </main>
    </div>
  );
};

export default ProjectDetailKo;
