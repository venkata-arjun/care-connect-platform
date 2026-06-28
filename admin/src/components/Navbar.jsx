import { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);
  const navigate = useNavigate();

  const isAdmin = Boolean(aToken);
  const isDoctor = Boolean(dToken);

  const logout = () => {
    if (isAdmin) {
      setAToken("");
      localStorage.removeItem("aToken");
    }
    if (isDoctor) {
      setDToken("");
      localStorage.removeItem("dToken");
    }
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="flex justify-between items-center px-4 sm:px-8 h-16 max-w-screen-2xl mx-auto">
        {/* Left — logo + role badge */}
        <div className="flex items-center gap-3">
          <img
            className="w-28 sm:w-36 cursor-pointer"
            src={assets.admin_logo}
            alt="Care Connect"
            onClick={() => navigate("/")}
          />
          {(isAdmin || isDoctor) && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F2F3FF] border border-[#e0e3ff] text-[11px] font-semibold text-[#5f6FFF] tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5f6FFF] animate-pulse" />
              {isAdmin ? "Admin" : "Doctor"}
            </span>
          )}
        </div>

        {/* Right — logout */}
        {(isAdmin || isDoctor) && (
          <button
            onClick={logout}
            className="flex items-center gap-2 text-sm font-medium text-[#5f6FFF] border border-[#e0e3ff] bg-[#F2F3FF] hover:bg-[#5f6FFF] hover:text-white hover:border-[#5f6FFF] transition-all duration-200 px-4 sm:px-5 py-2 rounded-full"
          >
            <LogOut size={15} className="shrink-0" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
