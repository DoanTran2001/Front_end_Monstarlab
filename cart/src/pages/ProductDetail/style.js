import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  imagePreview: {
    width: "100%",
    paddingBottom: "100%",
    position: "relative",
  },
  imagePreviewImg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  imageListContainer: {
    display: 'flex' 
  },
}));
export default useStyles;
