
import { useState } from "react";
import { fetchData, getGroup, getOrder} from "./Action";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import DashNav from "./Component/DashNav/DashNavbar";


function App() {
  fetchData();
  const [group, setGroup] = useState(getGroup());
  const [order, setOrder] = useState(getOrder());
  return <div className="">
    <Navbar group={group} setGroup={setGroup} order={order} setOrder={setOrder}/>
    <DashNav group={group} order={order}/>
  </div>;
}

export default App;
