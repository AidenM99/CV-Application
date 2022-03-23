import CVForm from "./CVForm/CVForm";
import CVPreview from "./CVPreview/CVPreview";
import defaultCV from "./Utils/DefaultCV";
import uniqid from "uniqid";
import { useState } from "react";

const Main = () => {
  const [cv, setCV] = useState(defaultCV);

  const handleAddEducation = (education) => {
    setCV((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          key: uniqid(),
          universityName: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  return (
    <main className="container">
      <div className="row">
        <CVForm currentCV={cv} addEducation={handleAddEducation} />
        <CVPreview />
      </div>
    </main>
  );
};

export default Main;
