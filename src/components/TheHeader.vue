<template>
    <header class="header">
      <nav class="header__main-nav">
       <a href="index.html"><img class="header__logo" src="../assets/logo.svg" srcset="../assets/logo.svg 2x" alt="Logo Règle ton cycle"></a>
        <ul>
          <li>
            <RouterLink to="/">Protections périodiques</RouterLink>
          </li>
          <li>
            <RouterLink to="/douleur">Règles douloureuses</RouterLink>
          </li>
          <li>
            <RouterLink to="/précarité">Précarité menstruelle</RouterLink>
          </li>
          <li>
            <RouterLink to="/speak">Comment en parler ?</RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 7px 0px 0px;
    gap: 356px;

    position: absolute;
    width: 1279px;
    height: 59.96px;
    left: 124px;
    top: 17px;

    &__logo {
      width: 116px;

      
    }
  
    &__main-nav {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 290px;
  
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        height: inherit;
        margin: 0;
        list-style: none;
      }
  
  
    }
  }
  </style>
  