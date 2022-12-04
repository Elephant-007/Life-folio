import { styled, Box, Stack, Link, Divider } from "@mui/material";
import { StyleConstants } from "../../styles/StyleConstants";
import Contact from "../../data/Contact.json";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const FooterContainer = styled(Box)(({ theme }) => ({
  // position: "fixed",
  height: 150,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: StyleConstants.FOOTER,
  bottom: 0,
  zIndex: 1,
  fontWeight: 600,
  "& .mail": {
    display: "flex",
    padding: 12,
    minWidth: 350,
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      paddingRight: 12,
      fontSize: 32,
    },
  },
  "& .links": {
    display: "flex",
    padding: 12,
    width: 350,
    justifyContent: "space-between",
    "& svg": {
      paddingRight: 12,
      fontSize: 32,
    },
  },
  "& .divider": {
    height: 7,
    borderTop: "1px solid rgba(0,0,0,0.1)",
    width: "95%",
  },
  "& .creator": {
    fontSize: 12,
    opacity: 0.85,
    padding: "0 0 5px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));
export const Footer = () => {
  const { emailId = "", linkedIn = "", twitter = "", github = "" } = Contact;
  return (
    <FooterContainer>
      <Box className="mail">
        <EmailIcon /> {emailId}
      </Box>
      <Box className="links">
        {github && (
          <div>
            <Link href={github} target="_blank" style={{ color: "black" }}>
              <GitHubIcon />
            </Link>
          </div>
        )}
        {linkedIn && (
          <div>
            <Link href={linkedIn} target="_blank" style={{ color: "black" }}>
              <LinkedInIcon />
            </Link>
          </div>
        )}
        {twitter && (
          <div>
            <Link href={twitter} target="_blank" style={{ color: "black" }}>
              <TwitterIcon />
            </Link>
          </div>
        )}
      </Box>
      <Box className="divider" />
      <Box className="creator">2022 - Template created by Harini Sivakumar</Box>
    </FooterContainer>
  );
};
