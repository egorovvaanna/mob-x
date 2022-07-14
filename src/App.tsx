import { ThemeProvider } from "styled-components";
import { theme } from './styles/theme';
import { Layout } from "./components/layout/Layout";

import "./App.css";


function App() {
  return (
    <ThemeProvider theme={theme}  >
      <div className="App">
        <Layout/>
      </div>
    </ThemeProvider>
  );
}

export default App;
