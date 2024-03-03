import "./App.css";
import Folder from "./components/Folder";
import PhoneOtpForm from "./components/PhonOptForm";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <div style={{marginBottom: '300px'}}>
        <Folder data={data} />
      </div>
      <div style={{marginTop: '300px'}}>
        <PhoneOtpForm />
      </div>
    </div>
  );
}

export default App;
