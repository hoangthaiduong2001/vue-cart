<template>
  <div class="card text-left">
    <img class="card-img-top" :src="productItem.image" alt="" />
    <div class="card-body">
      <h4 class="card-title">{{ productItem.name }}</h4>
      <p class="card-text text-danger">{{ productItem.price }} VND</p>
      <button class="btn btn-danger ml-2" @click="handleBuyItem(productItem)">
        Buy
      </button>
      <button class="btn btn-info ml-2">Info</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productItem: {
      type: Object,
    },
  },
  methods: {
    handleBuyItem(data) {
      this.$emit("buy-item", data);
    },
  },
};
</script>

<style></style>
