
import DashBoard from "./DashBoard";
function App() {
  const textColor = "#4a90e2"; // Define text color
  const lightBackground = "#eaf2fd"; // Define light background color
  return (
  <>
  <DashBoard/>
  <div
      style={{
        border: `2px solid ${textColor}`, // Border color
        backgroundColor: lightBackground, // Background color
        color: textColor, // Text color
        padding: "20px",
        borderRadius: "5px", // Border radius
      }}
    >
      This is a colored box with text.
    </div>
  </>
  );
}

export default App;
