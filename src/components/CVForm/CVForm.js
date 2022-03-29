import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";

const CVForm = ({
  currentCV,
  addEducation,
  deleteEducation,
  addExperience,
  deleteExperience,
  handlePersonalChange,
  handleEducationChange,
  handleExperienceChange,
  loadCV,
  handlePrint,
}) => {
  const { education } = currentCV;
  const { experience } = currentCV;
  const { personalInfo } = currentCV;

  return (
    <Form className="shadow p-5 min-vh-100">
      <Personal
        personalInfo={personalInfo}
        handlePersonalChange={handlePersonalChange}
      />
      <Experience
        experience={experience}
        addExperience={addExperience}
        deleteExperience={deleteExperience}
        handleExperienceChange={handleExperienceChange}
      />
      <Education
        education={education}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
        handleEducationChange={handleEducationChange}
      />
      <Button variant="primary w-100 mb-3" onClick={loadCV}>
        Load Example CV
      </Button>
      <Button variant="primary w-100" onClick={handlePrint}>
        Generate PDF
      </Button>
    </Form>
  );
};

export default CVForm;
