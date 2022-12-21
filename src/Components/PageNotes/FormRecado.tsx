import { Button, Grid, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { NoteType } from "../../types";

interface FormRecadoProps {
  action: (recado: NoteType) => void;
}

const FormRecado: React.FC<FormRecadoProps> = ({ action }) => {
  const [desc, setDesc] = useState<string>("");
  const [det, setDet] = useState<string>("");

  const inputDesc = useRef<HTMLInputElement | undefined>();
  const inputDet = useRef<HTMLInputElement | undefined>();

  const handleClear = () => {
    setDesc("");
    setDet("");
  };

  const handleSubmit = () => {
    if (desc.length < 3) {
      alert("Preencha a descrição.");
      inputDesc.current?.focus();
      return;
    }

    if (det.length < 7) {
      alert("Preencha o detalhamento.");
      inputDet.current?.focus();
      return;
    }

    action({ id: new Date().getTime() / 10000, desc, det });
    handleClear();
  };

  return (
    <Grid
      xs={12}
      container
      spacing={2}
      alignItems={"center"}
      sx={{ marginBottom: "10px" }}
    >
      <Grid item xs={12} sm={3}>
        <TextField
          id="outlined-basic"
          onChange={(ev) => setDesc(ev.target.value)}
          label="Descrição"
          value={desc || ""}
          variant="outlined"
          inputRef={inputDesc}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          id="outlined-basic"
          onChange={(ev) => setDet(ev.target.value)}
          label="Detalhamento"
          value={det || ""}
          variant="outlined"
          inputProps={{ maxLength: 30 }}
          inputRef={inputDet}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Grid container spacing={2}>
          <Grid item>
            <Button onClick={handleClear} variant="outlined">
              Limpar
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit} variant="contained">
              Salvar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormRecado;

//
