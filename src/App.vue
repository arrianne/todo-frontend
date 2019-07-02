<template>
  <div id="app">
    <Todos />
    <footer class="info">
      <p>Based on a project written by <a href="http://evanyou.me">Evan You</a></p>
    </footer>
  </div>
</template>
<script>
  import Todos from './components/Todo'

  // app Vue instance
  const app = {
    name: 'app',
    components: {
      Todos
    },
    // app initial state
    data: () => {
      return {
      }
    }
  }
  export default app
</script>

<style>
  [v-cloak] { display: none; }
</style>
