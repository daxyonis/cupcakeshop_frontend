<template>
  <b-container fluid>  
    <b-nav align="right">
      <b-nav-item active><NuxtLink to="/">Home</NuxtLink></b-nav-item>
      <b-nav-item>About</b-nav-item>
      <b-nav-item>Contact</b-nav-item>
      <b-nav-item disabled>Log out</b-nav-item>
  </b-nav>  
    <Nuxt />
  </b-container>
</template>

<style>
.container {
  padding-top: 20px;
}
</style>
