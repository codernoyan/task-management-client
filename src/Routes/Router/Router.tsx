import { createBrowserRouter } from 'react-router-dom';
import AddTask from '../../components/AddTask/AddTask';
import Completed from '../../components/Completed/Completed';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Media from '../../components/Media/Media';
import MyTasks from '../../components/MyTasks/MyTasks';
import Register from '../../components/Register/Register';
import TaskDetails from '../../components/TaskDetails/TaskDetails';
import UpdateTask from '../../components/UpdateTask/UpdateTask';
import Main from '../../Layout/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/add-task',
        element: <AddTask/>
      },
      {
        path: '/my-tasks',
        element: <MyTasks/>
      },
      {
        path: '/completed',
        element: <Completed/>
      },
      {
        path: '/media',
        element: <Media/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/update-task/:id',
        loader: ({params}) => fetch(`${process.env.REACT_APP_API_URL}/task/${params.id}`),
        element: <UpdateTask/>
      },
      {
        path: '/task-details/:id',
        loader: ({params}) => fetch(`${process.env.REACT_APP_API_URL}/task/${params.id}`),
        element: <TaskDetails/>
      }
    ]
  }
])