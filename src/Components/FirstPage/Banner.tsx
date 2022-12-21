import React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import "./Button.css";
import { useNavigate } from "react-router-dom";

const Banner: React.FC = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Container
        sx={{
          backgroundSize: "contain",
          backgroundPosition: "center",
          width: "100%",
          height: "700px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" marginBottom={5} color="#a5dff6">
          Minha pagina de recados
        </Typography>
        <Typography variant="h5" marginBottom={10} color="rgba(2, 126, 251, 1)">
          Entre ou registre-se!
        </Typography>
        <button
          className="custom-btn btn-3"
          onClick={() => {
            navigate("/login");
          }}
        >
          <span>Faça Login</span>
        </button>
      </Container>
    </React.Fragment>
  );
};

export default Banner;
