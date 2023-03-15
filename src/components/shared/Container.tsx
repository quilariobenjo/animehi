import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="m-0	w-full max-w-screen-2xl px-4">{children}</div>;
};

export default Container;
