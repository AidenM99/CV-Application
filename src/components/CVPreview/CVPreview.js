import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import CVPreviewHeader from "./CVPreviewHeader";

const CVPreview = () => {
  return (
    <div className="col-lg-6">
      <form className="preview-cv shadow">
        <CVPreviewHeader />
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
