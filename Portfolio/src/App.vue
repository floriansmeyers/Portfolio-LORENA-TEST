<template>
 <div id="app">
<body>
  

  <Navigatie />
    <RouterView />
    <Footer /> 
    </body>
  </div>
</template>

<script >

import Footer from '../components/Footer.vue';
import Navigatie from '../components/Navigatie.vue';
import Header from '../components/Header.vue';
import Section from '../components/Section.vue';
import Content from '../components/Content.vue';



export default {
  name: 'App',
  components: {
    Navigatie,
    Footer,
    Header,
    Section,
    Content,
  },
  data () {
    return{
      Header,
      Content,

  };
},
};
</script>

  <style scoped>
 
  
  </style>
