import React, { ReactNode } from "react";

//rsf

interface props {
  children: ReactNode;
}

function Alert({ children }: props) {
  return (
    <div className="alert alert-success" role="alert">
      {children}
    </div>
  );
}

export default Alert;
