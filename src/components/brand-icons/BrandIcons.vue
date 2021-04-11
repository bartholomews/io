<template>
  <!-- https://stackoverflow.com/questions/20721248/how-can-i-override-bootstrap-css-styles -->
  <b-container>
    <!--    <b-list-group>-->
    <!--      <b-list-group-item href="http://apple.com">iPhone</b-list-group-item>-->
    <!--      <b-list-group-item>OnePlus 3T</b-list-group-item>-->
    <!--      <b-list-group-item>Samsung Galaxy 8</b-list-group-item>-->
    <!--    </b-list-group>-->
    <b-row>
      <!-- github link -->
      <b-col md="12">
        <div class="icon-link icon-link-4">
          <a target="_blank" href="https://github.com/bartholomews">
            <font-awesome-icon :icon="['fab', 'github']" size="3x"/>
          </a>
        </div>
      </b-col>
      <!-- linkedin link -->
      <b-col md="12">
        <div class="icon-link icon-link-2">
          <a target="_blank" href="https://linkedin.com/in/bartholomews">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" size="3x"/>
          </a>
        </div>
      </b-col>
      <!-- twitter link -->
      <b-col md="12">
        <div class="icon-link icon-link-3">
          <a target="_blank" href="https://twitter.com/foobartholomews">
            <font-awesome-icon :icon="['fab', 'twitter']" size="3x"/>
          </a>
        </div>
      </b-col>
      <!-- mail link -->
      <b-col md="12">
        <div class="icon-link icon-link-5">
          <a target="_blank" href="mailto:hello@bartholomews.io?Subject=Hello">
            <font-awesome-icon :icon="['fas', 'envelope']" size="3x"/>
          </a>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BrandIcons extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
@import './fade-in.css';
@import './icons.css';
</style>
