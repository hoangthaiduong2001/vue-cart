<script setup>
import ProductList from "./components/ProductList.vue";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <TheHeader />
    </div>
  </header>

  <main>
    <ProductList />
  </main>
</template>

<style scoped></style>
