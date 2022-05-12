import uniqid from "uniqid";
import emptyAvatar from "../../assets/blankAvatar.png";

const defaultCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    summary: "",
    phone: "",
    email: "",
    github: "",
    photo: emptyAvatar,
  },
  experience: [
    {
      id: uniqid(),
      position: "",
      company: "",
      experienceCity: "",
      workSummary: "",
      experienceFrom: "",
      experienceTo: "",
    },
  ],
  education: [
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
};

export default defaultCV;
