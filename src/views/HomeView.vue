<template>
  <b-container>

    <!-- CARDS -->
    <b-row class="justify-content-center">
      <b-col
        cols="12"
        xs="12"
        sm="10"
        md="5"
        lg="4"
        xl="4"
        class="mb-sm-3 mb-xs-3"
        v-for="(card, index) in cardData"
        :key="index"
      >
        <b-card>
          <b-row>
            <b-col>
              <h5>{{ card.title }}</h5>
              <span> {{ card.total }} </span>
            </b-col>
            <b-col cols="auto">
              <i-bi-taxi-front color="primary"></i-bi-taxi-front>
            </b-col>
          </b-row>
          <p class="mt-3 mb-0">
            <span class="text-success mr-2"> {{ card.percent }}% </span>
            <span>
              {{ card.subtitle }}
            </span>
          </p>
        </b-card>
      </b-col>
    </b-row>
    <!-- END CARDS -->
     <b-row>
      <b-col cols="auto">
        <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
      </b-col>
     </b-row>
    <!-- CHARTS -->
     
    <!-- END CHARTS -->
    <!-- <b-button @click="mostrarAlerta" variant="success"> Hola </b-button>
    <el-button @click="mostrarAlerta"> Hola con Element </el-button> -->
  </b-container>
</template>

<script>
import IconCustom from "@/components/IconCustom/IconCustom.vue";
import { Bar } from 'vue-chartjs'
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  components: {
    IconCustom,
    Bar,
  },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      },
      cardData: [
        {
          title: "Accidentes Vehiculares",
          total: 2485,
          percent: 3.48,
          subtitle: "Ocurridos el último mes",
          icon: "alarm",
        },
        {
          title: "Robos a Mano armada",
          total: 160,
          percent: 20.36,
          subtitle: "Ocurridos el último mes",
          icon: "alarm",
        },
        {
          title: "Homicidios",
          total: 57,
          percent: 16,
          subtitle: "Ocurridos el último mes",
          icon: "alarm",
        },
        {
          title: "Secuestros",
          total: 19,
          percent: 70,
          subtitle: "Ocurridos el último mes",
          icon: "alarm",
        },
      ],
    };
  },
  methods: {
    mostrarAlerta() {
      alert("finolis");
    },
  },
};
</script>