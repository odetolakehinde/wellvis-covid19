<template>
  <v-app>
    <v-container class="page">

      <div class=" mt-5 text-center">
        <p class="title mx-9 font-weight-bold">In the past 14 days have you or anyone you have come in contact with had close contact with a confirmed case of nCOV (coronavirus) infection?</p>

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
        this.$store.commit('increment', 5)
        resolve()
      })
      updateScore.then(() => {
        console.log(this.score)
        this.$router.push({ name: 'question6' })
      })
    },
    no () {
      this.$router.push({ name: 'question6' })
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
