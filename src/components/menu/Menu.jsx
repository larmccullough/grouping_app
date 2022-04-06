import "./menu.scss";
import {
  AddCircleOutlineRounded,
  CloudUploadRounded,
  InfoOutlined,
  PersonAddAltRounded,
} from "@mui/icons-material";
import "./menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="items">
        <h1>Grouping App</h1>
        <Link to="/create" style={{ textDecoration: "none" }}>
          <div className="item">
            <AddCircleOutlineRounded className="icon" />
            <span className="right">Create Class</span>
          </div>
        </Link>
        <Link to="/join" style={{ textDecoration: "none" }}>
          <div className="item">
            <PersonAddAltRounded className="icon" />
            <span className="right">Join Group</span>
          </div>
        </Link>
        <Link to="/upload" style={{ textDecoration: "none" }}>
          <div className="item">
            <CloudUploadRounded className="icon" />
            <span className="right">Upload Group</span>
          </div>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <div className="item">
            <InfoOutlined className="icon" />
            <span className="right">About</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
