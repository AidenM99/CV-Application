import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

const CVForm = ({ currentCV, addEducation, deleteEducation }) => {
  const { education } = currentCV;

  return (
    <div className="col-lg-6">
      <form className="user-cv shadow">
        <Personal />
        <Education
          education={education}
          addEducation={addEducation}
          deleteEducation={deleteEducation}
        />
        <Experience />
      </form>
    </div>
  );
};

export default CVForm;
