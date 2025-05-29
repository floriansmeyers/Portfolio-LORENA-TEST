<template>
  <div class="home-page">
    <Header
      title="PORTFOLIO"
      subtitle="FRONT - END DEVELOPER"
      description="Webdeveloper in wording, gebeten door front-end en design."
      description2="Bekijk mijn projecten"
      mainImage="../src/assets/dashboard.png"
      gridImage1="../src/assets/pawpaths.png"
      gridImage2="../src/assets/ziapina2.png"
     
    /> 

    <main class="container">
      <Section
        title="OVER MIJ"
        subtitle="Hey"
        text="Ik ben Lorena en ik ben 18 jaar en studeer aan de Hogeschool PXL om webdeveloper te worden en werk met HTML, CSS, JavaScript en Vue. Ik hou ervan om websites te maken en met een oog voor detail en structuur. Naast webontwikkeling verkoop ik hooi, wat me helpt om plannen en doorzetten te combineren. Mijn landbouwachtergrond zorgt voor een praktische aanpak die ik ook in mijn werk toepas."
        :photos="photos"
        linkTarget="/About"
      />
    </main>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Navigatie from '../components/Navigatie.vue';
import Header from '../components/Header.vue';
import Section from '../components/Section.vue';

import dashboard from '../src/assets/dashboard.png';
import pawpaths from '../src/assets/pawpaths.png';
import ziapina from '../src/assets/ziapina2.png';
import foto1 from '../src/assets/ik.jpg';
import foto2 from '../src/assets/masseyferg.jpg';
import foto4 from '../src/assets/riaenik.jpg';
import foto3  from '../src/assets/landini10.jpg';

export default {
  name: "Home",
  components: {
    Navigatie,
    Footer,
    Header,
    Section,
  },
  data() {
    return {
      dashboard,
      pawpaths,
      ziapina,
      photos: [
        { src: foto1, alt: 'Foto 1 beschrijving' },
        { src: foto2, alt: 'Foto 2 beschrijving' },
        { src: foto3, alt: 'Foto 3 beschrijving' },
        { src: foto4, alt: 'Foto 4 beschrijving' },
      ],
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
