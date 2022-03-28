import uniqid from "uniqid";

const Experience = ({ experience }) => {
  return (
    <section>
      <h3 className="underline pb-1">Experience</h3>
      {experience.map((experienceItem) => (
        <div key={uniqid()}>
          <p key={uniqid()}>{experienceItem.position}</p>
          <p key={uniqid()}>{experienceItem.company}</p>
          <p key={uniqid()}>{experienceItem.city}</p>
          <p key={uniqid()}>{experienceItem.experienceFrom}</p>
          <p key={uniqid()}>{experienceItem.experienceTo}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
