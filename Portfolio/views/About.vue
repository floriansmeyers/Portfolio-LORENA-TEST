<template>
  <div class="home-page">
    <Header
      title="over mij"
      subtitle="lorena vandewijngaerden"
      description="Webdeveloper in wording, gebeten door front-end en design."
      description2="Bekijk mijn projecten"
      mainImage="/assets/pres.jpg"
      gridImage1="/assets/konijn.jpg"
      gridImage2="/assets/snoepie2.jpg"
      subtitle2="Bekijk mijn cv"
      subtitleUrl2="/Vandewijngaerden_Lorena_cv.pdf"
    /> 

    <section class="container">
      <Section
        title="wie ben ik"
        text="Hoi! Ik ben Lorena Vandewijngaerden, een creatief en praktisch ingesteld persoon met een grote liefde voor het buitenleven, dieren én digitale vormgeving. Je vindt me vaak op het veld met de tractor, of thuis met mijn konijnen en kat — die trouwens altijd in de buurt zijn als ik aan het werk ben. Ik studeer momenteel Digitale Vormgeving, met de ambitie om front-end developer te worden. In die richting kan ik mijn oog voor detail, gevoel voor structuur en creativiteit helemaal kwijt. Wat ik vooral leuk vind, is om digitale projecten vorm te geven die niet alleen mooi zijn, maar ook gebruiksvriendelijk en doordacht. Ik combineer mijn passie voor techniek en creativiteit met het dagelijkse leven op het platteland en mijn betrokkenheid bij ons familiebedrijf. Die combinatie maakt wie ik ben: nuchter, oplossingsgericht en met beide voeten op de grond."
        :photos="[
          { src: '/assets/me.jpg', alt: 'Project afbeelding 1' },
          { src: '/assets/snoepie.jpg', alt: 'Project afbeelding 2' },
          { src: '/assets/welger.jpg', alt: 'Project afbeelding 3' },
          { src: '/assets/landini10.jpg', alt: 'Project afbeelding 4' }
        ]"
        :showLink="false"
      />
    </section>

    <section class="container">
      <Section
        title="Mijn intresses"
        :listitems="['Landbouw & Buitenleven: Je bent graag op het veld, met de tractor, en voelt je thuis in de natuur.', 'Digitale Vormgeving: Je studeert digitale vormgeving en wil front-end developer worden.', 'Dieren & Zorg: Je zorgt met liefde voor je konijnen en kat — ze zijn echt deel van je leven.', ' Creativiteit & Projecten: Je houdt ervan om ideeën visueel en inhoudelijk vorm te geven, in projecten zoals Zia Pina.']"        :photos="[
          { src: '/assets/tractorIcon.svg', alt: 'tractoricoon' },
          { src: '/assets/laptopIcon.svg', alt: 'laptopicoon' },
          { src: '/assets/pawsIcon.svg', alt: 'potenicoon' },
          { src: '/assets/CreativeIcon.svg', alt: 'creativeicoon' }
        ]"
        description="wil je meer weten over mijn landbouw"
        linkTarget="/landbouw"
      />
    </section>

    <section class="container">
      <ContactCard
        email="lorena.vdw@outlook.com"
        :linkedinUrl="'https://www.linkedin.com/in/lorena-vandewijngaerden-405964340/'"
        gsm="0470 396527"
        :photos="[
          { src: '/assets/ik.jpg', alt: 'Project afbeelding 1' }
        ]"
      />
    </section>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Navigatie from '../components/Navigatie.vue';
import Header from '../components/Header.vue';
import Section from '../components/Section.vue';
import Card from '../components/Card.vue';
import ContactCard from '../components/ContactCard.vue';

export default {
  name: "Home",
  components: {
    Navigatie,
    Footer,
    Header,
    Section,
    Card,
    ContactCard,
  },
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

main {
  padding: 20px;
}
</style>
