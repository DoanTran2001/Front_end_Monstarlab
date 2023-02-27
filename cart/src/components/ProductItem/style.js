import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardName: {
    display: "block",
    display: "-webkit-box",
    minHeight: "16px*1.3*3",
    fontSize: "16px",
    "line-height": "1.3",
    "-webkit-line-clamp": "3",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    "text-overflow": "ellipsis",
    "margin-top": "10px",
  },
}));

export default useStyles;
