import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ExperienceItems = ({ id, deleteExperience, handleExperienceChange }) => {
  return (
    <>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="position"
          placeholder="Position"
          onChange={(e) => handleExperienceChange(e, id)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="company"
          placeholder="Company"
          onChange={(e) => handleExperienceChange(e, id)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="city"
          placeholder="City"
          onChange={(e) => handleExperienceChange(e, id)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="experienceFrom"
          placeholder="From"
          onChange={(e) => handleExperienceChange(e, id)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="experienceTo"
          placeholder="To"
          onChange={(e) => handleExperienceChange(e, id)}
        />
      </Form.Group>
      <Button variant="dark" onClick={() => deleteExperience(id)}>
        Delete
      </Button>
    </>
  );
};

export default ExperienceItems;
