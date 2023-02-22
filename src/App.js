import { Route,Routes } from 'react-router-dom';
import routeList from './router'
import './App.css';

function getRoutes(routeList){
  return routeList.map(route => (
    <Route 
      path={ route.path }
      element={ route.component }
      key={ route.path }>
        { route.children && getRoutes(route.children) }
    </Route>
  ))
}

function App() {
  return (
    <Routes>
      { 
        getRoutes(routeList)
      }
    </Routes>
  );
}

export default App;
