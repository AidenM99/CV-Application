import Button from "react-bootstrap/Button";
import ExperienceItems from "./ExperienceItems";

const Experience = ({ experience, addExperience, deleteExperience }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItems
      id={experienceItem.id}
      key={experienceItem.id}
      deleteExperience={deleteExperience}
    />
  ));

  return (
    <section className="form-section experience-section">
      <div className="section-heading-container">
        <h3 className="section-heading">Experience</h3>
      </div>
      {experienceItems}
      <div className="form-buttons">
        <Button variant="light" onClick={addExperience}>
          Add
        </Button>
      </div>
    </section>
  );
};

export default Experience;
