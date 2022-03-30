import Topbar from "../../components/topbar/Topbar";
import Menu from "../../components/menu/Menu";
import "./home.scss";

const Home = () => {
  return (
    <div className=".homeContainer">
      <Topbar />
      <Menu />
    </div>
  );
};

export default Home;
