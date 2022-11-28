import { Box, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../store/types";
import { sectionImages } from "../utils";
import { setCurrentSection } from "./slice";
const NavigationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "0 20px",
  [theme.breakpoints.down("md")]: {
    padding: "0 8px",
    flexDirection: "row",
  },
}));
const NavWrapper = styled(Box)(({ theme }) => ({
  margin: "10px 0",
  height: 70,
  width: 70,
  padding: 5,
  border: "2px solid #562783",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& img": {
    height: 58,
    width: 58,
  },
}));
export const NavigationList = () => {
  const dispatch = useDispatch();
  const sections =
    useSelector((state: IRootState) => state.sections?.sections) || [];
  console.log(sections);
  return (
    <NavigationWrapper>
      {sections
        .filter((sec) => !sec?.hide)
        .map((sec) => (
          <NavWrapper onClick={() => dispatch(setCurrentSection(sec.key))}>
            <img src={sectionImages[sec.key]} alt={sec.key} />
          </NavWrapper>
        ))}
    </NavigationWrapper>
  );
};
