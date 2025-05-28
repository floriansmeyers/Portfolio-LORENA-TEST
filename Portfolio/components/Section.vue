<template>
  <section class="cv-section">
    <div class="cv-text-content">
      <h2 class="cv-header">{{ title }}</h2>
      <h3 v-if="subtitle" class="cv-subtitle">{{ subtitle }}</h3>
      <p v-if="text" class="cv-text">{{ text }}</p>
      <ul v-if="list && list.length" class="cv-list">
        <li v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="cv-photo-grid" v-if="photos && photos.length">
      <img
        v-for="(photo, index) in photos.slice(0, 4)"
        :key="index"
        :src="photo.src"
        :alt="photo.alt || `Foto ${index + 1}`"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
    photos: {
      type: Array,
      default: () => [
        { src: foto1, alt: 'Beschrijving' },
        { src: foto2, alt: 'Beschrijving' },
        { src: foto3, alt: 'Beschrijving' },
        { src: foto4, alt: 'Beschrijving' },
      ],
      
    },
  },
};
</script>

<style scoped>
.cv-section {
  display: flex;
  flex-direction: row; /* horizontaal */
  border-radius: 8px;
  padding: 40px;
  margin-bottom: 40px;
  color: #555;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 1000px;
  overflow: hidden;
  gap: 40px;
}


.cv-text-content {
  flex: 1; 
}

/* Foto-grid rechts */
.cv-photo-grid {
  width: 600px; /* vaste breedte voor fotos */
  height: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 150px);
  gap: 1rem;
  row-gap: 10.5rem;
  border-radius: 8px;
  
}

.cv-photo-grid img {
  width: 100%;
  height: 200%;
  object-fit: cover;
  border-radius: 6px;
}

.cv-header {
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -1.5px;
  margin-bottom: 15px;
  color: #333;
}

.cv-subtitle {
  font-size: 2rem;
  font-weight: 900;
text-transform: uppercase;
  margin-bottom: 10px;
  color: #333;
}

.cv-text {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 20px;
}

.cv-list {
  list-style-type: disc;
  margin-left: 20px;
  max-width: 600px;
  color: #555;
}

.cv-list li {
  margin-bottom: 10px;
}

/* Responsive */
@media (max-width: 992px) {
  .cv-section {
    flex-direction: column;
    padding: 20px;
    max-width: 100%;
  }
  .cv-header {
    font-size: 2rem;
    text-align: center;
  }
  .cv-text-content,
  .cv-list {
    max-width: 100%;
    text-align: center;
    margin-left: 0;
  }
  .cv-photo-grid {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 150px;
    margin-top: 20px;
  }
}
</style>
