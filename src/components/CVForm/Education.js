import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const Education = () => {
  return (
    <section className="form-section education-section">
      <div className="section-heading-container">
        <h3 className="section-heading">Education</h3>
      </div>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="university"
          placeholder="University"
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
          id="degree"
          placeholder="Degree"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="subject"
          placeholder="Subject"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="educationFrom"
          placeholder="From"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="educationTo"
          placeholder="To"
        />
      </Form.Group>
      <div className="form-buttons">
        <Button variant="light">Add</Button>
        <Button variant="dark">Delete</Button>
      </div>
    </section>
  );
};

export default Education;
