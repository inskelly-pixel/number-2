import React from "react";
import ProjectDetailMedia from "./ProjectDetailMedia";

interface Props {
  id: string;
  title: string;
  description?: string;
  description5?: string; // ✅ 추가
}

const ProjectDetailMediaSection: React.FC<Props> = ({
  id,
  title,
  description,
  description5, // ✅ 구조 분해 추가

}) => {
  if (id === "3") {
    return (
      <ProjectDetailMedia
        video="https://player.vimeo.com/video/1125201347?badge=0&autopause=0&player_id=0&app_id=58479"
        svgs={["/images/image144.svg", "/images/Group569.svg"]}
        title={title}
        description={"hello"}
        description5={description5 || ""}

      />
    );
  }

  if (id === "4") {
    return (
      <ProjectDetailMedia
        video="https://player.vimeo.com/video/1124760235?h=8e72d8e123&badge=0&autopause=0&player_id=0&app_id=58479"
        svgs={["/images/seoul.svg"]}
        title={title}
        description={"hi"}
        description5={description5 || ""}

      />
    );
  }

    if (id === "5") {
    return (
      <ProjectDetailMedia
        video="https://player.vimeo.com/video/1124735859?badge=0&autopause=0&player_id=0&app_id=58479"
        svgs={["/images/image144.svg", "/images/Group569.svg"]}
        title={title}
        description={"you"}
        description5={description5 || "This"}

      />
    );
  }

  return null;
};

export default ProjectDetailMediaSection;
