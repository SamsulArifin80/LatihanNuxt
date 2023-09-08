<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
    <span class="navbar-text">
    &copy; 2022 Taskist. All right reserved
    </span>
    <p>Menggunakan v-html directive: <span v-html="msg"></span></p>
    </div>
    </nav>
    </template>
<script>
export default {
    data() {
      return {
        msg: "Hello World!"
      }
    } 
};
</script>