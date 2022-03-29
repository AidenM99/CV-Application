import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import CVPreviewHeader from "./CVPreviewHeader";
import { Form } from "react-bootstrap";
import React from "react";

const CVPreview = React.forwardRef((props, ref) => {
  const { personalInfo } = props.currentCV;
  const { education } = props.currentCV;
  const { experience } = props.currentCV;

  return (
    <Form ref={ref} className="preview-cv shadow min-vh-100 position-sticky">
      <CVPreviewHeader personalInfo={personalInfo} />
      <div className="cv-preview-main pe-5 ps-5 pt-4 pb-4">
        <Personal personalInfo={personalInfo} />
        <Education education={education} />
        <Experience experience={experience} />
      </div>
    </Form>
  );
});

export default CVPreview;
