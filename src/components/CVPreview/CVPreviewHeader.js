const CVPreviewHeader = ({ personalInfo }) => {
  return (
    <div className="cv-preview-header bg-dark">
      <h2 className="name">
        {personalInfo.firstName} {personalInfo.lastName}
      </h2>
      <p className="title">{personalInfo.title}</p>
    </div>
  );
};

export default CVPreviewHeader;
