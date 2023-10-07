import "./App.css";
import ImageContainer from "./components/ImageContainer";
import InputField from "./components/InputField";

function App() {
  return (
    <>
      <div className="main-container">
        {/* Make the input component */}
        <InputField />
        {/* The list of the images of the robots components */}
        <ImageContainer />
      </div>
    </>
  );
}

export default App;
