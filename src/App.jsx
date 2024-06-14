import { ThemeProvider } from './contexts/ThemeContext';
import TeamMember from './components/TeamMember';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <TeamMember />
      </div>
    </ThemeProvider>
  );
};

export default App;
