import { Navigate, RouteObject } from 'react-router-dom';
import Blog from '../pages/Blog';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AuthGuardAdmin from './AuthGuardAdmin';
import AuthGuardUser from './AuthGuardUser';

const routes: RouteObject[] = [
  {
    index: true,
    path: '/',
    element: <Navigate to={'/home'} />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    element: <AuthGuardUser allowed={['USER', 'CUSTOMER']} authenticated={true} />,
    children: [
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
  {
    element: <AuthGuardAdmin allowed={['ADMIN']} authenticated={true} />,
    children: [
      {
        path: '/admin/management-blogs',
        element: <Blog />,
      },
      {
        path: '/admin/management-users',
        element: <Blog />,
      },
      {
        path: '/admin/management-categories',
        element: <Blog />,
      },
      {
        path: '/admin/management-roles',
        element: <Blog />,
      },
    ],
  },
];

export default routes;
