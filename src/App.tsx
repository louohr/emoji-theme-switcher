import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Home from "./Home";
import About from "./About";
import "./app.css";

// Set up toggle theme button
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  // Toggle to change theme
  return <button onClick={toggleTheme}>Switch to {theme === "😎" ? "😴" : "😎"}</button>;
};

// Set up the layout component
const Layout = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <ThemeToggleButton />
    </nav>

    {/* Place where nested routes will render */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
);

// Set up data and paths
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      {/* Define routes in the router configuration */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

// Wrap the router with ThemeProvider
const App = () => (
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
