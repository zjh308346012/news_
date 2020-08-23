<template>
  <van-cell :title="labelText" is-link :value="descText" height='300px'/>
</template>

<script>

export default {
   props:['labelText','descText']
}
</script>

<style>

</style>