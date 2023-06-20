
//rsf

import {ReactNode} from "react";

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
