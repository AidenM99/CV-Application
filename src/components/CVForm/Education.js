import Button from "react-bootstrap/Button";
import EducationItems from "./EducationItems";

const Education = ({ education, addEducation }) => {
  const educationItems = education.map((educationItem) => (
    <EducationItems key={educationItem.key} />
  ));

  return (
    <section className="form-section education-section">
      <div className="section-heading-container">
        <h3 className="section-heading">Education</h3>
      </div>
      {educationItems}
      <Button variant="light" onClick={addEducation}>
        Add
      </Button>
    </section>
  );
};

export default Education;
