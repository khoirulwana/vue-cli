<!-- eslint-disable prettier/prettier -->

<template>
  <div>
    <check-out
      :cart="cart"
      :cartTotal="cartTotal"
      @add="addItem"
      @delete="deleteItem"
    ></check-out>
    <h1>IDShop</h1>
    <navbar-component
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
    ></navbar-component>

    <price-slider :sliderStatus="sliderStatus"></price-slider>
    <pre>
            <!-- <div>{{ JSON.stringify(products, null, 2) }}</div> -->
        </pre>
    <product-list :maximum="maximum" :products="products"></product-list>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
import navbarComponent from "./navbarComponent.vue";
import priceSlider from "./priceSlider.vue";
import checkOut from "./checkOut.vue";
import productList from "./productList.vue";

export default {
  name: "products-component",
  props: [
    "products",
    "maximum",
    "cart",
    "cartQty",
    "cartTotal",
    "sliderStatus",
    "sliderState",
  ],
  components: {
    navbarComponent,
    priceSlider,
    productList,
    checkOut,
  },
};
</script>
