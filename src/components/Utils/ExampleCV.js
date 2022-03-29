import uniqid from "uniqid";
import exampleAvatar from "../../assets/exampleAvatar.jpg";

const exampleCV = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    title: "Senior Web Developer",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    phone: "123456789",
    email: "johndoe@gmail.com",
    github: "github.com/johndoe",
    photo: exampleAvatar,
  },
  education: [
    {
      id: uniqid(),
      university: "University of Oxford",
      city: "Oxford, UK",
      degree: "First Class Honours Degree (1st)",
      subject: "Computer Science",
      educationFrom: "Sept. 2015",
      educationTo: "Aug. 2018",
    },
  ],
  experience: [
    {
      id: uniqid(),
      position: "Senior Web Developer",
      company: "Google LLC",
      city: "London, UK",
      workSummary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      experienceFrom: "Jun. 2021",
      experienceTo: "Current",
    },
    {
      id: uniqid(),
      position: "Junior Web Developer",
      company: "Meta Platforms, Inc.",
      city: "London, UK",
      workSummary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      experienceFrom: "Sept. 2018",
      experienceTo: "Jun. 2021",
    },
  ],
};

export default exampleCV;
