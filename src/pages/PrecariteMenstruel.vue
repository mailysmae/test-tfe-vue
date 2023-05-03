<template>
    <button class="btn">
        <slot>Revenir à la page d'accueil</slot>
      </button>
</template>
<script>
</script>
<style scoped lang="scss">
  .btn {
    color: #fff;
    background: linear-gradient(315deg, #af42d3 25%, #ff64c6);
    border: none;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(315deg, #ff64c6 25%, #af42d3);
    }
  }
  </style>
