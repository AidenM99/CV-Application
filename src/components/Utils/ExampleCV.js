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
  experience: [
    {
      id: uniqid(),
      position: "Senior Web Developer",
      company: "Google LLC",
      experienceCity: "London, UK",
      workSummary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacus justo, sodales quis eleifend at, gravida sit amet tellus. Donec ac efficitur nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque massa urna, consectetur id auctor in, mollis eget purus. Ut in eros purus. Pellentesque vestibulum, tortor in pretium pellentesque.",
      experienceFrom: "Jun. 2021",
      experienceTo: "Current",
    },
    {
      id: uniqid(),
      position: "Junior Web Developer",
      company: "Meta Platforms, Inc.",
      experienceCity: "London, UK",
      workSummary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacus justo, sodales quis eleifend at, gravida sit amet tellus. Donec ac efficitur nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque massa urna, consectetur id auctor in, mollis eget purus. Ut in eros purus. Pellentesque vestibulum, tortor in pretium pellentesque.",
      experienceFrom: "Sept. 2018",
      experienceTo: "Jun. 2021",
    },
    {
      id: uniqid(),
      position: "Position",
      company: "Company",
      experienceCity: "City",
      workSummary: "Work Summary",
      experienceFrom: "From",
      experienceTo: "To",
    },
  ],
  education: [
    {
      id: uniqid(),
      university: "University of Oxford",
      educationCity: "Oxford, UK",
      degree: "First Class Honours Degree (1st)",
      subject: "Computer Science",
      educationFrom: "Sept. 2015",
      educationTo: "Aug. 2018",
    },
    {
      id: uniqid(),
      university: "University",
      educationCity: "City",
      degree: "Degree Classification",
      subject: "Subject",
      educationFrom: "From",
      educationTo: "To",
    },
  ],
};

export default exampleCV;
