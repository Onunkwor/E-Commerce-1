import "./Recommended.css";
import Button from "../Components/Button";
function Recommended({ handleClick }) {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-btns">
          <Button handleClick={handleClick} value="" title="All" />
          <Button handleClick={handleClick} value="Nike" title="Nike" />
          <Button handleClick={handleClick} value="Adidas" title="Adidas" />
          <Button handleClick={handleClick} value="Puma" title="Puma" />
          <Button handleClick={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
}
export default Recommended;
