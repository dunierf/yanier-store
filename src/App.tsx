// Components
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Toolbar />
      </div>
      <div className="flex flex-row flex-1">
        <div>
          <Sidebar />
        </div>
        <div className="flex-1">
          <Content />
        </div>
      </div>
    </div>
  );
}
 
export default App;