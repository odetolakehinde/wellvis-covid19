<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
      <v-row class="mt-9 pt-9" align="center" justify="center">
        <v-img alt="Wellvis logo" src="./assets/wellvis logo.gif" max-width="150"></v-img>
      </v-row>

      <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer
      padless
      fixed
      class="font-weight-medium"
    >
      <v-col
        class="primary text-center"
        cols="12"
      >
        <strong> © </strong> {{ new Date().getFullYear() }} — <strong>The WellViser Company Limited</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  })
}
</script>

<style>
  ::-webkit-scrollbar {
    width:0em;
    display: inline !important;
  }
</style>
