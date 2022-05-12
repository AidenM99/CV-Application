import Button from "react-bootstrap/Button";
import ExperienceItems from "./ExperienceItems";

const Experience = ({
  experience,
  addExperience,
  deleteExperience,
  handleExperienceChange,
}) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItems
      id={experienceItem.id}
      key={experienceItem.id}
      experienceItem={experienceItem}
      deleteExperience={deleteExperience}
      handleExperienceChange={handleExperienceChange}
    />
  ));

  return (
    <section className="form-section experience-section mb-3">
      <div className="section-heading-container">
        <h2 className="section-heading">Experience</h2>
      </div>
      {experienceItems}
      <div className="form-buttons">
        <Button variant="light w-100" onClick={addExperience}>
          Add
        </Button>
      </div>
    </section>
  );
};

export default Experience;
