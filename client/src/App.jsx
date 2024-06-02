import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { Toaster } from 'react-hot-toast';

// layout imports

// page imports
import Home from './pages/Home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: []
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  )
}

export default App