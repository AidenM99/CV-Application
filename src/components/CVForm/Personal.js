import PersonalItems from "./PersonalItems";

const Personal = ({ personalInfo, handlePersonalChange }) => {
  return (
    <section className="form-section personal-section mb-3">
      <div className="section-heading-container">
        <h2 className="section-heading">Personal</h2>
        <PersonalItems
          personalInfo={personalInfo}
          handlePersonalChange={handlePersonalChange}
        />
      </div>
    </section>
  );
};

export default Personal;
