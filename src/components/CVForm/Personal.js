import PersonalItems from "./PersonalItems";

const Personal = ({ handlePersonalChange }) => {
  return (
    <section className="form-section personal-section">
      <div className="section-heading-container">
        <h3 className="section-heading">Personal</h3>
        <PersonalItems handlePersonalChange={handlePersonalChange} />
      </div>
    </section>
  );
};

export default Personal;
