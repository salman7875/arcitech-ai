import { FC } from "react";
import "./sidebar.scss";

const Siderbar: FC = () => {
  return (
    <nav className="nav">
      <div className="nav-header">
        <img
          src="https://avatars.githubusercontent.com/u/78205495?v=4"
          alt="Company Logo"
          className="nav-logo"
        />
        <h2 className="nav-heading">Arcitech.ai</h2>
      </div>

      <ul className="links">
        <li className="link active-link">
          <a href="#">
            <img
              src="https://avatars.githubusercontent.com/u/78205495?v=4"
              alt=""
              height={20}
              width={20}
            />
            Dashboard
          </a>
        </li>
        <li className="link">
          <a href="#">
            <img
              src="https://avatars.githubusercontent.com/u/78205495?v=4"
              alt=""
              height={20}
              width={20}
            />
            Leaderboard
          </a>
        </li>
        <li className="link">
          <a href="#">
            <img
              src="https://avatars.githubusercontent.com/u/78205495?v=4"
              alt=""
              height={20}
              width={20}
            />
            Order
          </a>
        </li>
        <li className="link">
          <a href="#">
            <img
              src="https://avatars.githubusercontent.com/u/78205495?v=4"
              alt=""
              height={20}
              width={20}
            />
            Products
          </a>
        </li>
        <li className="link">
          <a href="#">
            <img
              src="https://avatars.githubusercontent.com/u/78205495?v=4"
              alt=""
              height={20}
              width={20}
            />
            Sales Report
          </a>
        </li>
        <li className="link">
          <a href="#">
            <img
              src="https://avatars.githubusercontent.com/u/78205495?v=4"
              alt=""
              height={20}
              width={20}
            />
            Messages
          </a>
        </li>
        <li className="link">
          <a href="#">
            <img
              src="https://avatars.githubusercontent.com/u/78205495?v=4"
              alt=""
              height={20}
              width={20}
            />
            Settings
          </a>
        </li>
        <li className="link">
          <a href="#">
            <img
              src="https://avatars.githubusercontent.com/u/78205495?v=4"
              alt=""
              height={20}
              width={20}
            />
            Sign out
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Siderbar;
