import "./DiceCube.css";

export const DiceCube = ({ diceSide, isRolling }) => {
  const handleDiceSide = () => {
    switch (diceSide) {
      case 1:
        return "rotateX(0deg) rotateY(0deg)";
      case 2:
        return "rotateX(-90deg) rotateY(0deg)";
      case 3:
        return "rotateX(0deg) rotateY(90deg)";
      case 4:
        return "rotateX(0deg) rotateY(-90deg)";
      case 5:
        return "rotateX(90deg) rotateY(0deg)";
      case 6:
        return "rotateX(180deg) rotateY(0deg)";
      default:
        break;
    }
  };

  return (
    <div
      className={`dice  ${isRolling ? "animation" : ""}`}
      style={{ transform: handleDiceSide() }}
    >
      <div className="face front"></div>
      <div className="face back"></div>
      <div className="face top"></div>
      <div className="face bottom"></div>
      <div className="face right"></div>
      <div className="face left"></div>
    </div>
  );
};
