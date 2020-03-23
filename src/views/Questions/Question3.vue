<template>
  <v-app>
    <v-container class="page">

      <div class=" mt-5 text-center">
        <p class="title font-weight-bold">Do you have difficulty breathing?</p>

        <v-hover
          v-slot:default="{ hover }"
          close-delay="200"
        >
          <v-btn
            :elevation="hover ? 10 : 2" @click="yes"
            large rounded width="300" color="primary" dark>
            Yes
          </v-btn>
        </v-hover>
         <br>

        <v-hover
          v-slot:default="{ hover }"
          close-delay="200"
        >
          <v-btn
            :elevation="hover ? 10 : 2" class="mt-5" @click="no"
            large rounded width="300" color="primary" dark>
            No
          </v-btn>
        </v-hover>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
  },

  data () {
    return {
    }
  },

  methods: {
    yes () {
      const updateScore = new Promise((resolve, reject) => {
        this.$store.commit('increment', 3)
        resolve()
      })
      updateScore.then(() => {
        console.log(this.score)
        this.$router.push({ name: 'question4' })
      })
    },
    no () {
      this.$router.push({ name: 'question4' })
    }
  },

  created () {
  },

  computed: {
    ...mapGetters({
      score: 'score'
    })
  }
}
</script>

<style scoped>
  .page{
    align-content: center;
    justify-content: center;
  }
</style>
