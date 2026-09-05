// Components
import Content from "./Content";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Toolbar />
      </div>
      <div className="flex flex-row flex-1">
        <div className="hidden xl:flex">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Content />
        </div>
      </div>
    </div>
  );
}
 
export default Layout;