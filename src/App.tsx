
// ThemeToggleButton component
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Switch to {theme === "😎" ? "😴" : "😎"}</button>;
};

const App = () => {
  return (

  );
};

export default App;
