Middleware
=======

> Store navigation guards inside this folder.

```js
// checkAuth.js
export default function checkAuth(next, isAuthenticated) {
  if (isAuthenticated) {
    next('/')
  } else {
    next('/login');
  }
}


// router.js
import Router from 'vue-router'
import checkAuth from '../middlewares/checkAuth.js'
const isAuthenticated = true
const router = new Router({
  routes: [],
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  checkAuth(next, isAuthenticated)
});
```

