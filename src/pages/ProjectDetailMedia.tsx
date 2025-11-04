import React from "react";

interface ProjectDetailMediaProps {
  video?: string;
  title: string;
  description?: string;     // 영어 설명
  descriptionKo?: string;   // 한글 설명
  description3: string;
  svgs?: string[];          // SVG 배열
}

const ProjectDetailMedia: React.FC<ProjectDetailMediaProps> = ({
  video,
  title,
  description,
  descriptionKo,
  svgs,
}) => {
  return (
    <div className="flex flex-col gap-20">
      {/* 🎥 영상 */}
      {video && (
        <video
          src={video}
          controls
          className="w-[800px] h-[400px] mt-32 rounded-lg shadow-md mx-auto"
        />
      )}

      {/* 📝 설명 (한글 우선, 없으면 영어) */}
      {(descriptionKo || description) && (
        <div className="mt-4 ml-auto w-[460px] text-left mr-[50px] mb-12">
          <p className="text-md text-muted-foreground leading-relaxed">
             description3= "dkf"
            {descriptionKo || description}
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
