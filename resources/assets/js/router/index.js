import Vue from 'vue'
import Router from 'vue-router'
import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/foo',
      name: 'foo',
      component: Foo,
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar,
    },
  ],
  mode: 'history'
})
