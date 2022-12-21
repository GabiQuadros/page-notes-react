import React from "react";
import NavBarRecados from "../Components/PageNotes/NavBarRecados";
import NotesForm from "../Components/PageNotes/PageNotes";

const Notes: React.FC = () => {
  return (
    <>
      <NavBarRecados />
      <body className="bodyCard">
        <NotesForm />
      </body>
    </>
  );
};

export default Notes;
