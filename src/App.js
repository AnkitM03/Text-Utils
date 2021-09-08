import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Lightmode has been enabled :)", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#33506d";
      document.body.style.color = "white";
      showAlert("Darkmode has been enabled :)", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <Textform
        title="Enter the Text to analyze: "
        mode={mode}
        showAlert={showAlert}
      />

      {/* <div className="container my-3">
        <About mode={mode} />
      </div> */}

      <div className="container my-5 f">
        <footer>
          <p id="footer">© 2021 Skull</p>
        </footer>
      </div>
    </>
  );
}

export default App;
