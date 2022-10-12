import { useRoutes } from 'react-router-dom'
import routes from './routes';

const AppRoutes= () => {
  const elements = useRoutes(routes);
  return elements;
}

export default AppRoutes