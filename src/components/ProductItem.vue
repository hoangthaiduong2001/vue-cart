<template>
  <div class="card text-left">
    <img class="card-img-top" :src="productItem.image" alt="" />
    <div class="card-body">
      <h4 class="card-title">{{ productItem.name }}</h4>
      <p class="card-text text-danger">{{ productItem.price }} VND</p>
      <button class="btn btn-danger ml-2" @click="handleBuyItem(productItem)">
        Buy
      </button>
      <button class="btn btn-info ml-2" @click="handleOpenModal">Info</button>
    </div>
  </div>
  <teleport to="#app">
    <app-modal :isOpen="isOpenModalCartDetail" :closeModal="handleCloseModal">
      <h1>Test</h1>
    </app-modal>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      isOpenModalCartDetail: false,
    };
  },
  props: {
    productItem: {
      type: Object,
    },
  },
  methods: {
    handleBuyItem(data) {
      this.$emit("buy-item", data);
    },
    handleCloseModal() {
      this.isOpenModalCartDetail = false;
    },
    handleOpenModal() {
      this.isOpenModalCartDetail = true;
    },
  },
};
</script>

<style></style>
