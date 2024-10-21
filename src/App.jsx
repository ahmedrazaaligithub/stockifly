import "./App.css";
import { LoginForm } from "./components/components";
function App() {
  return (
    <>
    
      <div className="container w-full h-[100vh] bg-primary">
        <div className="flex gap-16 items-center w-full h-full">
          {/* section 1 */}
          <div className="bg-white w-1/3 h-full flex justify-center container mx-auto">
            <LoginForm  />
          </div>
          {/* section 2 */}
          <div className="flex-1 h-full">
            <img src="./images/login_background.svg" alt="" />
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
