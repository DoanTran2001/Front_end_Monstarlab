import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  boxContainer: {
    border: "1px solid #eee",
    padding: "15px 20px",
    borderRadius: "15px",
    width: "60%",

    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  textHeading: {
    fontSize: "45px",
    background: "-webkit-linear-gradient(#06649B, #01E397)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default useStyles;
