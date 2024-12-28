<!-- eslint-disable prettier/prettier -->
<template>
  <span>
    {{ this.prefix + Number.parseFloat(this.value).toFixed(this.precision) }}
  </span>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
export default {
  props: {
    value: Number,
    prefix: { type: String, default: "Rp" },
    precision: { type: Number, default: 2 },
  },
};
</script>
