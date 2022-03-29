import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const EducationItems = ({
  id,
  educationItem,
  deleteEducation,
  handleEducationChange,
}) => {
  return (
    <>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="university"
          placeholder="University"
          onChange={(e) => handleEducationChange(e, id)}
          value={educationItem.university}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="city"
          placeholder="City"
          onChange={(e) => handleEducationChange(e, id)}
          value={educationItem.city}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="degree"
          placeholder="Degree"
          onChange={(e) => handleEducationChange(e, id)}
          value={educationItem.degree}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="subject"
          placeholder="Subject"
          onChange={(e) => handleEducationChange(e, id)}
          value={educationItem.subject}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="educationFrom"
          placeholder="From"
          onChange={(e) => handleEducationChange(e, id)}
          value={educationItem.educationFrom}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="educationTo"
          placeholder="To"
          onChange={(e) => handleEducationChange(e, id)}
          value={educationItem.educationTo}
        />
      </Form.Group>
      <Button variant="dark mb-3 w-100" onClick={() => deleteEducation(id)}>
        Delete
      </Button>
    </>
  );
};

export default EducationItems;
