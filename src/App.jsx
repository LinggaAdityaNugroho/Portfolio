import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <div className="px-10 py-5 grid grid-cols-4 gap-10">
      <div className="bg-red-500 h-full w-full  md:col-span-1"></div>
      <div className="col-span-4 md:col-span-3">
        <Home />
      </div>
    </div>
  );
}

export default App;
