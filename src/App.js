import "./App.css";
import Folder from "./Folder";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <Folder data={data} />
    </div>
  );
}

export default App;
