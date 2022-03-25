const Personal = ({ personalInfo }) => {
  return (
    <section>
      <h2 className="border-bottom border-dark">About</h2>
      <p>{personalInfo.about}</p>
    </section>
  );
};

export default Personal;
