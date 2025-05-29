<template>
  <nav class="navbar">
    <div class="navbar-content-wrapper">
      <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu" :aria-expanded="menuOpen">
        <span :class="{ 'bar': true, 'bar1': true, 'open': menuOpen }"></span>
        <span :class="{ 'bar': true, 'bar2': true, 'open': menuOpen }"></span>
        <span :class="{ 'bar': true, 'bar3': true, 'open': menuOpen }"></span>
      </button>
      <ul :class="['nav-list', { open: menuOpen }]">
        <li><RouterLink to="/About" @click="closeMenu">OVER MIJ</RouterLink></li>
        <li><RouterLink to="/" @click="closeMenu">HOME</RouterLink></li>
        <li><RouterLink to="/Projects" @click="closeMenu">PROJECTEN</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigatie',
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #ffffff;
  padding: 1.5rem 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  border: 1px solid #f0f0f0;
}

.navbar-content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 28px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 1rem;
  z-index: 11;
}

.bar {
  width: 100%;
  height: 3px;
  background-color: #1f1f1f;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: 1px;
}

.bar1.open {
  transform: rotate(45deg) translate(5px, 5px);
}

.bar2.open {
  opacity: 0;
}

.bar3.open {
  transform: rotate(-45deg) translate(6px, -6px);
}

.nav-list {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 8rem;
}

.nav-list li a {
  text-decoration: none;
  color: #1f1f1f;
  font-family: 'Inter', 'Arial', sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  transition: all 0.25s ease;
  display: inline-block;
  white-space: nowrap;
}

.nav-list li a:hover,
.nav-list li a.router-link-active {
  background-color: #e2faf6;
  color: #007b7f;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

@media (max-width: 768px) {
  .nav-list {
    position: absolute;
    top: 60px;
    right: 2rem;
    background-color: white;
    flex-direction: column;
    align-items: flex-start;
    width: 180px;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    gap: 1rem;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    z-index: 10;
  }
  
  .nav-list.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
  
  .nav-list li a {
    width: 100%;
    text-align: left;
    padding: 0.8rem 1rem;
    font-size: 1rem;
  }
  
  .hamburger {
    display: flex;
  }
}


@media (max-width: 576px) {
  .navbar-content-wrapper {
    padding: 0 1rem;
  }
}
</style>
