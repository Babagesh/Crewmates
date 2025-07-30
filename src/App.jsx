import { useRoutes } from 'react-router';
import Navigation from './components/Navigation'
import Welcome from './pages/Welcome'
import './App.css'
export default function App()
{
  const element = useRoutes([
    {
      path:  "/",
      element: <Welcome />
    },
    {

    }
  ])
  return (
    <div className = "App">
        <Navigation />
       {element}
    </div>

   
  );
}