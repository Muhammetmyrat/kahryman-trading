export default function ({ store, redirect }) {
  // If the user is not authenticated
  const auth = store.getters["admin/getToken"];
  const login = store.state.auth.loggedIn;
  if (!auth && !login) {
    return redirect("/login");
  }
}
