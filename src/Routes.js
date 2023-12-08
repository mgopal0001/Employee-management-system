import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";
export const routes = [
    {
        path:"/",
        component:<Login/>
    },
    {
        path:"/home",
        component: <Home/>,
    },

]