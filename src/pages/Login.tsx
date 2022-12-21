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
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { selectAccount } from "../Store/Modules/createSlice";
import { loginOn } from "../Store/Modules/loginSlice";
interface State {
  password: string;
  showPassword: boolean;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [values, setValues] = useState<State>({
    password: "",
    showPassword: false,
  });
  const accountList = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const emailValid = () => {
    if (email === "" && values.password === "") {
      alert("Preencha todos os campos!");
      return;
    } else {
      return true;
    }
  };

  const validLogin = () => {
    const getUser = accountList.some(
      (item) => email === item.email && values.password === item.password
    );
    if (!getUser) {
      alert("E-mail e/ou senha incorretos!");
    } else {
      return getUser;
    }
  };

  const handleLogin = () => {
    if (emailValid() && validLogin()) {
      dispatch(loginOn(email));
      navigate("/recados");
    } else {
      setEmail("");
      setValues({
        ...values,
        password: "",
      });
    }
  };

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
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
          padding: "30px",
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
          autoFocus
          value={email}
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
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
            onClick={() => handleLogin()}
            type="submit"
          >
            <span>Faça Login</span>
          </button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
