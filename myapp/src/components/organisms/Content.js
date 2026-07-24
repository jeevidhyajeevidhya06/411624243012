import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";

function Content() {

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
      <h2>Content Area</h2>
      <p>This content changes according to theme.</p>
    </div>
  );
}

export default Content;