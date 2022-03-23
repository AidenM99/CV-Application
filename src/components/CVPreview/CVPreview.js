import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import CVPreviewHeader from "./CVPreviewHeader";

const CVPreview = ({ currentCV }) => {
  const { personalInfo } = currentCV;

  return (
    <div className="col-lg-6">
      <form className="preview-cv shadow">
        <CVPreviewHeader personalInfo={ personalInfo } />
        <div className="cv-preview-main">
          <Personal />
          <Education />
          <Experience />
        </div>
      </form>
    </div>
  );
};

export default CVPreview;
