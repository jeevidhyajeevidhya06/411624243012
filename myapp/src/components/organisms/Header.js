import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";

function Header() {
  const [theme, setTheme] = useState(ThemeService.getTheme());

  useEffect(() => {
    ThemeService.attach(setTheme);
    return () => ThemeService.detach(setTheme);
  }, []);
  const style = {
    backgroundColor: theme === "Light" ? "blue" : "red",
    color: theme === "Light" ? "black" : "white",
    padding: "20px",
    marginTop: "20px"
  };
  return (
    <div style={style}>
    <header>
      <h1>Header - {theme} Theme</h1>
    </header>
    </div>
  );
}

export default Header;