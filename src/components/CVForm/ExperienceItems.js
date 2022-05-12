import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ExperienceItems = ({
  id,
  experienceItem,
  deleteExperience,
  handleExperienceChange,
}) => {
  return (
    <>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="position"
          placeholder="Position"
          onChange={(e) => handleExperienceChange(e, id)}
          value={experienceItem.position}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="company"
          placeholder="Company"
          onChange={(e) => handleExperienceChange(e, id)}
          value={experienceItem.company}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="experienceCity"
          placeholder="City"
          onChange={(e) => handleExperienceChange(e, id)}
          value={experienceItem.city}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="experienceFrom"
          placeholder="From"
          onChange={(e) => handleExperienceChange(e, id)}
          value={experienceItem.experienceFrom}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="experienceTo"
          placeholder="To"
          onChange={(e) => handleExperienceChange(e, id)}
          value={experienceItem.experienceTo}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          as="textarea"
          id="workSummary"
          placeholder="Work Summary"
          onChange={(e) => handleExperienceChange(e, id)}
          value={experienceItem.workSummary}
        />
      </Form.Group>
      <Button variant="dark mb-3 w-100" onClick={() => deleteExperience(id)}>
        Delete
      </Button>
    </>
  );
};

export default ExperienceItems;
