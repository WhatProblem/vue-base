<template>
  <div>Test</div>
</template>

<script>
export default {
    name: 'Test',
    created() {
        console.log(this.$router.matcher.getRoutes())
    }
}
</script>

<style>

</style>