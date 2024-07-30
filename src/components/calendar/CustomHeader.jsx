import "./index.css";

const Header = ({ label }) => {
  return (
    <div className="pt-2 h-12 rounded-full font-medium md:text-2xl text-xs bg-ais-blue-200 text-white flex items-center justify-center">
      {label}
    </div>
  );
};

export default Header;
