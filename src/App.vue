<!-- App.vue -->
<template>
	<div id="app">
		<div class="map-container">
			<my-map @city-click="showWeather" />
		</div>

		<weather-popup ref="Popupref" v-if="showPopup" @close="closeWeatherPopup" />

	</div>
</template>

<script>
	import MyMap from './components/MyMap.vue';
	import WeatherPopup from './components/WeatherPopup.vue';

	export default {
		components: {
			MyMap,
			WeatherPopup
		},
		data() {
			return {
				showPopup: false,
				selectedCity: null
			};
		},
		mouend() {

		},
		methods: {
			showWeather(city) {
				this.showPopup = true;

				this.$nextTick(() => {

					this.$refs.Popupref.fetchWeeklyWeather(city);

				})

			},
			closeWeatherPopup() {
				this.showPopup = false;
			}
		}
	};
</script>

<style>
	.map-container {
		height: 100%;

	}

	#app {

		background: #004096;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 10;
		overflow: auto;
	}
</style>
