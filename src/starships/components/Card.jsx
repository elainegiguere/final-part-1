import BCard from "react-bootstrap/Card";

const DEFAULT_WIDTH = "40rem";

const Card = ({ width = DEFAULT_WIDTH, children }) => {
  return <BCard style={{ width: width }}>{children}</BCard>;
};

export default Card;