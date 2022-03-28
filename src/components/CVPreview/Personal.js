const Personal = ({ personalInfo }) => {
  return (
    <section>
      <h3 className="underline">Summary</h3>
      <p>{personalInfo.summary}</p>
    </section>
  );
};

export default Personal;
