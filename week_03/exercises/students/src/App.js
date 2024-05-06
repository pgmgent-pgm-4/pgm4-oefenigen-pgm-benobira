import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home, Students, Student, Error } from './pages';
import Root from './layouts/Root';
import {ROUTES} from './routes/routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>} errorElement={<Error />}>
      <Route path={ROUTES.home.path} element={<Home/>} />,
      <Route path={ROUTES.students.path} element={<Students />} />,
      <Route path={ROUTES.student.path} element={<Student />} />,
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
