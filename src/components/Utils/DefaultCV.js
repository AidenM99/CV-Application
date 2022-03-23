import uniqid from "uniqid";

const defaultCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    about: "",
  },
  education: [
    {
      id: uniqid(),
      university: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  ],
  experience: [
    {
      id: uniqid(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
};

export default defaultCV;
