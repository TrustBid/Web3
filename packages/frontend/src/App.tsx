import { RouterProvider } from 'react-router-dom';
// Asegúrate de que la ruta coincida con tu carpeta 'app'
import { router } from './app/router'; 

function App() {
  return <RouterProvider router={router} />;
}

export default App;