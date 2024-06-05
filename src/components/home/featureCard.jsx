const FeatureCard = ({ bgColor, headingText }) => {
  return (
    <div
      className="text-start space-y-5 rounded-lg p-5"
      style={{ backgroundColor: bgColor }}
    >
      <h4 className="text-2xl font-bold">{headingText}</h4>
      <p>It is a long established fact that a reader will be distracted.</p>
      <button>Learn more</button>
    </div>
  );
};

export default FeatureCard;
