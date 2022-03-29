const Personal = ({ personalInfo }) => {
  return (
    <section>
      <h3 className="border-bottom border-2 pb-1 fw-bold">Summary</h3>
      <p>{personalInfo.summary}</p>
    </section>
  );
};

export default Personal;
