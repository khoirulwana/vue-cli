<template>
  <div class="container" id="app">
    <h1>IDShop</h1>
    <!-- <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo
      officiis non consequuntur deleniti porro voluptates, neque culpa, iure
      exercitationem ducimus itaque ipsum sint doloremque quidem ab labore,
      explicabo nihil!
    </p>
    <price-component :value="4.5"></price-component> -->
    <product-list
      :products="products"
      :maxprice="maxPrice"
      @add="addItem"
    ></product-list>
  </div>
</template>

<script>
// import priceComponent from "./components/priceComponent.vue";
import productList from "./components/productList.vue";

export default {
  name: "App",
  data: function () {
    return {
      maxPrice: 20,
      products: [],
      cart: [],
    };
  },
  components: {
    // priceComponent,
    productList,
  },
  mounted: function () {
    // Melakukan permintaan fetch ke API untuk mendapatkan data produk
    fetch("https://hplussport.com/api/products/order/price")
      // Mengubah respons menjadi objek JSON
      .then((response) => response.json())
      // Setelah data diubah menjadi JSON, simpan ke dalam 'products'
      .then((data) => {
        this.products = data;
      });
  },
  methods: {
    addItem: function (product) {
      // Menambahkan produk ke array cart
      let productIndex;
      let productExist = this.cart.filter(function (item, index) {
        if (item.product.id == Number(product.id)) {
          productIndex = index;
          return true;
        } else {
          return false;
        }
      });

      if (productExist.length) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
  },
};
</script>
