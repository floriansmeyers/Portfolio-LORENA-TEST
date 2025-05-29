<template>
  <section class="section">
   <div class="photo-grid" v-if="photos && photos.length">
  <img
    :src="photos[0].src"
    :alt="photos[0].alt || 'Foto 1'"
  />
</div>

    <div class="text-content-right">
      <h2 class="header">{{ title }}</h2>
      <h3 v-if="subtitle && subtitleUrl" class="subtitle">
        <a :href="subtitleUrl" target="_blank" rel="noopener noreferrer">{{ subtitle }}</a>
    </h3>
    
      <p v-if="text" class="text">{{ text }}</p>
      <h3 v-if="subtitle2 && subtitleUrl2" class="subtitle2">
        <a :href="subtitleUrl2" target="_blank" rel="noopener noreferrer">{{ subtitle2 }}</a>
    </h3>
    

      
    </div>
  </section>
</template>

<script>
export default {
  name: 'Card',
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
    
    photos: {
      type: Array,
      default: () => [],
    },
    subtitleUrl: {
       type: String,
        default: '',
    },
    subtitleUrl2: {
       type: String,
        default: '',
    },
    subtitle2: {
       type: String,
        default: '',
    },
    linkTarget: {
      type: String,
      required: true,
    },
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
  gap: 40px;
  overflow: hidden;
}

.photo-grid {
  width: 600px; 
  height: 600px;
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.10);

  border-radius: 15px;
}

.photo-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.text-content-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header {
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -1.5px;
  margin-bottom: 15px;
  color: #333;
  text-align: start;
}

.subtitle  a{
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #333;
  text-align: start;
  text-decoration: none;
}
.subtitle2  a{
  font-size: 1rem;
  font-weight: 900;
  text-transform: uppercase;
  
  color: #333;
  text-align: start;
  text-decoration: none;
}

.text {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: -20px;
  color: #555;
  text-align: start;
  margin-left: auto;
}



.projects-button {
  margin-top: 10px;
  text-align: start;
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
  justify-content: flex-end;
}

.view-work-button:hover {
  background-color: #e2faf6;
  border-color: #1d1d1d;
}

@media (max-width: 992px) {
  .section {
    flex-direction: column;
    padding: 20px;
    max-width: 100%;
  }
  .photo-left {
    width: 100%;
    flex: none;
    margin-bottom: 20px;
  }
  .header,
  .subtitle,
  .text,
  .list,
  .projects-button {
    text-align: center;
    margin-left: 0;
    margin-right: 0;
  }
  .list li {
    direction: ltr;
  }
  .view-work-button {
    justify-content: center;
  }
}
</style>
