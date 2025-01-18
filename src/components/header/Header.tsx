import { FC } from "react";
import "./header.scss";

const Header: FC = () => {
  return (
    <header className="header">
      <h2 className="title">Dashboard</h2>

      <div className="header-wrapper">
        <div className="input-container">
          <input type="text" placeholder="Search here..." />
        </div>
      </div>
    </header>
  );
};

export default Header;
