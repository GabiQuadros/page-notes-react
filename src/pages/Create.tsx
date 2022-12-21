import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Store/hooks";
import { addAccount } from "../Store/Modules/createSlice";

interface State {
  password: string;
  showPassword: boolean;
  confirm: string;
  showConfirm: boolean;
  valid: boolean;
}

const CreateAccount: React.FC = () => {
  // const accountRedux = useAppSelector(selectAccount);
  const [email, setEmail] = useState<string>("");
  const [values, setValues] = useState<State>({
    password: "",
    showPassword: false,
    confirm: "",
    showConfirm: false,
    valid: true,
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const emailValided = () => {
    if (email === "" || email.length < 7 || email.search("@") === -1) {
      alert("Preencha o e-mail! Ex: user@gmail.com");
      return false;
    } else {
      return true;
    }
  };

  const passwordValided = () => {
    if (values.password.length < 5) {
      alert("A senha deve ter no mínimo 5 caracteres.");
      return false;
    } else {
      return true;
    }
  };

  const confirmPassword = () => {
    if (values.password !== values.confirm) {
      alert("Senhas não conferem!");
      return false;
    } else {
      return true;
    }
  };

  const handleCreate = () => {
    if (emailValided() && confirmPassword() && passwordValided()) {
      dispatch(addAccount({ email, password: values.password }));
      navigate("/login");
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowConfirm = () => {
    setValues({
      ...values,
      showConfirm: !values.showConfirm,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Grid xs={12}>
      <Grid
        item
        xs={4}
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          height: "500px",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          backdropFilter: "blur(5px)",
        }}
      >
        <TextField
          sx={{
            marginTop: "110px",
          }}
          fullWidth
          id="input-with-sx"
          label="E-mail"
          variant="standard"
          onChange={(ev) => setEmail(ev.target.value)}
        />

        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Repetir Senha
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showConfirm ? "text" : "password"}
            value={values.confirm}
            onChange={handleChange("confirm")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirm}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            className="custom-btn btn-3"
            onClick={() => handleCreate()}
            type="submit"
          >
            <span>Criar Conta</span>
          </button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreateAccount;
