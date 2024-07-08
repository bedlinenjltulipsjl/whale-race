import { Outlet } from "react-router-dom";

import Content from "../../components/en/UI/Content";

export default function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-between bg-gradient-to-r from-[#73B9E0] to-[#5B68DF]">
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}
