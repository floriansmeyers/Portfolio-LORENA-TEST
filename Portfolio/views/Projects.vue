<template>
  <div class="home-page">
    <Content 
      title="MIJN PROJECTEN"
      subtitle="wpl 1, wpl 2, eigen werk"
      description="Tijdens WPL 1 en 2 heb ik praktische ervaring opgedaan met webontwikkeling. Ik werkte aan echte projecten waarbij ik mijn kennis van HTML, CSS, JavaScript en Vue toepaste. Deze projecten hielpen me mijn vaardigheden te verbeteren en het belang van teamwork en planning te leren."
      mainImage="/assets/kubus.png"
      gridImage1="/assets/schilderij.jpg"
      gridImage2="/assets/ziapina2.png"
    /> 

    <section class="container">
      <Section
        title="WPL 1"
        subtitle="16 sep 2024 - 22 dec 2024"
        text="WPL 1 staat voor Werkplekleren 1 en is over het algemeen het eerste deel van een praktijkgericht onderwijstraject. Het is ontworpen om studenten een initiële kennismaking te geven met de beroepspraktijk van hun gekozen vakgebied. De nadruk ligt vaak op het ontwikkelen van een professionele houding, het verkennen van de werkplek, en het opdoen van eerste praktische vaardigheden onder begeleiding en een voorbereiding naar WPL 2 waar we met een groep van 8 personen aan een case gaan werken."
        :photos="[
          { src: '/assets/dashboard.png', alt: 'Project afbeelding 1' },
          { src: '/assets/pop.png', alt: 'Project afbeelding 2' },
          { src: '/assets/vacature.png', alt: 'Project afbeelding 3' },
          { src: '/assets/eindreflectie.jpg', alt: 'Project afbeelding 4' }
        ]"
        linkTarget="/WPL1"
      />
    </section>

    <section class="container">
      <Section
        title="WPL 2"
        subtitle="3 feb 2025 - 29 mei 2025"
        text="Tijdens WPL 2 werkten we in team aan een project voor een externe opdrachtgever. Het team bestond uit studenten van digitale vormgeving en programmeren, waardoor we ontwerp en ontwikkeling konden combineren. We begonnen met wireframes en een prototype, en vertaalden dit naar een werkende front-end. Door deze samenwerking leerde ik hoe belangrijk goede communicatie en taakverdeling zijn bij het bouwen van een doordachte website."
        :photos="[
          { src: '/assets/portfolio2.png', alt: 'Project afbeelding 1' },
          { src: '/assets/ziapina2.png', alt: 'Project afbeelding 2' },
          { src: '/assets/ziapina3.png', alt: 'Project afbeelding 3' },
          { src: '/assets/eindreflectie.jpg', alt: 'Project afbeelding 4' }
        ]"
        linkTarget="/WPL2"
      />
    </section>

    <section class="container">
      <Section
        title="Eigen werk"
        subtitle="2024 - heden"
        text="WPL 1 staat voor Werkplekleren 1 en is over het algemeen het eerste deel van een praktijkgericht onderwijstraject. Het is ontworpen om studenten een initiële kennismaking te geven met de beroepspraktijk van hun gekozen vakgebied. De nadruk ligt vaak op het ontwikkelen van een professionele houding, het verkennen van de werkplek, en het opdoen van eerste praktische vaardigheden onder begeleiding en een voorbereiding naar WPL 2 waar we met een groep van 8 personen aan een case gaan werken."
        :photos="[
          { src: '/assets/kubus.png', alt: 'Project afbeelding 1' },
          { src: '/assets/schilderij.jpg', alt: 'Project afbeelding 2' },
          { src: '/assets/pawpaths.png', alt: 'Project afbeelding 3' },
          { src: '/assets/bol.png', alt: 'Project afbeelding 4' }
        ]"
        linkTarget="/EigenWerk"
      />
    </section>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Navigatie from '../components/Navigatie.vue';
import Section from '../components/Section.vue';
import Content from '../components/Content.vue';

export default {
  name: "Projects",
  components: {
    Navigatie,
    Footer,
    Section,
    Content
  }
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
  display: block;
  border-radius: 10px;
  object-fit: cover;
}

/* RESPONSIVE BREAKPOINTS */
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
  .section-title {
    font-size: 1.25rem;
  }

  .home-page {
    padding: 0.5rem;
  }
}
</style>
