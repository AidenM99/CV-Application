import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

const CVPreview = () => {
  return (
    <div className="col-lg-6">
      <form className="preview-cv shadow">
        <Personal />
        <Education />
        <Experience />
      </form>
    </div>
  );
};

export default CVPreview;
