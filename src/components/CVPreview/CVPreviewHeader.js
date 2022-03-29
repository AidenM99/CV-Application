const CVPreviewHeader = ({ personalInfo }) => {
  return (
    <div className="cv-preview-header bg-dark d-flex flex-row">
      <div className="avatar-container">
        <img
          src={personalInfo.photo}
          alt="Avatar"
          className="avatar d-block h-100"
        ></img>
      </div>
      <div className="personal-info-container d-flex flex-column justify-content-start p-3">
        <div className="title-name-container">
          <h2 className="name m-0">
            <span className="fw-light">{personalInfo.firstName} </span>
            <span className="fw-bold">{personalInfo.lastName}</span>
          </h2>
          <p className="title fw-light fst-italic m-0">{personalInfo.title}</p>
        </div>
        <div className="icons d-flex flex-column">
          <p>
            <i className="fa-solid fa-phone icon me-2"></i>
            <span>{personalInfo.phone}</span>
          </p>
          <p>
            <i className="fa-solid fa-at icon  me-2"></i>
            <span>{personalInfo.email}</span>
          </p>
          <p>
            <i className="fa-brands fa-github icon  me-2"></i>
            <span>{personalInfo.github}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CVPreviewHeader;
