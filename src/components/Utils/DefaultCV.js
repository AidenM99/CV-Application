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
      city: "",
      workSummary: "",
      experienceFrom: "",
      experienceTo: "",
    },
  ],
  education: [
    {
      id: uniqid(),
      university: "",
      city: "",
      degree: "",
      subject: "",
      educationFrom: "",
      educationTo: "",
    },
  ],
};

export default defaultCV;
