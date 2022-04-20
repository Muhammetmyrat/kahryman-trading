export default async function ({ $auth, redirect, route }) {
  let user = $auth.$state.user
  if (user) {
    if (route.matched[0].path === '/admin') {
      if (user.role === 'admin') return redirect('/admin')
    }
  } else {
    return redirect('/admin/login')
  }
}
