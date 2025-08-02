<script setup>
import { ref } from "vue";
import ProductList from "./components/ProductList.vue";
import TheHeader from "./components/TheHeader.vue";

defineEmits(["delete-cart"]);
const cartList = ref([]);
function handleBuy(data) {
  const index = cartList.value.findIndex((item) => item.id === data.id);
  if (index !== -1) {
    cartList.value[index].quantity += 1;
  } else {
    const newProductItem = { ...data, quantity: 1 };
    cartList.value = [...cartList.value, newProductItem];
  }
}

function handleDelete(data) {
  cartList.value = cartList.value.filter((item) => item.id !== data.id);
}
</script>

<template>
  <header>
    <div class="wrapper">
      <TheHeader :cartList="cartList" @delete-cart="handleDelete" />
    </div>
  </header>

  <main class="container">
    <ProductList @buy-item="handleBuy" />
  </main>
</template>

<style scoped></style>
