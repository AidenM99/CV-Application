const CVPreviewHeader = ({ personalInfo }) => {
  return (
    <div className="cv-preview-header bg-dark d-flex flex-row">
      <div className="avatar-container">
        <img src={personalInfo.photo} alt="Avatar" className="avatar"></img>
      </div>
      <div className="personal-info-container d-flex flex-column justify-content-start">
        <div className="title-name-container">
          <h2 className="name">
            {personalInfo.firstName} {personalInfo.lastName}
          </h2>
          <p className="title">{personalInfo.title}</p>
        </div>
        <div className="icons d-flex flex-column">
          <p>
            <i className="fa-solid fa-phone icon"></i>
            <span>{personalInfo.phone}</span>
          </p>
          <p>
            <i className="fa-solid fa-at icon"></i>
            <span>{personalInfo.email}</span>
          </p>
          <p>
            <i className="fa-brands fa-github icon"></i>
            <span>{personalInfo.github}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CVPreviewHeader;
