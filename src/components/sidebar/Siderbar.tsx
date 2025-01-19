import { FC, useState } from "react";

import { SIDEBAR_DATA } from "../../constant";
import SidebarList from "./SidebarList";
import "./sidebar.scss";

const Siderbar: FC = () => {
  const [activeLink, setActiveLink] = useState(1);

  return (
    <nav className="nav">
      <div className="nav-header">
        <img
          src="https://arcitech.ai/wp-content/uploads/2023/08/cropped-arcitech-logo-1.webp"
          alt="Company Logo"
          className="nav-logo"
        />
        <h2 className="nav-heading">Arcitech.ai</h2>
      </div>

      <ul className="links">
        {SIDEBAR_DATA.map((data) => (
          <SidebarList
            data={data}
            activeLink={activeLink}
            handleLinkState={(id: number) => setActiveLink(id)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Siderbar;
