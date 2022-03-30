import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import Create from "./pages/create/Create";

const theme = createTheme({
  palette: {
    primary: {
      main: "#485dd9",
    },
    secondary: {
      main: "#02590f",
    },
  },
});

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="create" index element={<Create />} />
              {/* <Route path="groups">
            <Route index element={<Groups />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
