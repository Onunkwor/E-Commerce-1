import "./Sidebar.css";
import { GiShoppingCart } from "react-icons/gi";
import Category from "./Category/Category";
import Prices from "./Prices/Prices";
import Color from "./Colors/Colors";
import { useContext } from "react";
import { Context } from "../Context/Context";
function Sidebar() {
  const { handleChange } = useContext(Context);

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <GiShoppingCart className="logo" />
        </div>

        <Category handleChange={handleChange} />
        <Prices handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </section>
    </>
  );
}
export default Sidebar;
