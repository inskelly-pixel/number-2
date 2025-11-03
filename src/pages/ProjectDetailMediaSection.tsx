import React from "react";
import ProjectDetailMedia from "./ProjectDetailMedia";

interface Props {
  id: string;
  title: string;
  description?: string;
  descriptionKo?: string;
}

const ProjectDetailMediaSection: React.FC<Props> = ({
  id,
  title,
  description,
  descriptionKo,
}) => {
  if (id === "3") {
    return (
      <ProjectDetailMedia
        video="/videos/video3481600811.mp4"
        svgs={["/images/image144.svg", "/images/Group569.svg"]}
        title={title}
        description={"hello"}
        descriptionKo={"미국"}
      />
    );
  }

  if (id === "4") {
    return (
      <ProjectDetailMedia
        video="/videos/video3481600811.mp4"
        svgs={["/images/Frame 30.svg", "/images/frame34.svg"]}
        title={title}
        description={"hi"}
        descriptionKo={"아난"}
      />
    );
  }

    if (id === "5") {
    return (
      <ProjectDetailMedia
        video="/videos/video3481600811 복사본.mp4"
        svgs={["/images/Frame 30.svg", "/images/frame34.svg"]}
        title={title}
        description={"you"}
        descriptionKo={"슬퍼"}
      />
    );
  }

  return null;
};

export default ProjectDetailMediaSection;
