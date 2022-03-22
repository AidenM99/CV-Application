import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const Experience = () => {
  return (
    <section className="form-section experience-section">
      <div className="section-heading-container">
        <h3 className="section-heading">Experience</h3>
      </div>
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
          id="experienceTo"
          placeholder="To"
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
      <div className="form-buttons">
        <Button variant="light">Add</Button>
        <Button variant="dark">Delete</Button>
      </div>
    </section>
  );
};

export default Experience;
