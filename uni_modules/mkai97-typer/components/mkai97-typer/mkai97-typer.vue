<template>
	<view v-if="contentList.length" class="content">
		<view v-if="!isRich">
			{{formatContent}} {{loading==1?" | ":loading==2?'/':loading==3?"\\":''}}
		</view>
		<rich-text style="white-space: pre-line;" v-if="isRich" :nodes="formatContent"></rich-text>

	</view>
</template>

<script>
	export default {
		props: {
			isRich: {
				type: Boolean,
				default: false
			},
			step: {
				default: 2,
				type: Number
			},
			speed: {
				default: 0.5,
				type: Number
			},
			content: {
				default: "",
				type: String
			}
		},
		watch: {
			content: {
				handler(val) {
					clearInterval(this.timer)
					this.contentList = []
					this.contentList = this.group(this.content, this.step)
					this.textIO()

				}
			}
		},
		data() {
			return {
				formatContent: "|",
				contentList: [],
				timer: null,
				loading: false
			}
		},
		created() {
			clearInterval(this.timer)
			this.contentList = []
			this.contentList = this.group(this.content, this.step)

			this.textIO()
		},
		methods: {
			textIO() {
				this.loading = 1
				var contentLen = this.contentList.length
				var i = 0
				this.timer = setInterval(() => {
					this.formatContent = this.contentList[i]
					this.loading = this.loading == 1 ? 2 : this.loading == 2 ? 3 : 1
					i++
					if (i == contentLen) {
						this.loading = false
						clearInterval(this.timer)

					}
				}, this.speed * 100)

			},
			// 字符串分组方法
			group(ss, step = 2) {
				var r = [];
				var i = 0;

				function doGroup(s) {
					r.push(s.substring(0, i));
					s = ss;
					i = i + step;
					if (r.length && ss.length <= r[r.length - 1].length) return;
					doGroup(s);
				}
				doGroup(ss);
				return r;
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>