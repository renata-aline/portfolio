import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>Renata Oliveira</h1>
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
