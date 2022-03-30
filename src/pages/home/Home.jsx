import Topbar from "../../components/topbar/Topbar";
import Menu from "../../components/menu/Menu";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Topbar />
      <div className=".homeContainer">
        <Menu />
      </div>
    </div>
  );
};

export default Home;
