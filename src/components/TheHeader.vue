<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand logo" href="#">ShopCart</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="d-flex justify-content-between navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <div class="d-flex">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div class="ml-2">
            <button class="btn btn-danger" @click="handleOpenModal">
              <i class="fa fa-shopping-cart"></i>
              <span class="badge badge-light ml-2">0</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <teleport to="#app">
    <app-modal :isOpen="isOpenModalCardList" :closeModal="handleCloseModal">
      <section>
        <CartList :dataCart="cartList" />
      </section>
    </app-modal>
  </teleport>
</template>

<script>
import CartList from "./CartList.vue";

export default {
  components: {
    CartList,
  },
  props: {
    cartList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpenModalCardList: false,
    };
  },
  methods: {
    handleOpenModal() {
      this.isOpenModalCardList = true;
    },
    handleCloseModal() {
      this.isOpenModalCardList = false;
    },
  },
};
</script>

<style>
.logo {
  font-size: 30px;
  background: -webkit-linear-gradient(#41b883, yellow, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
