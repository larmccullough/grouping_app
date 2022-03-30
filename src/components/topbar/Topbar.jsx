import {
  AddCircleOutlineRounded,
  HomeRounded,
  PersonAddAltRounded,
} from "@mui/icons-material";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
import "./topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarContainer">
        <div className="items">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="item1">
              <HomeRounded className="icon" />
              <span>Home</span>
            </div>
          </Link>
          <Link to="/create" style={{ textDecoration: "none" }}>
            <div className="item2">
              <PersonAddAltRounded className="icon" />
              <span>Join</span>
            </div>
          </Link>
          <Link to="/create" style={{ textDecoration: "none" }}>
            <div className="item3">
              <AddCircleOutlineRounded className="icon" />
              Create
            </div>
          </Link>
        </div>
        <div className="darkMode">
          Dark Mode
          <Switch color="primary" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
