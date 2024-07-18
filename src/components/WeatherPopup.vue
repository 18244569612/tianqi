<!-- WeatherPopup.vue -->
<template>
	<div class="weekly-weather-popup">
		

		
		<h2>{{ name}} 一周天气预报</h2>
		<div v-for="day in weeklyWeather" :key="day.date" class="weather-day">
			<p>{{ day.date }}</p>

			<p>{{ day.low }} °C - {{ day.high }} °C</p>
			<p>{{ day.text_day }}</p>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		props: ['city'],
		data() {
			return {
				weeklyWeather: [],
				name:''
			};
		},
		mounted() {
			
			
		},


		methods: {
			fetchWeeklyWeather(citydata) {
				console.log(citydata)
				
			this.name=citydata.name
				const apiKey = 'SAAxK3t3JwoSkL63O';
				const id = citydata.name
				const apiUrl =
					`https://api.seniverse.com/v3/weather/daily.json?key=${apiKey}&location=${id}&language=zh-Hans&unit=c&start=0&days=7`;

				axios.get(apiUrl)
					.then(response => {
						console.log(response)
					this.weeklyWeather=response.data.results[0].daily
					})
					.catch(error => {
						console.error('Error fetching weekly weather', error);
					});
			},
		
		}
	};
</script>

<style scoped>
	.weekly-weather-popup {
		position: fixed;
		top: 20%;
		left: 80%;
		transform: translateX(-50%);
		background: white;
		padding: 20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		z-index: 9999;
	}
</style>
