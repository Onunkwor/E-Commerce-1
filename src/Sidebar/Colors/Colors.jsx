import "./Colors.css";
import Input from "../../Components/Input";
function Colors({ handleChange }) {
  return (
    <div className="mr">
      <h2 className="sidebar-title color-title">Color</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" name="test3" value="" />
        <span className="checkmark all"></span>
        All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test3"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test3"
        color="Green"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test3"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test3"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="white"
        title="White"
        name="test3"
        color="cream"
      />
    </div>
  );
}
export default Colors;
