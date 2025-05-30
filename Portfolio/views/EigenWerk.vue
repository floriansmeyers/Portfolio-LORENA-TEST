<template>
  <div class="home-page">
    <Content 
      title="eigen werk"
      subtitle="2024 - heden"
      description="Werk van vorig jaar tot nu."
      mainImage="/assets/kubus.png"
      gridImage1="/assets/bol.png"
      gridImage2="/assets/schilderij.jpg"
    /> 

    <section class="container">
      <Card
        title="3d ontwerp van de stijl"
        text="Dit is een 3D-model gemaakt in SketchUp, een programma voor 3D-ontwerpen. Het kubusvormige ontwerp bevat geometrische elementen in primaire kleuren (rood, geel, blauw) en zwart, sterk geïnspireerd door de stijl van De Stijl en het werk van Piet Mondriaan. Het lijkt op een opdracht gericht op abstracte vormgeving en kleurgebruik."
        :photos="[{ src: '/assets/kubus.png', alt: 'foto1' }]"
      />
    </section>

    <section class="container">
      <Card
        title="pawpaths"
        text="Voor onze UI-opdracht maken we de app PawPaths, waarmee gebruikers wereldwijd kunnen wandelen met honden uit asielen. De app biedt ook de mogelijkheid om honden te adopteren of donaties te doen. We focussen op een gebruiksvriendelijke interface die het gemakkelijk maakt om te helpen en nieuwe routes te ontdekken."
        :photos="[{ src: '/assets/pawpaths.png', alt: 'foto2' }]"
      />
    </section>

    <section class="container">
      <Card
        title="on the way"
        text="Schilderij met acrylverf, geïnspireerd op het werk van Koen van den Broek, gebaseerd op zijn schaduwenreeks uit het boek."
        :photos="[{ src: '/assets/schilderij.jpg', alt: 'foto3' }]"
      />
    </section>

    <section class="container">
      <Card
        title="UX-analyse bol.com"
        text="Voor ons UX-project onderzochten we in groep de website van bol.com. We analyseerden de gebruikerservaring en verzamelden inzichten rond gebruiksvriendelijkheid, klanttevredenheid en het aankoopproces. Op basis van interviews en observaties stelden we concrete verbeterpunten voor om de site intuïtiever en aangenamer te maken voor de gebruiker."
        :photos="[{ src: '/assets/bol.png', alt: 'foto4' }]"
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

export default {
  name: "EigenWerk",
  components: {
    Navigatie,
    Footer,
    Section,
    Content,
    Card
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');

.home-page {
  font-family: 'Montserrat', sans-serif;
  color: #2b2d42;
  background-color: #f5f8fb;
  padding: 10px;
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

img {
  max-width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 1024px) {
  .container {
    padding: 1.5rem;
    margin: 1.5rem auto;
  }

  .section-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
    margin: 1rem auto;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .home-page {
    padding: 5px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0.75rem;
    margin: 1rem auto;
  }

  .section-title {
    font-size: 1.25rem;
  }

  .home-page {
    padding: 0;
  }
}
</style>
