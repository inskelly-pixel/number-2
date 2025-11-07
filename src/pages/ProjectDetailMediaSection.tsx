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
        description={"Each chapter unfolds and takes shape within a digital flow. The letters are visualized through distinct abstract movements and rhythms, turning the narrative into motion. As the story progresses—and with each click—the movements gradually expand and intensify."}
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
        description={"This web page visualizes Seoul’s densely saturated districts through distorted interpretations. Each area was explored firsthand to analyze its distinctive characteristics, from which three representative keywords were derived. Using a collage approach, the project aims to convey the complex and multifaceted nature of each district."}
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
        description={"In a resonant space where multiple voices overlap, I recorded spoken sounds and created a video based on them. By visualizing how sound gradually fragments and dissolves within a large space, the work conveys the spatial qualities of its acoustic environment."}
        description5={description5 || ""}

      />
    );
  }

  return null;
};

export default ProjectDetailMediaSection;
