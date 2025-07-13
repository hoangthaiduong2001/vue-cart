<script setup>
import ProductList from "./components/ProductList.vue";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="wrapper">
      <TheHeader />
    </div>
  </header>

  <main>
    <ProductList />
  </main>
</template>

<style scoped></style>
