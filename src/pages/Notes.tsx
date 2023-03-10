import NavBarRecados from "../Components/PageNotes/NavBarRecados";
import React, { useCallback, useState } from "react";
import { Container, Divider, Grid } from "@mui/material";
import FormRecado from "../Components/PageNotes/FormRecado";
import { NoteType } from "../types/NoteType";
import Card from "../Components/PageNotes/Card/Card";
import ".././Components/PageNotes/Card/StyledCard.css";
import {
  addNote,
  deleteNote,
  selectNotes,
  updateNote,
} from "../Store/Modules/NoteSlice";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const Notes: React.FC = () => {
  const [descEdit, setDescEdit] = useState<string>("");
  const [detEdit, setDetEdit] = useState<string>("");
  const [getId, setGetId] = useState<number>(0);

  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  const notesRedux = useAppSelector(selectNotes);

  const dispatch = useAppDispatch();

  const handleAddNote = useCallback(
    (notes: NoteType) => {
      dispatch(addNote(notes));
    },
    [dispatch]
  );

  const handleDeleteNote = useCallback(
    (notes: NoteType) => {
      dispatch(deleteNote(notes.id));
    },
    [dispatch]
  );

  const handleClose = () => {
    setOpenEditModal(false);
    alert("Nenhum recado alterado!!");
  };

  const openEdit = useCallback((notes: NoteType) => {
    setGetId(notes.id);
    setDescEdit(notes.desc);
    setDetEdit(notes.det);
    setOpenEditModal(true);
  }, []);

  const handleEdit = useCallback(
    (notes: NoteType) => {
      dispatch(
        updateNote({
          id: notes.id,
          changes: { desc: notes.desc, det: notes.det },
        })
      );
      setOpenEditModal(false);
    },
    [dispatch]
  );

  let cardId: number = 1;

  return (
    <>
      <NavBarRecados />
      <body className="bodyCard">
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              margin: "20px",
              alignItems: "center",
              bgcolor: "rgba(255, 255, 255, 0.1);",
              borderRadius: "10px",
              borderTop: "1px solid rgba(255, 255, 255, 0.5)",
              borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <Grid item xs={12}>
              <FormRecado action={handleAddNote} />
            </Grid>
          </Grid>
          <Divider variant="inset" />
          <Grid item xs={12} className="container">
            {notesRedux.map((item) => {
              return (
                <Card
                  key={item.id}
                  cardID={cardId++}
                  recado={item}
                  actionDelete={() => handleDeleteNote(item)}
                  actionEdit={() => openEdit(item)}
                />
              );
            })}
          </Grid>
        </Container>
        <div>
          <Dialog open={openEditModal} onClose={handleClose}>
            <DialogTitle>Editar recado</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                value={descEdit}
                onChange={(ev) => setDescEdit(ev.target.value)}
                label="Editar Descri????o"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                value={detEdit}
                onChange={(ev) => setDetEdit(ev.target.value)}
                label="Editar detalhamento"
                type="text"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button
                onClick={() =>
                  handleEdit({ id: getId, desc: descEdit, det: detEdit })
                }
              >
                Salvar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </body>
    </>
  );
};

export default Notes;
