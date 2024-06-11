<template>
	<view>
		<web-view src="../../static/Whitepaper_EN.pdf"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				locale:uni.getStorageSync('KIPROlocale') || 'Korea'
			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
