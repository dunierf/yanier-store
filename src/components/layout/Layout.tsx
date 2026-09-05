import { useState } from "react";

// Components
import Content from "./Content";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import SlidingSidebar from "./SlidingSideBar";


const Layout = () => {

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarHide = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="h-12 fixed top-0 left-0 z-50 w-full xl:flex">
          <Toolbar onMenuClick={handleMenuClick} />
        </div>
        <div className="flex flex-row flex-1 mt-12">
          <div className="hidden xl:flex">
            <Sidebar />
          </div>
          <div className="flex-1">
            <Content />
          </div>
        </div>
      </div>
      {sidebarOpen && (<SlidingSidebar onHide={handleSidebarHide} />)}
    </>
  );
}
 
export default Layout;