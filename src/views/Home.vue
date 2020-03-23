<template>
  <v-app>
    <v-container class="page">
      <!-- <v-row class="mt-9 pt-9" align="center" justify="center">
        <v-img alt="Vue logo" src="../assets/wellvis logo.gif" max-width="150"></v-img>
      </v-row> -->

      <div class=" mt-5 text-center">
        <p class="title font-weight-bold">Before we begin...</p>
        <p class="mx-9 font-weight-bold">This app will determine your COVID-19 risk factor and
         if you need to call the Disease Control Hotline or not.</p>
        <v-btn
          class="ma-2 primary white--text"
          to="/question1"
        >
          Get Started
          <v-icon right>mdi-arrow-right-bold</v-icon>
        </v-btn>
      </div>
    </v-container>

    <!-- <v-footer
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
    </v-footer> -->
  </v-app>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
  .page{
    align-content: center;
    justify-content: center;
  }
</style>
