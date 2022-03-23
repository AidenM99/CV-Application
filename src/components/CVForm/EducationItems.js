import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const EducationItems = () => {
  return (
    <>
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
      <Button variant="dark">Delete</Button>
    </>
  );
};

export default EducationItems;
