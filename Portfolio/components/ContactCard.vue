<template>
  <section class="section">
    <div class="photo-grid" v-if="photos && photos.length">
      <img
        :src="photos[0].src"
        :alt="photos[0].alt || 'Foto 1'"
      />
    </div>

    <div class="text-content-right">
      <h2 class="header">Contacteer mij</h2>
      <p class="text">
       Vragen of ideeën? Stuur gerust een berichtje!
      </p>

      <ul class="contact-links">
        <li>
         <a :href="`mailto:${email}`">{{ email }}</a>
        </li>
        <li>
          <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer">Mijn LinkedIn</a>
        </li>
        <li>
         <a :href="`tel:${gsm}`">{{ gsm }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactCard',
  props: {
    email: {
      type: String,
      required: true,
    },
    linkedinUrl: {
      type: String,
      required: true,
    },
    gsm: {
      type: String,
      required: false,
      default: '',
    },
    photos: {
      type: Array,
      default: () => [],
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
  flex-shrink: 0; 
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
  font-size: 2.5rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  text-align: start;
}


.text {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #555;
  text-align: start;
}

.contact-links {
  list-style: none;
  padding: 0;
}

.contact-links li {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.contact-links a {
  color: #2b2d42;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.contact-links a:hover,
.contact-links a:focus {
  text-decoration: underline;
  color: #1d1d1d;
}

@media (max-width: 992px) {
  .section {
    flex-direction: column;
    padding: 20px;
    align-items: center;
    max-width: 90vw;
  }

  .photo-grid {
    width: 100%;
    height: 400px;
    margin-bottom: 30px;
  }

  .text-content-right {
    text-align: center;
  }

  .header {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .photo-grid {
    height: 250px;
    border-radius: 12px;
  }

  .header {
    font-size: 1.6rem;
  }

  .text {
    font-size: 0.95rem;
  }

  .contact-links li {
    font-size: 1rem;
    margin-bottom: 12px;
  }

  .contact-links a {
    font-size: 1.1rem;
    padding: 6px 0;
    display: inline-block;
  }
}
</style>
