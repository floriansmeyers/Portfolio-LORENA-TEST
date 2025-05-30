<template>
 <div id="app">
<body>
  

  <Navigatie />
  <BackButton/>
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
import Card from '../components/Card.vue';
import BackButton from '../components/BackButton.vue';
import ContactCard from '../components/ContactCard.vue';



export default {
  name: 'App',
  components: {
    Navigatie,
    Footer,
    Header,
    Section,
    Content,
    Card,
    BackButton,
    ContactCard
  },
  data () {
    return{
      Header,
      Content,
      Card,

  };
},
};
</script>

  <style scoped>
 
  
  </style>
