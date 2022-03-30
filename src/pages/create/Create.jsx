import "./create.scss";
import Topbar from "../../components/topbar/Topbar";
import Form from "../../components/form/Form";
import Table from "../../components/table/Table";

const Create = () => {
  return (
    <div className="create">
      <Topbar />
      <div className="createContainer">
        <div className="widgets">
          <Form />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Create;
