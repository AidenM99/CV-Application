import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import CVPreviewHeader from "./CVPreviewHeader";
import React from "react";

const CVPreview = React.forwardRef((props, ref) => {
  const { personalInfo } = props.currentCV;
  const { education } = props.currentCV;
  const { experience } = props.currentCV;

  return (
    <div
      ref={ref}
      className="preview-cv shadow position-sticky"
      style={{ height: "297mm", width: "210mm" }}
    >
      <CVPreviewHeader personalInfo={personalInfo} />
      <div className="cv-preview-main pe-5 ps-5 pt-4 pb-4">
        <Personal personalInfo={personalInfo} />
        <Experience experience={experience} />
        <Education education={education} />
      </div>
    </div>
  );
});

export default CVPreview;
