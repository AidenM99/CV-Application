import uniqid from "uniqid";

const Education = ({ education }) => {
  return (
    <section>
      <h2 className="border-bottom border-dark">Education</h2>
      {education.map((educationItem) => (
        <div key={uniqid()}>
          <p key={uniqid()}>{educationItem.university}</p>
          <p key={uniqid()}>{educationItem.city}</p>
          <p key={uniqid()}>{educationItem.degree}</p>
          <p key={uniqid()}>{educationItem.subject}</p>
          <p key={uniqid()}>{educationItem.from}</p>
          <p key={uniqid()}>{educationItem.to}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
