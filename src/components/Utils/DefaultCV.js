import uniqid from "uniqid";

const defaultCV = {
  personalInfo: {
    firstname: "",
    lastname: "",
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
