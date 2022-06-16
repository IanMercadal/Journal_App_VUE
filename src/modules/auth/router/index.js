export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "" */ '@/modules/auth/layouts/AuthLayout.vue'),
    children: []
}