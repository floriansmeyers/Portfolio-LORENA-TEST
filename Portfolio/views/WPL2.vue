<template>
  <div class="home-page">
    <Content 
      
      title="wpl 2"
      subtitle="3 feb 2025 - 23 mei 2025"
      description="WPL 2 was ons eerste groote project."
      mainImage="../src/assets/ziapina.png"
      gridImage1="../src/assets/eindreflectie.jpg"
      gridImage2="../src/assets/ziapina3.png"
    /> 

    <section class="container">
      <Card
      title="case: zia pina"
      subtitle="Bekijk Figma"
      subtitleUrl="https://www.figma.com/design/JpUiEAd4X8JvAFVDvj63UD/wpl2-Zia-Pina?node-id=343-4&t=nUPU9mm5viE2mjzb-1"
      text="Voor het project rond Zia Pina ontwikkelden we een digitaal platform dat draait rond de charme en levensstijl van Italië. Het doel was om Italië-liefhebbers te verbinden en te inspireren via verschillende diensten die de Italiaanse cultuur dichter bij de gebruiker brengen. Onze focus lag op het ontwerpen van een overzichtelijke en visueel aantrekkelijke frontend die toegankelijk is voor een breed publiek. De website bevat verschillende hoofdacties, waaronder inleefreizen naar authentieke regio’s in Italië, taallessen Italiaans voor beginners en gevorderden, advies rond het aankopen van een woning in Italië, en een webshop met typisch Italiaanse producten zoals olijfolie en wijn. Elk van deze ..."
      subtitle2="lees meer"
      subtitleUrl2="/ziapina.pdf"
      :photos="[{ src: ziapina2, alt: 'foto1' }]"
      />
    </section>

     
    <section class="container">
      <Card
      title="eind-reflectie"
      subtitle="Bekijk pdf"
      subtitleUrl="/eindreflectie.pdf"
      text="Tijdens WPL2 werkte ik aan het frontendgedeelte van een groepsproject in Vue.js. Ik leerde gestructureerd samenwerken, mijn technische vaardigheden verbeteren en meer over mezelf als toekomstige werknemer. Hoewel de Thalento-test me minder goed weerspiegelde, haalde ik veel uit de praktijkervaring. De SDG’s gaven extra betekenis aan het project, en via de X-factorbeentjes kon ik groeien in samenwerking, innovatie en empathie."
      :photos="[{ src: eindreflectie, alt: 'foto4' }]"
      />
    </section>

    <section class="container">
      <Card
      title="portfolio"
      text="Op het einde van WPL 2 heb ik mijn nieuwe portfolio gemaakt. Dit is het resultaat!"
      :photos="[{ src: portfolio, alt: 'foto4' }]"
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
import ziapina2 from '../src/assets/ziapina2.png';





export default {
  name: "WPL2",
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
      ziapina2
      
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
