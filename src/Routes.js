import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";
import User from "./components/pages/users/users";
export const routes = [
    {
        path:"/",
        component:<Login/>
    },
    {
        path:"/home",
        component: <Home/>,
    },
    {
        path:"/user",
        component: <User/>,
    },

]