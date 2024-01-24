import LivePage from "../pages/LivePage";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();

  const handleLogout = () => {
    // console.log("MASUK");
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div>
        <div>
          <div className="navbar bg-base-100 shadow-xl">
            <div className="navbar-start">
              <a className="btn btn-ghost text-xl">DIVIO</a>
            </div>
            <div className="navbar-end">
              <button onClick={handleLogout} className="btn">
                Logout
              </button>
            </div>
          </div>
          <LivePage />
        </div>
      </div>
    </>
  );
}
