<template>
  <div class="home">
    <div class="center-align">
      <GuybrushAnimated/>
      <BrandIcons/>
    </div>
<!--    <HelloWorld msg="TODO"/>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/hello-world/HelloWorld.vue';
import GuybrushAnimated from '@/components/guybrush-animated/GuybrushAnimated.vue';
import BrandIcons from '@/components/brand-icons/BrandIcons.vue'; // @ is an alias to /src

@Component({
  components: {
    BrandIcons,
    GuybrushAnimated,
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style>
  .home {
    color: #222;
    font-size: 1em;
    line-height: 1.4;
    background-color: #AEBBCA;
  }
</style>
