import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import CVPreviewHeader from "./CVPreviewHeader";
import { Form } from "react-bootstrap";

const CVPreview = ({ currentCV }) => {
  const { personalInfo } = currentCV;
  const { education } = currentCV;
  const { experience } = currentCV;

  return (
    <Form className="preview-cv shadow">
      <CVPreviewHeader personalInfo={personalInfo} />
      <div className="cv-preview-main">
        <Personal personalInfo={personalInfo} />
        <Education education={education} />
        <Experience experience={experience} />
      </div>
    </Form>
  );
};

export default CVPreview;
