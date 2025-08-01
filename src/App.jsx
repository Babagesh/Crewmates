import { useRoutes } from 'react-router-dom';
import Navigation from './components/Navigation'
import Welcome from './pages/Welcome'
import Create from './pages/Create'
import Gallery from './pages/Gallery'
import Edit from './pages/Edit'
import Crewmate from './pages/Details'
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
      path: '/gallery',
      element : <Gallery />
    },
    {
      path: '/gallery/:id',
      element: <Crewmate />
    },
    {
      path: '/gallery/edit/:id',
      element: <Edit />
    }
  ])
  return (
    <div className = "App">
        <Navigation />
       {element}
    </div>

   
  );
}