import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Home, Login, Dashboard, Error } from './pages';
import Root from './layouts/Root';
import { ROUTES } from './routes/routes';
import './App.css';
import { UserProvider } from './context/UserContext';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />} errorElement={<Error />}>
    <Route path={ROUTES.home.path} element={<Home />} />
    <Route path={ROUTES.login.path} element={<Login />} />
    <Route path={ROUTES.dashboard.path} element={<Dashboard />} />
  </Route>
));

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
