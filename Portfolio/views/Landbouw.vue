<template>
  <div class="home-page">
    
    <Content
      title="mijn passie voor landbouw"
      subtitle="lorena vandewijngaerden"
      description="Van kleins af aan ben ik al gefascineerd door het boerenleven. Tractoren, zaaien, oogsten – het zit in mijn hart. Hoewel ik me professioneel focus op webontwikkeling, blijft landbouw mijn grootste hobby. Op het veld kan ik mijn hoofd leegmaken en voel ik me echt thuis."
      mainImage="../src/assets/bikken.jpg"
      gridImage1="../src/assets/pres.jpg"
      gridImage2="../src/assets/zaaien.jpg"
    
    /> 
    
   <section class="container">
      <Card
      title="hooi persen"
      text="Ik werk met twee verschillende persen om hooi te verwerken. Elke machine heeft z'n eigen karakter, en ik ken ze door en door. Het is zwaar werk, maar ik doe het graag – het geeft voldoening om het resultaat netjes op het veld te zien liggen."
      :photos="[{ src: welger, alt: 'foto1' }]"
      />
    </section>

    <section class="container">
      <Card
      title="bikken/ploegen"
      text="Het liefste wat ik doe is bikken en ploegen, de grond klaarmaken voor het zaaien. Met de juiste machine maak ik de bodem los en vlak, zodat we daarna opnieuw kunnen zaaien. Dat voorbereidend werk geeft me het meeste voldoening – het is het begin van alles."
      :photos="[{ src: landinienmassey, alt: 'foto2' }]"
      />
    </section>

    <section class="container">
      <Card
      title="zaaien"
      text="Tijdens het voorjaar help ik ook met zaaien. Dat is het begin van alles. Ik vind het fascinerend hoe je met geduld, kennis en samenwerking iets kan opbouwen dat maanden later geoogst wordt. Het voelt krachtig om daar deel van te zijn."
      :photos="[{ src: zaaien, alt: 'foto3' }]"
      />
    </section>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import Content from '../components/Content.vue';

import welger from '../src/assets/welger.jpg';
import landinienmassey from '../src/assets/landinienmassey.jpg';
import zaaien from '../src/assets/zaaien2.jpg';
export default {
  name: 'Landbouw',
  components: {
    Card,
    Content,
  },
  data() {
    return {
      landinienmassey,
        welger,
        zaaien,
    
    };
  }
};
</script>

<style scoped>
.home-page {
  font-family: 'Montserrat', sans-serif;
  color: #2b2d42;
  background-color: #f5f8fb;
  padding:10px;
  border-radius: 15px;
}
.container {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  color: #2b2d42;
  border-bottom: 2px solid #2b2d42;
  padding-bottom: 0.5rem;
}
</style>
