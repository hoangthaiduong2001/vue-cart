<template>
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
      <tr>
        <td scope="row">1</td>
        <td>Laptop</td>
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
export default {};
</script>

<style></style>
