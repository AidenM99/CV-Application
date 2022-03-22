import { Form } from "react-bootstrap";

const Personal = () => {
  return (
    <section className="form-section personal-section">
      <div className="section-heading-container">
        <h3 className="section-heading">Personal</h3>
      </div>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="title"
          placeholder="Title"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="firstName"
          placeholder="First Name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="lastName"
          placeholder="Last Name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="about"
          placeholder="About"
        />
      </Form.Group>
    </section>
  );
};

export default Personal;
