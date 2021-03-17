import { createMuiTheme } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    background: {
      paper: blue[500],
    },
    primary: {
      main: blue[500],
    },
    secondary: { main: red[500] },
  },
});

//Um Props zu ändern Siehe in der jeweiligen API unter Props
theme.props = {
  MuiPaper: {},
  MuiButton: {},
  MuiCard: {},
};
//Um CSS zu ändern Siehe in der jeweiligen API unter CSS
theme.overrides = {
  MuiPaper: {
    root: {
      background:
        "linear-gradient(58deg, rgba(86,91,117,1) 0%, rgba(75,79,100,1) 33%, rgba(139,76,86,1) 100%)",
      height: "100vh",
    },
  },
  MuiCard: {
    root: { background: "lightgray" },
  },
  MuiButton: {
    root: {
      color: "blue",
    },
  },
};
export default theme;
