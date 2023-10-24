const Button = ({ title, handleClick, value }) => {
  return (
    <>
      <button className="btn" onClick={handleClick} value={value}>
        {title}
      </button>
    </>
  );
};

export default Button;
