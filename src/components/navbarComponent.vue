<!-- eslint-disable prettier/prettier -->

<template>
  <nav class="navbar navbar-light fixed-top justify-content-end">
    <div class="navbar-text ml-auto d-flex">
      <button
        class="btn btn-sm btn-outline-success"
        @click="$parent.$emit('toggle')"
      >
        <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
      </button>
      <div class="dropdown ml-2" v-if="cart.length > 0">
        <button
          class="btn btn-success btn-sm dropdown-toggle"
          id="dropdownCart"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="badge badge-pill badge-light">{{ cartQty }}</span>
          <i class="fas fa-shopping-cart mx-2"></i>
          <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
          <price-component :value="Number(cartTotal)"></price-component>
        </button>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownCart"
        >
          <div v-for="(item, index) in cart" :key="index">
            <div class="dropdown-item-text text-nowrap text-right">
              <span class="badge badge-pill badge-warning align-text-top mr-1">
                {{ item.qty }}
              </span>
              {{ item.product.name }}
              <b>{{ formatCurrency(item.qty * item.product.price) }}</b>
              <a
                href="#"
                class="badge badge-danger text-white"
                @click.stop="$parent.$emit('delete', index)"
                >-</a
              >
            </div>
          </div>
          <router-link
            class="btn btn-sm btn-outline-info text-dark float-right mr-2"
            to="/checkout"
            >Checkout</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import priceComponent from "./priceComponent.vue";

export default {
  name: "nav-bar",
  props: ["cart", "cartQty", "cartTotal"],
  components: {
    priceComponent,
    FontAwesomeIcon,
  },
  methods: {
    formatCurrency(value) {
      return "Rp" + Number.parseFloat(value).toFixed(2);
    },
  },
};
</script>
