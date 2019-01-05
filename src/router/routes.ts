import guards from './guards'
import multiguard from 'vue-router-multiguard'
import Home from '@/views/home/Home.vue'
import Post from '@/views/post/Post.vue'
import Login from '@/views/login/Login.vue'
import Error404 from '@/views/errors/Error404.vue'

interface Route {
  path: string
  name: string
  component: any
  beforeEnter?: any
}

export const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    beforeEnter: multiguard([guards.checkAuth]),
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: multiguard([guards.redirectToHome]),
    component: Login
  },
  {
    path: '/posts/:id/:name',
    name: 'SelectedPost',
    beforeEnter: multiguard([guards.checkAuth]),
    component: Post
  },
  {
    path: '*',
    name: 'Error404',
    component: Error404
  }
]
