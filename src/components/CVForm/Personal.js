import PersonalItems from "./PersonalItems";

const Personal = ({ personalInfo, handlePersonalChange }) => {
  return (
    <section className="form-section personal-section mb-3">
      <div className="section-heading-container">
        <h3 className="section-heading">Personal</h3>
        <PersonalItems
          personalInfo={personalInfo}
          handlePersonalChange={handlePersonalChange}
        />
      </div>
    </section>
  );
};

export default Personal;
