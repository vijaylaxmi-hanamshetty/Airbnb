import React from "react";
import sectionsData from "../Component/Sections";
import Section from "./Section";

export default function About() {
  return (
    <div>
      {sectionsData.map((data, index) => (
        <Section
          key={index}
          icon={data.icon}
          title={data.title}
          description={data.description}
          image={data.image}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}
