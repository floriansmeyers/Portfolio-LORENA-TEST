<template>
  <div class="home-page">
    <Content 
      
      title="wpl 1"
      subtitle="16 sep 2024 - 22 dec 2024"
      description="WPL 1 is een voorbereiding op WPL 2."
      mainImage="../src/assets/portfolio.png"
      gridImage1="../src/assets/pop.png"
      gridImage2="../src/assets/ziapina2.png"
    /> 

    <section class="container">
      <Card
      title="dashboard"
      subtitle="Bekijk Figma"
      subtitleUrl="https://www.figma.com/design/hBGZGDAAZ9iztdGm6V3auU/Dashboard-Cv?node-id=34-45&t=Ika3ZueNMnwtG0Hi-1"
      text="Onze dashboardopdracht gaat over het maken van een duidelijke en interactieve weergave van data, zoals de voortgang van een project. We bepalen eerst het doel, kiezen de relevante gegevens, zorgen voor een logische structuur en voegen interactiviteit toe. Dit helpt bij snelle en effectieve besluitvorming."
      :photos="[{ src: dashboard, alt: 'foto1' }]"
      />
    </section>

     <section class="container">
      <Card
      title="pop-sessions"
      subtitle="Bekijk pdf"
      subtitleUrl="/Pop-sessie.pdf"
      text="In de POP-sessies leerden we reflecteren op specifieke situaties, onze persoonlijke motivatie en kernwaarden ontdekken, en onze personal branding versterken. We formuleerden onze waarden en maakten moodboards om te visualiseren hoe we onszelf presenteren op de werkvloer. We bepalen eerst het doel, kiezen de relevante gegevens, zorgen voor een logische structuur en voegen interactiviteit toe. Dit helpt bij snelle en effectieve besluitvorming."
      :photos="[{ src: pop, alt: 'foto2' }]"
      />
    </section>

    <section class="container">
      <Card
      title="vacature"
      subtitle="Bekijk pdf"
      subtitleUrl="/Wereldverkenning (2).pdf"
      text="De werkveldverkenning begon met seminaries waarin sprekers uit verschillende bedrijven hun ervaringen deelden, wat ons een beter begrip gaf van wat er van ons wordt verwacht in een professionele omgeving. Vervolgens analyseerden we vacatures, wat ons inzicht gaf in de vaardigheden en kwaliteiten die bedrijven belangrijk vinden."
      :photos="[{ src: vacature, alt: 'foto3' }]"
      />
    </section>

    <section class="container">
      <Card
      title="eind-reflectie"
      subtitle="Bekijk pdf"
      subtitleUrl="/eindverkenning.pdf"
      text="In mijn eindreflectie beschreef ik wat ik heb geleerd tijdens Werkplekleren, hoe ik mijn groei heb ervaren en welke vaardigheden ik heb ontwikkeld. Ik reflecteerde ook op ontbrekende elementen in het programma en gaf aan welke onderwerpen ik verder zou willen onderzoeken. Het was een kans om mijn vooruitgang te evalueren en mijn leerervaringen te verwerken."
      :photos="[{ src: eindreflectie, alt: 'foto4' }]"
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





export default {
  name: "WPL1",
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
      eindreflectie
      
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
  padding: 1rem;
  border-radius: 15px;
  overflow-x: hidden;
  box-sizing: border-box;
}

.container {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
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
  border-radius: 10px;
  object-fit: cover;
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
  }

  .section-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .home-page {
    padding: 0.5rem;
  }

  .container {
    padding: 1rem;
    margin: 1rem auto;
  }

  .section-title {
    font-size: 1.25rem;
  }
}
</style>
