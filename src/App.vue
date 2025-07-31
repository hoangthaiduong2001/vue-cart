<script setup>
import { ref } from "vue";
import ProductList from "./components/ProductList.vue";
import TheHeader from "./components/TheHeader.vue";

const cartList = ref([]);
function handleBuy(data) {
  cartList.value.push(data);
}
</script>

<template>
  <header>
    <div class="wrapper">
      <TheHeader :cartList="cartList" />
    </div>
  </header>

  <main class="container">
    <ProductList @buy-item="handleBuy" />
  </main>
</template>

<style scoped></style>
