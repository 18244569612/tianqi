<template>
	<div ref="mapContainer" id="mapContainer" style="width: 100%; height: 100%;"></div>
</template>

<script>
	import axios from 'axios';
	import chinamap from '../json/china.json';
	export default {
		data() {
			return {
				myChart: null,
				mapData: chinamap,
			};
		},
		created() {
			//	this.fetchMapData();
		},
		mounted() {
			this.myChart = this.$echarts.init(this.$refs.mapContainer);
			this.init();
		},
		methods: {
			init() {


				this.$echarts.registerMap("china", chinamap);

				var option = {

					geo: {
						show: true,
						map: "china",
						roam: true,
						zoom: 1,
						center: [113.83531246, 34.0267395887],
						label: {
							emphasis: {
								show: false,
							},
							normal: {
								color: "#FFF",
								show: true, //显示省份名称
							},
						},
						itemStyle: {
							normal: {
								borderColor: "rgba(147, 235, 248, 1)",
								borderWidth: 1,
								areaColor: {
									type: "radial",
									x: 0.5,
									y: 0.5,
									r: 0.8,
									colorStops: [{
											offset: 0,
											color: "rgba(147, 235, 248, 0)",
										},
										{
											offset: 1,
											color: "rgba(147, 235, 248, .2)",
										},
									],
									globalCoord: false,
								},
								shadowColor: "rgba(128, 217, 248, 1)",
								// shadowColor: 'rgba(255, 255, 255, 1)',
								shadowOffsetX: -2,
								shadowOffsetY: 2,
								shadowBlur: 10,
							},
							emphasis: {
								areaColor: "#389BB7",
								borderWidth: 0,
							},
						},
					},
					series: {
						type: 'map',
						map: 'mapContainer',
						roam: true, // 禁用缩放和平移
						scaleLimit: { // 限制缩放比例

						},
						label: {
							show: true, // 显示城市名称
						},
					

					}

				};

				// 显示地图
				this.myChart.setOption(option);



				this.myChart.on('click', params => {
					const cityid = this.getProvinceId(params.name)

					const cityName = params.name; // 获取点击的城市名称

					this.$emit('city-click', {
						name: cityName,
						cityid: cityid.id
					});
				});
			},


			getProvinceId(provinceName) {
				console.log(this.mapData)
				if (!this.mapData) return null;
				const province = this.mapData.features.find(feature => feature.properties.name === provinceName);

				if (province) {
					return province; // 返回省份的 ID
				} else {
					console.warn(`Province '${provinceName}' not found in map data.`);
					return null;
				}
			}
		}
	};
</script>

</style>
