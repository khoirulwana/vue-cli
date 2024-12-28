<!-- eslint-disable prettier/prettier -->

<template>
  <transition-group
    name="fade"
    tag="div"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <!-- Daftar produk -->
    <!-- Menggunakan v-for untuk iterasi produk dan v-if untuk filter harga -->
    <div
      class="row d-none mb-3 align-items-center"
      v-for="(item, index) in showitem"
      :key="item.id"
      :data-index="index"
    >
      <!-- Tombol untuk menambahkan item ke keranjang -->
      <div class="col-1 m-auto">
        <button class="btn btn-info" @click="$emit('add', item)">+</button>
      </div>
      <!-- Gambar produk -->
      <div class="col-sm-4">
        <img class="img-fluid d-block" :src="item.image" :alt="item.name" />
      </div>
      <!-- Informasi produk -->
      <div class="col">
        <h3 class="text-info">{{ item.name }}</h3>
        <p class="mb-0">{{ item.description }}</p>
        <div class="h5 float-right">
          <price-component :value="Number(item.price)"></price-component>
        </div>
      </div>
    </div>
  </transition-group>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
import priceComponent from "./priceComponent.vue";

export default {
  name: "product-list",
  components: {
    priceComponent,
  },
  props: ["products", "maxprice"],
  computed: {
    showitem: function () {
      let max = this.maxprice;
      return this.products.filter(function (item) {
        return item.price <= Number(max);
      });
    },
  },
  methods: {
    beforeEnter: function (el) {
      el.className = "d - none";
    },
    enter: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeInRight";
      }, delay);
    },
    leave: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeOutRight";
      }, delay);
    },
  },
};
</script>
