<template>
  <div class="home-page">
    <Content 
      
      title="eigen werk"
      subtitle="2024 - heden"
      description= "Werk van vorig jaar tot nu."
      mainImage="../src/assets/kubus.png"
      gridImage1="../src/assets/bol.png"
      gridImage2="../src/assets/schilderij.jpg"
    /> 

    <section class="container">
      <Card
      title="3d ontwerp van de stijl"
      text="Dit is een 3D-model gemaakt in SketchUp, een programma voor 3D-ontwerpen. Het kubusvormige ontwerp bevat geometrische elementen in primaire kleuren (rood, geel, blauw) en zwart, sterk geïnspireerd door de stijl van De Stijl en het werk van Piet Mondriaan. Het lijkt op een opdracht gericht op abstracte vormgeving en kleurgebruik."
      :photos="[{ src: kubus, alt: 'foto1' }]"
      />
    </section>

     <section class="container">
      <Card
      title="pawpaths"
      text="Voor onze UI-opdracht maken we de app PawPaths, waarmee gebruikers wereldwijd kunnen wandelen met honden uit asielen. De app biedt ook de mogelijkheid om honden te adopteren of donaties te doen. We focussen op een gebruiksvriendelijke interface die het gemakkelijk maakt om te helpen en nieuwe routes te ontdekken."
      :photos="[{ src: pawpaths, alt: 'foto2' }]"
      />
    </section>

    <section class="container">
      <Card
      title="on the way"
      text="Schilderij met acrylverf, geïnspireerd op het werk van Koen van den Broek, gebaseerd op zijn schaduwenreeks uit het boek."
      :photos="[{ src: schilderij, alt: 'foto3' }]"
      />
    </section>

    <section class="container">
      <Card
      title="UX-analyse bol.com"
     
      text="Voor ons UX-project onderzochten we in groep de website van bol.com. We analyseerden de gebruikerservaring en verzamelden inzichten rond gebruiksvriendelijkheid, klanttevredenheid en het aankoopproces. Op basis van interviews en observaties stelden we concrete verbeterpunten voor om de site intuïtiever en aangenamer te maken voor de gebruiker.

"
      :photos="[{ src: bol, alt: 'foto4' }]"
      />
    </section>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Navigatie from '../components/Navigatie.vue';
import Section from '../components/Section.vue';
import Content from '../components/Content.vue';
import Card from '../components/Card.vue';

import dashboard from '../src/assets/dashboard.png';
import pawpaths from '../src/assets/pawpaths.png';
import ziapina from '../src/assets/ziapina2.png';
import portfolio from '../src/assets/portfolio.png';
import pop from '../src/assets/pop.png';
import vacature from '../src/assets/vacature.png';
import eindreflectie from '../src/assets/eindreflectie.jpg';
import schilderij  from '../src/assets/schilderij.jpg';
import kubus from '../src/assets/kubus.png';
import bol from '../src/assets/bol.png';





export default {
  name: "EigenWerk",
  components: {
    Navigatie,
    Footer,
    Section,
    Content,
    Card
  },
  data() {
    return {
      dashboard,
      pawpaths,
      ziapina,
      portfolio,
      pop, 
      vacature,
      eindreflectie,
      schilderij,
      kubus,
      bol
      
    };
  },
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');

.home-page {
  font-family: 'Montserrat', sans-serif;
  color: #2b2d42;
  background-color: #f5f8fb;
  padding:10px;
  border-radius: 15px;
  overflow-x: hidden; 
}

.container {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
}


.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  color: #2b2d42;
  border-bottom: 2px solid #2b2d42;
  padding-bottom: 0.5rem;
}


</style>
