<template>
  <div id="app">
    <h4>
      <router-link to="/">home</router-link>
			<span class="devider">|</span>
      <router-link to="/about">about</router-link>
    </h4>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
.devider {
	padding: 0 10px;
}
</style>