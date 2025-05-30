<template>
  <footer class="footer">
    <div class="footer-content-wrapper">
      <p class="footer-text">&copy; {{ currentYear }} LORENA VANDEWIJNGAERDEN</p>
      <div class="footer-links">
       <a 
         href="/privacyrichtlijnen.pdf" 
         target="_blank" 
         rel="noopener noreferrer"
         aria-label="Privacy policy (openen in nieuw tabblad)"
       >Privacy policy</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 2rem 0;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.04);
  text-align: center;
  color: #1f1f1f;
  font-size: 0.9rem;
  border: 1px solid #f0f0f0;
  margin-top: 3rem;
}

.footer-content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-text {
  margin: 0;
  line-height: 1.6;
  font-family: 'Inter', 'Arial', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: #444;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  text-transform: uppercase;
  font-size: 0.85rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-links a {
  text-decoration: none;
  color: #007b7f;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-links a:hover,
.footer-links a:focus {
  color: #004f50;
  outline: none;
}

@media (max-width: 768px) {
  .footer-content-wrapper {
    padding: 0 1.5rem;
  }
}

@media (max-width: 576px) {
  .footer-links {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
