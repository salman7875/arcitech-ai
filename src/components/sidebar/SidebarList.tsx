import { FC } from "react";

type Props = {
  data: any;
  handleLinkState: (id: number) => void;
  activeLink: number;
};

const SidebarList: FC<Props> = ({ data, handleLinkState, activeLink }) => {
  return (
    <li
      className={`link ${data.id === activeLink && "active-link"}`}
      onClick={() => handleLinkState(data.id)}
    >
      <a href={data.route}>
        <data.icon height={20} />
        {data.title}
      </a>
    </li>
  );
};

export default SidebarList;
