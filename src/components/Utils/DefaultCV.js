import uniqid from "uniqid";
import emptyAvatar from "../../assets/Blank-Avatar.png";

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
  experience: [
    {
      id: uniqid(),
      position: "",
      company: "",
      city: "",
      experienceFrom: "",
      experienceTo: "",
    },
  ],
};

export default defaultCV;
