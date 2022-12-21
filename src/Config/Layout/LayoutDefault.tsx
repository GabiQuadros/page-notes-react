import React from "react";
import NavBar from "../../Components/FirstPage/NavBar";

interface LayoutDefaultProps {
  page: React.ReactNode;
}

const LayoutDefault: React.FC<LayoutDefaultProps> = ({ page }) => {
  return (
    <React.Fragment>
      <NavBar />
      <body className="bodyLogin">{page}</body>
    </React.Fragment>
  );
};

export default LayoutDefault;
