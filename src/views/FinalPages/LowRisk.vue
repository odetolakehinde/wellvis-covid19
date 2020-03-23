<template>
    <v-app>
        <v-container fluid>
            <v-row>
            <v-col align="center" justify="center" cols="12" md="6" sm="12">
                <v-img alt="High Risk" src="../../assets/lowrisk.png" height="256"
                width="256"></v-img>
                <p class="headline mt-4 font-weight-bold"> Low risk </p>
            </v-col>
            <v-col cols="12" md="6" sm="12" align="center" justify="center"
            >
                <p class="text-md-left title primary--text"> The risk of you having COVID-19 is low. </p>
                <p class="text-left">Stay safe and healthy. Please follow the advice on COVID19 prevention.
                    <br><br>
                For further information: ask more questions on Wellvis or chat a doctor on Wellvis by clicking <a href="https://app.wellvis.org/#/chat/find">here</a></p>

                <div class="text-left">
                    <v-btn rounded class="mr-2 primary" @click="faq">Frequently asked questions</v-btn>
                    <v-btn rounded class="ml-2 primary" @click="preventionTips">Prevention Tips</v-btn>
                </div>

                <p class="mt-3 text-left title black--text"> Share this tool with your friends and family </p>
                <div class="text-left">
                    <v-btn rounded color="#3b5998" class="mr-2 white--text" @click="facebook">
                        <v-icon color="white" left>mdi-facebook</v-icon>facebook</v-btn>
                    <v-btn rounded color="#00acee" class="white--text mr-2" @click="twitter">
                        <v-icon left>mdi-twitter</v-icon>Twitter</v-btn>
                    <v-btn rounded color="#25D366" class="mr-2 white--text" @click="whatsapp">
                        <v-icon left>mdi-whatsapp</v-icon>WhatsApp</v-btn>
                </div>
            </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
    }
  },

  methods: {
    faq () {
      window.open('https://app.wellvis.org/#/articles/view/102/frequently-asked-questions-on-covid-19', '_blank')
    },
    preventionTips () {
      window.open('https://app.wellvis.org/#/articles/view/103/covid-19-prevention-advice', '_blank')
    },
    facebook () {
      window.open('https://www.facebook.com/sharer/sharer.php?u=https://covid19.wellvis.org/&quote=Take%20this%20simple%20test%20to%20find%20out%20your%20COVID-19%20Risk%20factor%20#COVID19', '_blank')
    },
    twitter () {
      window.open('https://twitter.com/intent/tweet?text=Take%20this%20simple%20test%20to%20find%20out%20your%20COVID-19%20Risk%20factor&url=https://covid19.wellvis.org/&hashtags=COVID19', '_blank')
    },
    whatsapp () {
      window.open('whatsapp://send?text=Take%20this%20simple%20test%20to%20find%20out%20your%20COVID-19%20Risk%20factor https://covid19.wellvis.org/', '_blank')
    }
  }
}
</script>
