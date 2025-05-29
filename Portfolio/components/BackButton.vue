<template>
  <button 
    v-if="showButton" 
    class="back-button" 
    @click="goBack"
  >
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="19 12 5 12"></polyline>
  <polyline points="12 5 5 12 12 19"></polyline>
</svg>

  </button>
</template>

<script>
export default {
  name: "BackButton",
  computed: {
    showButton() {
      // Verberg knop als we op homepage zijn (path is '/')
      return this.$route.path !== '/';
    }
  },
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.back();
      } else {
        this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped>
.back-button {
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
    margin-bottom: 1rem;

}

.back-button:hover {
  background-color: #e2faf6;
  border-color: #1d1d1d;
}
</style>
