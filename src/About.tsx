import { useTheme } from "./ThemeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <div>
      <h1>About Page</h1>
      <p>Current theme: {theme}</p>
    </div>
  );
};

export default About;
