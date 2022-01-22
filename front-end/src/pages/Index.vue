<template>
  <router-view />
</template>

<script>

export default {
  name: 'Router',
  mounted () {
    this.$router.push('/login')
  }
}
</script>
