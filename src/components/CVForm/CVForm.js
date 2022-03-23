import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

const CVForm = ({
  currentCV,
  addEducation,
  deleteEducation,
  addExperience,
  deleteExperience,
  handlePersonalChange
}) => {
  const { education } = currentCV;
  const { experience } = currentCV;

  return (
    <div className="col-lg-6">
      <form className="user-cv shadow">
        <Personal handlePersonalChange={handlePersonalChange}/>
        <Education
          education={education}
          addEducation={addEducation}
          deleteEducation={deleteEducation}
        />
        <Experience
          experience={experience}
          addExperience={addExperience}
          deleteExperience={deleteExperience}
        />
      </form>
    </div>
  );
};

export default CVForm;
