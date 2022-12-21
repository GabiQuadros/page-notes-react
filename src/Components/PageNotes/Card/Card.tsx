import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import React from "react";
import "./StyledCard.css";
import { NoteType } from "../../../types";

interface CardProps {
  recado: NoteType;
  cardID: number;
  actionDelete: (recado: NoteType) => void;
  actionEdit: (recado: NoteType) => void;
}

const Card: React.FC<CardProps> = ({
  recado,
  actionDelete,
  actionEdit,
  cardID,
}) => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="content">
          <h2>{cardID}</h2>
          <h3>{recado.desc}</h3>
          <h4>{recado.det}</h4>
          <IconButton
            onClick={() => actionDelete(recado)}
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={() => actionEdit(recado)}
            edge="end"
            aria-label="edit"
            sx={{ paddingRight: "20px" }}
          >
            <CreateIcon />
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
