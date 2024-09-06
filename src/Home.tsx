import { useTheme } from "./ThemeContext";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default Home;
