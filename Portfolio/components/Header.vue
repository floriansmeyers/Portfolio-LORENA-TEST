<template>
  <section class="hero-section" v-if="hasContent">
    <div class="hero-images" v-if="hasImages">
      <img v-if="mainImage" :src="mainImage" :alt="mainImageAlt || ''" class="hero-img-large" />
      <div class="hero-img-grid" v-if="gridImages.length === 2">
        <img v-for="(img, index) in gridImages" :key="index" :src="img.src" :alt="img.alt || ''" />
      </div>
    </div>

    <div class="hero-content" v-if="hasText">
      <h1 v-if="title" class="portfolio-title">{{ title }}</h1>
      <div class="social-media-info">
        <h2 v-if="subtitle" class="function-name">{{ subtitle }}</h2>
        <p v-if="description" class="function-description">{{ description }}</p>
        <div class="projects-button" v-if="description2">
          <router-link  v-if="showLink" to="/Projects" class="view-work-button">
            <p class="function-description">{{ description2 }}</p>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="5 12 19 12"></polyline>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </router-link>
          <h3 v-if="subtitle2 && subtitleUrl2" class="subtitle2">
            
        <a :href="subtitleUrl2" target="_blank" rel="noopener noreferrer">{{ subtitle2 }}
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="5 12 19 12"></polyline>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        
    </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: {
    mainImage: String,
    mainImageAlt: String,
    gridImage1: String,
    gridImageAlt1: String,
    gridImage2: String,
    gridImageAlt2: String,
    title: String,
    subtitle: String,
    description: String,
    description2: String,
    subtitle2: {
      type: String,
      required: true,
    },
    subtitleUrl2: {
      type: String,
      required: true,
    },
  },
  computed: {
    gridImages() {
      return [
        { src: this.gridImage1, alt: this.gridImageAlt1 },
        { src: this.gridImage2, alt: this.gridImageAlt2 },
        
      ].filter(img => img.src);
    },
    hasImages() {
      return this.mainImage || this.gridImages.length === 2;
    },
    hasText() {
      return this.title || this.subtitle || this.description || this.description2;
    },
    hasContent() {
      return this.hasImages || this.hasText;
    },
    
    showLink() {
      
      return this.$route.path !== '/About';
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');

.hero-section {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #f5f8fb;
  margin-bottom: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.hero-images {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
}

.hero-img-large {
  width: 50%;
  height: 400px;
  object-fit: cover;
  flex-shrink: 0;
}

.hero-img-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50%;
  height: 400px;
}

.hero-img-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 40px;
  background-color: white;
  border-radius: 0 0 20px 20px;
  flex-wrap: wrap;
}

.portfolio-title {
  font-size: 10rem;
  font-weight: 900;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: -1px;
  color: #2b2d42;
}

.social-media-info {
  max-width: 300px;
}

.function-name {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
  text-transform: uppercase;
  color: #2b2d42;
}

.function-description {
  font-size: 0.9rem;
  color: #5e5e5e;
  margin-bottom: 12px;
  line-height: 1.6;
}

.projects-button {
  margin-top: 10px;
}

.view-work-button {
  border: 1px solid #2b2d42;
  padding: 10px 18px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #2b2d42;
  transition: all 0.3s ease;
  background-color: transparent;
}

.view-work-button:hover {
  background-color: #e2faf6;
  border-color: #1d1d1d;
}

.subtitle2 a{
  border: 1px solid #2b2d42;
  padding: 10px 18px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  color: #2b2d42;
  transition: all 0.3s ease;
  background-color: transparent;
}
.subtitle2 svg{
  padding-left: 20px;
}
.subtitle2:hover a {
  background-color: #e2faf6;
  border-color: #1d1d1d;
}

@media (max-width: 992px) {
  .hero-section {
    flex-direction: column;
  }

  .hero-images {
    flex-direction: column;
  }

  .hero-img-large,
  .hero-img-grid {
    width: 100%;
    height: 300px;
  }

  .hero-content {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .portfolio-title {
    font-size: 3rem;
  }

  .social-media-info {
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .portfolio-title {
    font-size: 2.2rem;
  }

  .hero-img-grid {
    grid-template-columns: 1fr;
  }

  .view-work-button {
    font-size: 0.7rem;
  }
}


</style>
