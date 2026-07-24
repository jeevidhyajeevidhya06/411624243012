import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";

function Footer() {

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
    <footer>
      Footer - Current Theme: {theme}
    </footer>
    </div>
  );
}

export default Footer;