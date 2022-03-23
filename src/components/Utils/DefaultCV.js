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
      key: uniqid(),
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
      key: uniqid(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
};

export default defaultCV;
