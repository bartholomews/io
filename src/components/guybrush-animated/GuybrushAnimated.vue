<template>
  <div class="center-align">
    <img
      class="slide-from-top"
      alt="Guybrush Threepwood"
      src="../../assets/guybrush-threepwood.gif"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GuybrushAnimated extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  @import './guybrush-animated.css';
</style>
