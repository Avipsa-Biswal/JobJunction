import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Navbar from './components/shared/Navbar'
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from './components/JobDescription';
import CompanyCreate from "./components/admin/CompanyCreate";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
     path: "/profile",
     element: <Profile />, 
  },

  // admin start from here
  {
    path:"/admin/companies",
    element:<companies/>
  },

  {
    path:"/admin/companies/create",
    element:<CompanyCreate/>
  },

  {
    path:"/admin/companies/:id",
    element:<CompanySetup/>
  },
  
]);
function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
