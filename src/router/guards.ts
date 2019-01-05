export default {
  checkAuth(to, from, next) {
    const user = localStorage.getItem('testUser')
    if (!user) {
      next({ name: 'Login' })
    }
    next()
  },
  redirectToHome(to, from, next) {
    const user = localStorage.getItem('testUser')
    if (user) {
      next({ name: 'Home' })
    }
    next()
  }
}
