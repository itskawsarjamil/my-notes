import PropTypes from "prop-types";

const CustomButton = ({ text }) => {
  return (
    <button className="btn font-semibold text-white bg-[#d88531]">
      {text}
    </button>
  );
};
CustomButton.propTypes = {
  text: PropTypes.string,
};
export default CustomButton;
