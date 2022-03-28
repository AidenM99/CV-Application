import CVForm from "./CVForm/CVForm";
import CVPreview from "./CVPreview/CVPreview";
import defaultCV from "./Utils/DefaultCV";
import uniqid from "uniqid";
import { useState } from "react";

const Main = () => {
  const [cv, setCV] = useState(defaultCV);

  const handleAddEducation = () => {
    setCV((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uniqid(),
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

  const handleAddExperience = () => {
    setCV((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uniqid(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const handleDeleteEducation = (id) => {
    setCV((prevState) => ({
      ...prevState,
      education: prevState.education.filter(
        (educationItem) => educationItem.id !== id
      ),
    }));
  };

  const handleDeleteExperience = (id) => {
    setCV((prevState) => ({
      ...prevState,
      experience: prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      ),
    }));
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCV((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          [e.target.id]: reader.result,
        },
      }));
    };
    reader.readAsDataURL(file);
  };

  const handlePersonalChange = (e) => {
    if (e.target.type === "file") {
      handleChangeFile(e);
      return;
    }

    setCV((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [e.target.id]: e.target.value,
      },
    }));
  };

  const handleEducationChange = (e, itemID) => {
    setCV((prevState) => ({
      ...prevState,
      education: prevState.education.map((educationItem) => {
        if (educationItem.id === itemID) {
          return {
            ...educationItem,
            [e.target.id]: e.target.value,
          };
        } else {
          return educationItem;
        }
      }),
    }));
  };

  const handleExperienceChange = (e, itemID) => {
    setCV((prevState) => ({
      ...prevState,
      experience: prevState.experience.map((experienceItem) => {
        if (experienceItem.id === itemID) {
          return {
            ...experienceItem,
            [e.target.id]: e.target.value,
          };
        } else {
          return experienceItem;
        }
      }),
    }));
  };

  return (
    <main className="p-5">
      <div className="forms-container d-flex justify-content-center">
        <CVForm
          currentCV={cv}
          addEducation={handleAddEducation}
          deleteEducation={handleDeleteEducation}
          addExperience={handleAddExperience}
          deleteExperience={handleDeleteExperience}
          handlePersonalChange={handlePersonalChange}
          handleEducationChange={handleEducationChange}
          handleExperienceChange={handleExperienceChange}
        />
        <CVPreview currentCV={cv} />
      </div>
    </main>
  );
};

export default Main;
