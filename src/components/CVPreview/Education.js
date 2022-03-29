import uniqid from "uniqid";

const Education = ({ education }) => {
  return (
    <section>
      <h3 className="border-bottom border-2 pb-1 fw-bold">Education</h3>
      {education.map((educationItem) => (
        <div
          className="education-items-container border-start border-2 ps-3 mb-4 mt-4"
          key={uniqid()}
        >
          <p className="university" key={uniqid()}>
            {educationItem.university}
          </p>
          <p className="city fst-italic" key={uniqid()}>
            {educationItem.city}
          </p>
          <p className="subject  fst-italic" key={uniqid()}>
            {educationItem.subject}
          </p>
          <p className="date fst-italic" key={uniqid()}>
            {educationItem.educationFrom} - {educationItem.educationTo}
          </p>
          <p className="degree mt-2" key={uniqid()}>
            {educationItem.degree}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Education;
