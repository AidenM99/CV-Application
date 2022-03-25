const Education = ({ education }) => {
  return (
    <section>
      <h2 className="border-bottom border-dark">Education</h2>
      {education.map((educationItem) => (
        <div>
          <p>{educationItem.university}</p>
          <p>{educationItem.city}</p>
          <p>{educationItem.degree}</p>
          <p>{educationItem.subject}</p>
          <p>{educationItem.from}</p>
          <p>{educationItem.to}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
