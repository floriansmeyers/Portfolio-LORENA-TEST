<template>
  <div class="font-sans text-gray-800 bg-[#fdf8f3] min-h-screen">
    <header class="bg-[#e3c7b6] shadow p-6">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <h1 class="text-3xl font-bold text-white">Lorena VDW</h1>
        <nav class="space-x-6 text-white">
          <a href="#about" class="hover:underline">Over mij</a>
          <a href="#portfolio" class="hover:underline">Portfolio</a>
          <a href="#contact" class="hover:underline">Contact</a>
        </nav>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 py-16">
      <section class="text-center mb-24">
        <h2 class="text-5xl font-bold mb-4">Hallo, ik ben Lorena</h2>
        <p class="text-xl text-[#8b5e3c] mb-6">Creatieve maker & digitale ontwerper</p>
        <a href="#portfolio" class="bg-[#e3c7b6] text-white px-6 py-3 rounded shadow hover:bg-[#d3b2a0] transition">Bekijk mijn werk</a>
      </section>

      <section id="about" class="mb-24">
        <h3 class="text-3xl font-semibold mb-6">Over mij</h3>
        <p class="text-lg leading-relaxed max-w-2xl">
          Ik ben Lorena, een creatieve geest met een passie voor design en digitale beleving. Mijn doel is om unieke, functionele en visueel aantrekkelijke ontwerpen te creëren. Ik werk graag met tools zoals Figma, Adobe XD en Webflow.
        </p>
      </section>

      <section id="portfolio" class="mb-24">
        <h3 class="text-3xl font-semibold mb-6">Portfolio</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <h4 class="text-xl font-bold mb-2">Projectnaam 1</h4>
            <p class="text-sm">Korte omschrijving van dit project.</p>
          </div>
          <div class="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <h4 class="text-xl font-bold mb-2">Projectnaam 2</h4>
            <p class="text-sm">Korte omschrijving van dit project.</p>
          </div>
          <div class="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <h4 class="text-xl font-bold mb-2">Projectnaam 3</h4>
            <p class="text-sm">Korte omschrijving van dit project.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h3 class="text-3xl font-semibold mb-6">Contact</h3>
        <form class="max-w-xl space-y-4">
          <input type="text" placeholder="Naam" class="w-full p-3 border rounded" />
          <input type="email" placeholder="E-mailadres" class="w-full p-3 border rounded" />
          <textarea placeholder="Bericht" rows="5" class="w-full p-3 border rounded"></textarea>
          <button type="submit" class="bg-[#e3c7b6] text-white px-6 py-3 rounded shadow hover:bg-[#d3b2a0] transition">Verstuur</button>
        </form>
      </section>
    </main>

    <footer class="bg-[#e3c7b6] text-white text-center p-6 mt-12">
      © 2025 Lorena VDW – Alle rechten voorbehouden
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>
