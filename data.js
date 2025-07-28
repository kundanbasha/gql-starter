const students = [
  { id: "1300", name: "Basha", email: "basha@gmail.com", courseIds: ["101"] },
  {
    id: "1326",
    name: "Satti",
    email: "satti@gmail.com",
    courseIds: ["101", "102"],
  },
  {
    id: "1273",
    name: "Hussain",
    email: "hussain@gmail.com",
    courseIds: ["101", "102"],
  },
  { id: "1661", name: "PJ", email: "pj@gmail.com", courseIds: ["101", "102"] },
];

const courses = [
  { id: "101", title: "Maths 101", instructor: "Dr. A" },
  { id: "102", title: "Physics 201", instructor: "Dr. B" },
];

module.exports = { students, courses };
