<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
				// 当前设备是移动设备
				uni.redirectTo({
					url: '/pages/phone/phone'
				})
			} else {
				console.log('当前设备是pc')
				uni.redirectTo({
					url: '/pages/index/index'
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@font-face {
		font-family: 'Poppins';
		src: url('@/static/font/Poppins_Regular.ttf');
		font-display: swap;
	}
	@font-face {
		font-family: 'semibolditalic';
		src: url('@/static/font/mont-semibolditalic.ttf');
		font-display: swap;
	}
	
	/*每个页面公共css */
</style>