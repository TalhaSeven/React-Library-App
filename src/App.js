import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import { darktheme, lightheme } from "./styles/theme";
import { useEffect, useState } from "react";

function App() {
  const [themeSelected, setThemeSelected] = useState(
    sessionStorage.getItem("theme") || "light"
  );

  const [tema, setTema] = useState(lightheme);

  useEffect(() => {
    sessionStorage.setItem("theme", themeSelected);
    setTema(themeSelected === "light" ? lightheme : darktheme);
  }, [themeSelected]);

  return (
    <ThemeProvider theme={tema}>
      <AppRouter
        themeSelected={themeSelected}
        setThemeSelected={setThemeSelected}
      />
    </ThemeProvider>
  );
}

export default App;
