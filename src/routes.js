import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile"
import Errorpage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <Errorpage />
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <Errorpage />
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Errorpage />
    },
    {
        path: "/profile/:id",
        element: <UserProfile />,
        errorElement: <Errorpage />
    }
]

export default routes;