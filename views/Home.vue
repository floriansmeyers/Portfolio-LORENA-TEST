<template>
  <div class="home-page">
    <Header
      title="PORTFOLIO"
      subtitle="FRONT - END DEVELOPER"
      description="Webdeveloper in wording, gebeten door front-end en design."
      description2="Bekijk mijn projecten"
      mainImage="/assets/dashboard.png"
      gridImage1="/assets/pawpaths.png"
      gridImage2="/assets/ziapina2.png"
    />

    <main class="container">
      <Section
        title="OVER MIJ"
        subtitle="Hey"
        text="Ik ben Lorena en ik ben 18 jaar en studeer aan de Hogeschool PXL om webdeveloper te worden en werk met HTML, CSS, JavaScript en Vue. Ik hou ervan om websites te maken met oog voor detail en structuur. Naast webontwikkeling verkoop ik hooi, wat me helpt om plannen en doorzetten te combineren. Mijn landbouwachtergrond zorgt voor een praktische aanpak die ik ook in mijn werk toepas."
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
      photos: [
        { src: '/assets/ik.jpg', alt: 'Foto 1 beschrijving' },
        { src: '/assets/masseyferg.jpg', alt: 'Foto 2 beschrijving' },
        { src: '/assets/landini10.jpg', alt: 'Foto 3 beschrijving' },
        { src: '/assets/riaenik.jpg', alt: 'Foto 4 beschrijving' },
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

main {
  padding: 20px;
}

/* Responsive styling */
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
