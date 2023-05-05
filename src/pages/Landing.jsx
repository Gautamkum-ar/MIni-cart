import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="landing">
      <marquee direction="left">
        <h1>Hello!! Welcome to Mini Mart</h1>
      </marquee>
      <Link to="/home">Go To Home Page--</Link>
    </div>
  );
};
