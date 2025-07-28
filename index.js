const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { courses, students } = require("./data");

const app = express();

const typeDefs = gql`
  type Student {
    id: ID!
    name: String!
    email: String!
    courses: [Course!]!
  }
  type Course {
    id: ID!
    title: String!
    instructor: String!
  }
  type Query {
    students: [Student!]!
    student(id: ID!): Student
    courses: [Course!]!
  }
`;

const resolvers = {
  Query: {
    students: () => students,
    student: (_, { id }) => students.find((s) => s.id === id),
    courses: () => courses,
  },
  Student: {
    courses: (student) =>
      courses.filter((course) => student.courseIds.includes(course.id)),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const start = async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`app running on http://localhost:4000${server.graphqlPath}`);
  });
};

start();
