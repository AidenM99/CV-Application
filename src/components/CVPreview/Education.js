import uniqid from "uniqid";

const Education = ({ education }) => {
  return (
    <section>
      <h3 className="underline pb-1">Education</h3>
      {education.map((educationItem) => (
        <div key={uniqid()}>
          <p key={uniqid()}>{educationItem.university}</p>
          <p key={uniqid()}>{educationItem.city}</p>
          <p key={uniqid()}>{educationItem.degree}</p>
          <p key={uniqid()}>{educationItem.subject}</p>
          <p key={uniqid()}>{educationItem.educationFrom}</p>
          <p key={uniqid()}>{educationItem.educationTo}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
