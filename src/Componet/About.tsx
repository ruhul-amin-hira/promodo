import React from "react";

interface Props {}

const About = (props: Props) => {
  return (
    <div className="text-center mt-8 bg-gray-800 p-4 rounded">
      <h1 className="logo font-bold">What is Promodo?</h1>
      <p>
        Promodo is a customizable pomodoro timer inspired by Pomodoro Technique
        which is a time management method developed by Francesco Cirillo.
      </p>
    </div>
  );
};

export default About;
