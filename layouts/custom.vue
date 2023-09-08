<template>
    <div id="app">
      <HeaderWeb />
    <Nuxt />
    <FooterWeb />
    </div>
  </template>
  <script>
    // Memanggil component sesuai lokasi masing - masing file
    import Header from "@/components/HeaderWeb.vue"
    import Footer from "@/components/FooterWeb.vue"
    export default {
    // Dideklarasikan agar dapat diakses oleh template
    layouts: {
    Header,
    Footer
    }
    }
  </script>
  