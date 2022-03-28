import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import { Form } from "react-bootstrap";

const CVForm = ({
  currentCV,
  addEducation,
  deleteEducation,
  addExperience,
  deleteExperience,
  handlePersonalChange,
  handleEducationChange,
  handleExperienceChange,
}) => {
  const { education } = currentCV;
  const { experience } = currentCV;

  return (
    <Form className="user-cv shadow">
      <Personal handlePersonalChange={handlePersonalChange} />
      <Education
        education={education}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
        handleEducationChange={handleEducationChange}
      />
      <Experience
        experience={experience}
        addExperience={addExperience}
        deleteExperience={deleteExperience}
        handleExperienceChange={handleExperienceChange}
      />
    </Form>
  );
};

export default CVForm;
