import { Form } from "react-bootstrap";

const PersonalItems = ({ handlePersonalChange }) => {
  return (
    <>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="firstName"
          placeholder="First Name"
          onChange={(e) => handlePersonalChange(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="lastName"
          placeholder="Last Name"
          onChange={(e) => handlePersonalChange(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="title"
          placeholder="Title"
          onChange={(e) => handlePersonalChange(e)}
        />
        <Form.Group>
          <Form.Control
            className="mb-3"
            type="file"
            id="photo"
            onChange={(e) => handlePersonalChange(e)}
          />
        </Form.Group>
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="phone"
          placeholder="Phone"
          onChange={(e) => handlePersonalChange(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="email"
          id="email"
          placeholder="Email"
          onChange={(e) => handlePersonalChange(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="github"
          placeholder="Github"
          onChange={(e) => handlePersonalChange(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          as="textarea"
          id="summary"
          placeholder="Summary"
          onChange={(e) => handlePersonalChange(e)}
        />
      </Form.Group>
    </>
  );
};

export default PersonalItems;
