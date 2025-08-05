<template>
  <section class="container">
    <div class="row">
      <div class="col-sm-4">
        <img :src="productDetail.image" alt="img-thumbnail" />
      </div>
      <div class="col-sm-8">
        <div class="alert alert-success">
          <b>Name: </b>
          <span>{{ productDetail.name }}</span>
        </div>
        <div class="alert alert-success">
          <b>Description: </b>
          <span>{{ productDetail.description }}</span>
        </div>
        <div class="alert alert-success">
          <b>Price: </b>
          <span>{{ productDetail.price }}</span>
        </div>
        <div class="alert alert-success">
          <b>Stock: </b>
          <span>{{ productDetail.quantityInStock }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    productDetail: {
      type: Object,
    },
  },
};
</script>

<style></style>
