import { styled, Box } from "@mui/material";
import { StyleConstants } from "../../styles/StyleConstants";

const IntroductionContainer = styled(Box)(() => ({
  height: "10vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#6489a7",
}));
const IntroInfoWrapper = styled(Box)(({ theme }) => ({
  fontSize: "2em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2em",
    padding: 20,
  },
}));
export const Introduction = () => {
  return (
    <IntroductionContainer>
      <IntroInfoWrapper>
       (Lif)E - portfolio of Harini Sivakumar
      </IntroInfoWrapper>
    </IntroductionContainer>
  );
};
