export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "" */ '@/modules/auth/layouts/AuthLayout.vue'),
    children: [
        {
            path: '',
            name: 'login',
            component: () => import(/* webpackChunkName: "" */ '@/modules/auth/views/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "" */ '@/modules/auth/views/Register.vue'),
        }
    ]
}