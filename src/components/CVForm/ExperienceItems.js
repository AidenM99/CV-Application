import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ExperienceItems = ({ id, deleteExperience }) => {
  return (
    <>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="position"
          placeholder="Position"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="company"
          placeholder="Company"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="city"
          placeholder="City"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="experienceFrom"
          placeholder="From"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="experienceTo"
          placeholder="To"
        />
      </Form.Group>
      <Button variant="dark" onClick={() => deleteExperience(id)}>
        Delete
      </Button>
    </>
  );
};

export default ExperienceItems;
