<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterView from "./components/Footer.vue";
import HeaderView from "./components/Header.vue";
</script>

<template>
  <HeaderView />
  <nav>
    <RouterLink to="/">前台首頁</RouterLink>
    <RouterLink to="/HomePageView">後台頁</RouterLink>
    <RouterLink to="/FillOutPageView">填寫頁</RouterLink>
    <RouterLink to="/ReviewPageView">審查頁</RouterLink>
    <RouterLink to="/StatisticsPageView">統計頁</RouterLink>
  </nav>

  
  <RouterView />
  <FooterView />
</template>

<style scoped></style>
