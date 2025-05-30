<!-- Section.vue -->
<template>
  <section class="section">
    <div class="text-content">
      <h2 class="header">{{ title }}</h2>
      <h3 v-if="subtitle" class="subtitle">{{ subtitle }}</h3>
      <p v-if="text" class="text">{{ text }}</p>

      <ul v-if="listitems && listitems.length" class="list">
        <li v-for="(item, index) in listitems" :key="index" class="list-item">
          {{ item }}
        </li>
      </ul>

      <div class="button">
        <router-link
          :to="linkTarget"
          v-if="showLink && linkTarget"
          class="projects-button"
        >
          <p class="function-description">{{ description }}</p>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="5 12 19 12"></polyline>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </router-link>
      </div>
    </div>

    <div class="photo-grid" v-if="photos && photos.length">
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
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    text: { type: String, default: '' },
    description: { type: String, default: '' },
    listitems: { type: Array, default: () => [] },
    photos: { type: Array, default: () => [] },
    linkTarget: { type: String, required: false, default: ' '},
    showLink: { type: Boolean, default: true },
  },
};
</script>



<style scoped>
.section {
  display: flex;
  flex-direction: row; 
  border-radius: 8px;
  padding: 40px;
  margin-bottom: 40px;
  color: #555;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 1000px;
  overflow: hidden;
  gap: 40px;
  box-sizing: border-box;
}

.text-content {
  flex: 1;
}

.photo-grid {
  width: 600px; 
  height: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 150px);
  gap: 1rem;
  row-gap: 10.5rem;
  border-radius: 8px;
}

.photo-grid img {
  width: 100%;
  height: 200%;
  object-fit: cover;
  border-radius: 6px;
}

.header {
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -1.5px;
  margin-bottom: 15px;
  color: #333;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #333;
}

.text {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 20px;
}

.button {
  margin-top: 10px;
}

.projects-button {
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
  margin-top: 10px;
}

.projects-button:hover {
  background-color: #e2faf6;
  border-color: #1d1d1d;
}


@media (max-width: 992px) {
  .section {
    flex-direction: column;
    padding: 20px;
    max-width: 100%;
  }
  .header {
    font-size: 2rem;
    text-align: center;
  }
  .text-content,
  .list {
    max-width: 100%;
    text-align: center;
    margin-left: 0;
  }
  .photo-grid {
    width: 100%;
    height: auto; 
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: 150px;
    margin-top: 20px;
    row-gap: 1rem; 
  }
  .photo-grid img {
    height: 100%;
  }
}


@media (max-width: 600px) {
  .section {
    padding: 10px;
    gap: 20px;
  }
  .header {
    font-size: 1.5rem;
  }
  .text {
    font-size: 0.9rem;
  }
  .projects-button {
    font-size: 0.7rem;
    padding: 8px 14px;
  }
  .photo-grid {
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: auto; 
    height: auto;
    gap: 10px;
  }
  .photo-grid img {
    height: auto;
  }
}

</style>
