<script>
import TheHeader from '../components/TheHeader.vue'
</script>
<template>
  <div class="home container">
    <header>
    <img class="home__logo" src="../assets/images/logo2.svg" srcset="../assets/images/logo2.svg 2x" alt="Logo Règle ton cycle">
    <p class="home__text">Ici on parle de menstruations, de protections périodiques, de règles douloureuses, 
      de précarités menstruelles, bref on parle de règles !</p>
      <img class="home__deco" src="../assets/images/decorec.svg" srcset="../assets/images/decorec.svg 2x" alt="deco arriere plan des personnages">
      <img class="home__deco" src="../assets/images/femmes.svg" srcset="../assets/images/femmes.svg 2x" alt="Illustration personnages + protections périodiques">
    </header>
    <main>
      <section>
        <div class="carre">
          <h1 class="title">Précarité Menstruelle</h1>
          <p class="textcarre">Est-ce que tu savais que 350 000 femmes ne savent pas s'acheter des protections périodiques par manque de moyen financier ?</p>
          <button class="btn">
          <slot>Informe-toi</slot>
          </button>
          <img class="deco" src="../assets/images/decod.svg" srcset="../assets/images/decod.svg 2x" alt="deco de fleurs et de protection périodique">
          <img class="deco2" src="../assets/images/decog.svg" srcset="../assets/images/decog.svg 2x" alt="deco de fleurs et de protection périodique">     
        </div>
        <img class="decoback" src="../assets/images/decoback.svg" srcset="../assets/images/decoback.svg 2x" alt="deco arriere forme">
      </section>
      <section>
        <h1 class="title__2">Protections périodiques</h1>
        <p class="text">Tu souhaiterais changer de protections mais tu ne sais pas laquelle choisir ?

          Tu aimerais savoir comment s’utilise une culotte de règles ou une serviette réutilisable ? 

          Tu voudrais en apprendre plus sur le budget à accorder à celles-ci.
        </p>
        <button class="btn__2">
          <slot>Retrouves les ici</slot>
          </button>
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
  .home{
      &__text{  
        position: absolute;
        width: 549px;
        height: 383.21px;
        left: 0px;
        top: 502.1px; 
        left: 184px;
        width: 400px;
      }
      &__logo{
        position: absolute;
        width: 549px;
        height: 383.21px;
        left: 0px;
        top: 120.1px;
        left: 184px;
      }
      &__deco{
        position: absolute;
        width: 523.23px;
        height: 453.41px;
        left: 834px;
        top: 185px;
      }
    }
</style>
