import uniqid from "uniqid";

const Experience = ({ experience }) => {
  return (
    <section>
      <h3 className="border-bottom border-2 pb-1 fw-bold">Experience</h3>
      {experience.map((experienceItem) => (
        <div
          className="experience-items-container border-start border-2 ps-3 mb-4 mt-4"
          key={uniqid()}
        >
          <p className="position" key={uniqid()}>
            {experienceItem.position}
          </p>
          <p className="city fst-italic" key={uniqid()}>
            {experienceItem.city}
          </p>
          <p className="company  fst-italic" key={uniqid()}>
            {experienceItem.company}
          </p>
          <p className="date fst-italic" key={uniqid()}>
            {experienceItem.experienceFrom} - {experienceItem.experienceTo}
          </p>
          <p className="work-summary mt-2" key={uniqid()}>
            {experienceItem.workSummary}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
