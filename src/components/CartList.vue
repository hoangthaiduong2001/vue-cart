<template>
  <span class="badge badge-light ml-2">{{ cartList.length }}</span>
  <table class="table">
    <thead>
      <tr>
        <th>STT</th>
        <th>Name</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Quantity</th>
        <th>Total price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(cart, index) in cartList" :key="index">
        <td scope="row">{{ index + 1 }}</td>
        <td>{{ cart.name }}</td>
        <td>23000000 VND</td>
        <td>3</td>
        <td>
          <button class="btn btn-success">
            <i class="fa fa-arrow-up"></i>
          </button>
          <span class="mx-2">2</span>
          <button class="btn btn-success">
            <i class="fa fa-arrow-down"></i>
          </button>
        </td>
        <td>23000000</td>
        <td>
          <button class="btn btn-danger">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    cartList: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style></style>
