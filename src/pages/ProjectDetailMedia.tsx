import React from "react";

interface ProjectDetailMediaProps {
  video?: string;
  title: string;
  description?: string;     // 영어 설명
  descriptionKo?: string;   // 한글 설명
  description5?: string;    // 한국어 설명 (추가)
  svgs?: string[];          // SVG 배열
}

const ProjectDetailMedia: React.FC<ProjectDetailMediaProps> = ({
  video,
  title,
  description,
  descriptionKo,
  description5,
  svgs,
}) => {
  // ✅ 한글 우선 순위 → description5 → descriptionKo → description
  const finalDescription = description5 || descriptionKo || description;

  return (
    <div className="flex flex-col gap-20">
      {/* 🎥 영상 */}
      {video && (
        video.includes("vimeo.com") ? (
          <div className="w-[800px] h-[450px] mt-32 rounded-lg shadow-md mx-auto">
          <iframe
  src={video}
  width="800"
  height="450"
  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
  allowFullScreen
  className="rounded-lg w-full h-full"
  title={title}
/>
          </div>
        ) : (
          <video
            src={video}
            controls
            className="w-[800px] h-[400px] mt-32 rounded-lg shadow-md mx-auto"
          />
        )
      )}

      {/* 📝 설명 */}
      {finalDescription && (
        <div className="mt-4 ml-auto w-[460px] text-left mr-[50px] mb-12">
          <p className="text-md text-muted-foreground leading-relaxed">
            {finalDescription}
          </p>
        </div>
      )}

      {/* 🖼️ SVG 이미지 여러 개 */}
      {svgs?.map((svg, index) => (
        <img
          key={index}
          src={svg}
          alt={`SVG illustration ${index + 1}`}
          className="w-full h-auto"
        />
      ))}
    </div>
  );
};

export default ProjectDetailMedia;
