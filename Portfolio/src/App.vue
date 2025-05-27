<template>
 <div id="app">
    
  
    <RouterView />
  </div>
</template>

<script >

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data () {
    return{

  };
},
};
</script>

<style scoped>

</style>
