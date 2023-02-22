import Login from './pages/Login'
import Home from './pages/Home'
import News from './pages/News'
import Science from './pages/Science'
import LayoutComponent from './layout'
// import { Navigate } from 'react-router-dom';

export const routeList = [
    {
        path:'/home',
        component:<Home/>
    },
    {
        path:'/',
        component:<LayoutComponent/>,
        children:[
            {
                path:'news',
                component:<News/>
            },
            {
                path:'science',
                component:<Science/>
            },
        ]
    },
    {
        path:'/login',
        component:<Login/>
    },
    // {
    //     path: '/',
    //     component: <Navigate to='/home' />
    // }
]

export default routeList