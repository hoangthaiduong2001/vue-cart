<template>
  <section class="product-list">
    <h2 class="text-center text-danger font-weight-bold">Featured products</h2>
    <div class="pro-list row">
      <div class="col-lg-3"><ProductItem /></div>
      <div class="col-lg-3"><ProductItem /></div>
      <div class="col-lg-3"><ProductItem /></div>
      <div class="col-lg-3"><ProductItem /></div>
      <div class="col-lg-3"><ProductItem /></div>
      <div class="col-lg-3"><ProductItem /></div>
      <div class="col-lg-3"><ProductItem /></div>
      <div class="col-lg-3"><ProductItem /></div>
    </div>
  </section>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: { ProductItem },
};
</script>

<style></style>
