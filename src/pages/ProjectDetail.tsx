import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectDetailMediaSection from "./ProjectDetailMediaSection";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      {/* 메인 콘텐츠 */}
      <div className="flex-1 px-4 md:px-6 py-1">
        {/* Header */}
        <header className="relative">
          <div className="absolute top-0 right-3 flex gap-6">
            {project?.icons?.[0] && (
              <Link to={`/project-ko/${id}`}>
                <img
                  src={project.icons[0]}
                  alt="KR/EN"
                  className="w-7 h-7 md:w-9 md:h-9"
                />
              </Link>
            )}
            {project?.icons?.[1] && (
              <Link to="/">
                <img
                  src={project.icons[1]}
                  alt="Close"
                  className="w-6 h-6 md:w-9 md:h-9"
                />
              </Link>
            )}
          </div>

          <div className="mt-6 flex flex-col gap-18">
            <div className="flex flex-row gap-8 items-start">
              <div className="mt-24 ml-5 space-y-1 w-[200px]">
                <h1 className="text-xl font-normal">{project.title}</h1>
                <p className="text-md text-muted-foreground">{project.year}</p>
              </div>
              <div className="mt-24 flex flex-row gap-6 w-[1000px]">
                <div className="space-y-1 w-[460px]">
                  <h2 className="text-md font-normal">{project.category}</h2>
                  <p className="text-md text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="space-y-1 w-[460px]">
                  <h2 className="text-md font-normal invisible">kkk</h2>
                  <p className="text-md text-muted-foreground leading-relaxed">
                    {project.description2}
                  </p>
                </div>
              </div>
            </div>
            {project.script2 && (
              <p className="text-md text-muted-foreground w-[300px] leading-6 text-sm ml-auto mr-2 mt-10 text-right">
                {project.script2}
              </p>
            )}
          </div>
        </header>

        {/* Project Images + Media */}
        <main className="flex flex-col gap-6 relative mt-8">
          {/* 이미지 렌더링 */}
          <div className="flex flex-col gap-32">
            {project.images.map((image, index) => (
              <div key={index} className="relative w-full">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* textSets */}
          {project.textSets?.map((textSet, tsIndex) => {
            if (!textSet.title && (!textSet.texts || textSet.texts.length === 0))
              return null;

            return (
              <div
                key={tsIndex}
                className="absolute flex flex-col items-start p-3 text-sm rounded-lg z-50"
                style={{
                  top: textSet.position?.top,
                  left: textSet.position?.left,
                  color: textSet.color || "white",
                  width: textSet.width || "auto",
                }}
              >
                {textSet.title && (
                  <span className="text-lg font-semibold mb-2">
                    {textSet.title}
                  </span>
                )}
                {textSet.texts?.map((txt, i) => (
                  <p
                    key={i}
                    className="mb-1 whitespace-pre-line leading-relaxed"
                  >
                    {txt}
                  </p>
                ))}
              </div>
            );
          })}

          <ProjectDetailMediaSection
            id={String(project.id)}
            title={project.title}
            description={project.description}
          />
        </main>
      </div>
{/* 하단 Other Projects */}
<div className="mt-24 px-4 py-8 bg-white w-full relative">
  <h3 className="text-lg font-normal mb-5 ml-5 relative flex items-center">
    {/* 노란색 원형 */}
    <span className="w-10 h-10 bg-[#FFF000] rounded-full mr-3 flex-shrink-0"></span>
    Other Projects
  </h3>

  <div className="flex flex-col space-y-2 text-sm text-gray-400">
    {projects
      .filter((p) => p.id !== project.id)
      .map((p) => (
        <Link
          key={p.id}
          to={`/project/${p.id}`}
          className="hover:text-black transition-colors flex items-center"
        >
          <span className="italic flex items-center ml-[1000px] gap-2">
            <span>{p.number}</span>
            {p.title}
          </span>
          <span className="ml-auto">{p.year}</span>
        </Link>
      ))}
  </div>
</div>
    </div>
  );
};

export default ProjectDetail;
