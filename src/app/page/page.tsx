import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

export const ExampleComponent = ({ title, subtitle }: Props) => {
  return (
    <div className="p-4">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};
