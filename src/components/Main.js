import CVForm from "./CVForm/CVForm";
import CVPreview from "./CVPreview/CVPreview";
import DefaultCV from "./Utils/DefaultCV";
import ExampleCV from "./Utils/ExampleCV";
import uniqid from "uniqid";
import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Main = () => {
  const [cv, setCV] = useState(DefaultCV);

  const handleAddEducation = () => {
    setCV((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uniqid(),
          university: "",
          educationCity: "",
          degree: "",
          subject: "",
          educationFrom: "",
          educationTo: "",
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
          experienceCity: "",
          experienceFrom: "",
          experienceTo: "",
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

  const loadCV = () => {
    setCV((prevState) => ({
      ...prevState,
      ...ExampleCV,
    }));
  };

  const componentRef = useRef();

  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <main className="p-5">
      <div className="forms-container d-flex justify-content-center gap-5">
        <CVForm
          currentCV={cv}
          loadCV={loadCV}
          addEducation={handleAddEducation}
          deleteEducation={handleDeleteEducation}
          addExperience={handleAddExperience}
          deleteExperience={handleDeleteExperience}
          handlePersonalChange={handlePersonalChange}
          handleEducationChange={handleEducationChange}
          handleExperienceChange={handleExperienceChange}
          handlePrint={handlePrint}
        />
        <CVPreview currentCV={cv} ref={componentRef} />
      </div>
    </main>
  );
};

export default Main;
