import { Contacts, Home, Team, About } from '../pages'

export default [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contacts',
        element: <Contacts />
    },
    {
        path: '/team',
        element: <Team />
    },
]