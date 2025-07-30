import { useRoutes } from 'react-router';
import Navigation from './components/Navigation'
import Welcome from './pages/Welcome'
import Create from './pages/Create'
import Gallery from './pages/Gallery'
import './App.css'

export default function App()
{
  const element = useRoutes([
    {
      path:  "/",
      element: <Welcome />
    },
    {
      path: '/create',
      element: <Create />
    },
    {
      path: 'gallery',
      element : <Gallery />
    }
  ])
  return (
    <div className = "App">
        <Navigation />
       {element}
    </div>

   
  );
}