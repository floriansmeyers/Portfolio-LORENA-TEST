<template>
  <nav class="navbar">
    <div class="navbar-content-wrapper"> 
        <ul class="nav-list">
        <li><RouterLink to="/About">OVER MIJ</RouterLink></li>
        <li><RouterLink to="/">HOME</RouterLink></li>
        <li><RouterLink to="/Projects">PROJECTEN</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigatie' 
}
</script>

<style scoped>

.navbar {
  background-color: #ffffff;
  padding: 1.5rem 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 4rem;
  border: 1px solid #f0f0f0;
}

.navbar-content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-list {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 8rem; /* Iets minder extreem dan 15rem voor rustiger effect */
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
}

.nav-list li a:hover,
.nav-list li a.router-link-active {
  background-color: #e2faf6;
  color: #007b7f;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

@media (max-width: 768px) {
  .nav-list {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .nav-list li a {
    width: 100%;
    text-align: center;
    padding: 0.9rem 1.2rem;
  }
}

@media (max-width: 576px) {
  .navbar-content-wrapper {
    padding: 0 1rem;
  }
}
</style>
