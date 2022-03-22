import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

const CVForm = () => {
  return (
    <div className="col-lg-6">
      <form className="user-cv shadow">
        <Personal />
        <Education />
        <Experience />
      </form>
    </div>
  );
};

export default CVForm;
