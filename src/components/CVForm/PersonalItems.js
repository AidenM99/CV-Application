import { Form } from "react-bootstrap";

const PersonalItems = ({ personalInfo, handlePersonalChange }) => {
  return (
    <>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="firstName"
          placeholder="First Name"
          onChange={(e) => handlePersonalChange(e)}
          value={personalInfo.firstName}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="lastName"
          placeholder="Last Name"
          onChange={(e) => handlePersonalChange(e)}
          value={personalInfo.lastName}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="title"
          placeholder="Title"
          onChange={(e) => handlePersonalChange(e)}
          value={personalInfo.title}
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
          value={personalInfo.phone}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="email"
          id="email"
          placeholder="Email"
          onChange={(e) => handlePersonalChange(e)}
          value={personalInfo.email}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="github"
          placeholder="Github"
          onChange={(e) => handlePersonalChange(e)}
          value={personalInfo.github}
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
          value={personalInfo.summary}
        />
      </Form.Group>
    </>
  );
};

export default PersonalItems;
