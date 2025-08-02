<template>
  <span class="badge badge-light ml-2">{{ dataCart.length }}</span>
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
      <tr v-for="(cart, index) in dataCart" :key="index">
        <td scope="row">{{ index + 1 }}</td>
        <td>{{ cart.name }}</td>
        <td>{{ cart.price }} VND</td>
        <td>{{ cart.quantityInStock }}</td>
        <td>
          <button class="btn btn-success">
            <i class="fa fa-arrow-up"></i>
          </button>
          <span class="mx-2">{{ cart.quantity }}</span>
          <button class="btn btn-success">
            <i class="fa fa-arrow-down"></i>
          </button>
        </td>
        <td>{{ cart.price * cart.quantity }} VND</td>
        <td>
          <button class="btn btn-danger" @click="handleDelete(cart)">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
      <tr>
        <td scope="row">Sum price</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{{ sumPrice }} VND</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    dataCart: {
      required: true,
      type: Array,
    },
  },
  computed: {
    sumPrice() {
      return this.dataCart.reduce(
        (sum, cart) => (sum += cart.quantity * cart.price),
        0
      );
    },
  },
  methods: {
    handleDelete(data) {
      this.$emit("delete-cart", data);
    },
  },
};
</script>
