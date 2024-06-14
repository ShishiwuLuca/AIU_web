<template>
	<view class="content">
		<view class="header" :class="bannerNav?'header-active':''">
			<view class="detail">
				<image class="logo" src="../../static/page/navlogo.png" mode="heightFix"></image>
				<view class="right">
					<view class="item" v-for="(item,index) in navList" :key="index" @click="selectActiveEvt(item)">
						{{item}}
					</view>
					<view class="btn" @click="token?goH5('http://clarifai.trade/member'):goH5('http://clarifai.trade/member/#/pages/login/login?type=register')">
						Login/Register
					</view>
				</view>
			</view>
		</view>
		<view class="banner" id="ClarifAI Trade">
			<image class="bag" src="../../static/page/banner-bag2.png"></image>
			<view class="top">
				<view class="left">
					<view class="tit">
						Unlock Potential<br>
						<text class="text">Unleash Profit</text>
					</view>
					<view class="txt">
						ClarifAI Trade provides solutions for top-tier financial achievement. Our cutting-edge
						AI-powered market analysis and strategic foresight position you well ahead of market trends,
						ensuring superior investment choices.
					</view>
					<view class="btn" @click="token?goH5('http://clarifai.trade/member'):goH5('http://clarifai.trade/member/#/pages/login/login?type=register')">Join Us
					</view>
				</view>
				<image class="right" src="../../static/page/banner-image.png"></image>
			</view>
			<view class="detail">
				<image class="left" src="../../static/page/banner-item-icon1.png"></image>
				<image class="right" src="../../static/page/banner-item-icon2.png"></image>
				<view class="item">
					<view class="info">
						<view class="tit">Cultivate <br>Consistent Returns</view>
						<view class="txt">
							Opt for ClarifAI Trade to harness the power of steady financial growth. Our robust
							investment framework is designed to thrive in the fluctuating cryptocurrency market, giving
							you the foundation to build a resilient future.
						</view>
					</view>
					<image class="image" src="../../static/page/banner-item-image1.jpg" mode="aspectFill"></image>
					<image class="line" src="../../static/page/banner-item-line.png"></image>
				</view>
				<view class="item">
					<image class="image" src="../../static/page/banner-item-image2.jpg" mode="aspectFill"></image>
					<view class="info">
						<view class="tit">Dominate <br>The Digital Asset Sphere</view>
						<view class="txt">
							Navigate the digital asset landscape with prowess through ClarifAI Trade. Our sophisticated
							data-driven insights equip you to master the intricacies of cryptocurrency investment,
							catering to both beginners and seasoned traders.
						</view>
					</view>
					<image class="line" src="../../static/page/banner-item-line.png"></image>
				</view>
				<view class="item">
					<view class="info">
						<view class="tit">Precision <br>At the Core of Investment</view>
						<view class="txt">
							At ClarifAI Trade, every investment move is calibrated for precision. Our AI analytical
							prowess ensures informed, effective decisions that bolster your confidence in diverse market
							scenarios.
						</view>
					</view>
					<image class="image" src="../../static/page/banner-item-image3.jpg" mode="aspectFill"></image>
					<image class="line" src="../../static/page/banner-item-line.png"></image>
				</view>
			</view>
		</view>
		<view class="Compute">
			<view class="detail">
				<view class="tit"> <text style="color: #FFFFFF;">ClarifAI Trade</text><br>Trading Crypto Futures Today
				</view>
				<view class="right">
					<view class="txt">
						Welcome to ClarifAI Trade, a visionary venture capital firm dedicated to transforming the
						landscape of cryptocurrency trading. Established in the strategically positioned Seychelles,
						ClarifAI Trade is registered and regulated by the Seychelles Financial Services Authority (FSA),
						ensuring compliance with the highest standards of financial operations.
						<br><br>
						At ClarifAI Trade, we specialize in identifying and nurturing innovative blockchain technologies
						that promise to revolutionize the financial markets. Our flagship service provider, AIMM—a
						leading predictive technology firm—has enabled us to offer the groundbreaking analytics for
						cryptocurrency trading, boasting remarkable accuracy, designed to democratize advanced trading
						analytics and empower traders at all levels.
					</view>
				</view>
			</view>
		</view>
		<view class="ease">
			<!-- <view class="title">Innovation</view> -->
			<view class="detail">
				<view class="item">
					<image class="icon" src="../../static/page/ease-item-icon1.png"></image>
					<view class="tit"><text class="text">Bridging Traditional Finance and Cryptocurrency </text></view>
					<view class="txt">
						Navigate the complexities of digital currencies with confidence and expertise. Our approach
						combines the wisdom of traditional investment strategies with the innovative potential of
						blockchain technology.
					</view>
				</view>
				<view class="item">
					<image class="icon" src="../../static/page/ease-item-icon2.png"></image>
					<view class="tit"><text class="text">Mastery of Cryptocurrency </text></view>
					<view class="txt">
						At ClarifAI Trade, understanding blockchain technology is the sheer basic. We provide clarity in
						a market often clouded by uncertainty, leveraging our comprehensive knowledge to demystify
						cryptocurrency.
					</view>
				</view>
				<view class="item">
					<image class="icon" src="../../static/page/ease-item-icon3.png"></image>
					<view class="tit"><text class="text">Empowering Investors </text></view>
					<view class="txt">
						With our resources, insights, and technology, you are well-equipped to take advantage of the
						opportunities that the crypto market presents, regardless of its ups and downs.
					</view>
				</view>
				<view class="item">
					<image class="icon" src="../../static/page/ease-item-icon4.png"></image>
					<view class="tit"><text class="text">A Commitment to Excellence </text></view>
					<view class="txt">
						ClarifAI Trade promotes long-term growth and stability. We safeguard interests while maximizing
						returns, embodying the principles of risk management and responsible investing.
					</view>
				</view>
				<view class="item">
					<image class="icon" src="../../static/page/ease-item-icon5.png"></image>
					<view class="tit"><text class="text">Nurturing Tech Powerhouses </text></view>
					<view class="txt">
						Dedicated to expanding the horizon of blockchain technology. By identifying and investing in
						potential tech groups, we empower innovative minds to transform ideas into reality, fostering a
						new generation of blockchain pioneers.
					</view>
				</view>
				<view class="item">
					<image class="icon" src="../../static/page/ease-item-icon6.png"></image>
					<view class="tit"><text class="text">Pioneering Future Applications</text></view>
					<view class="txt">
						Our commitment to blockchain innovation extends beyond the present. ClarifAI Trade envisions a
						future where blockchain technology revolutionizes industries that redefine the way we live and
						work.
					</view>
				</view>
			</view>
		</view>
		<view class="Founder">
			<!-- <view class="title">The Founder</view> -->
			<view class="detail">
				<view class="left">
					<image class="avater" src="../../static/partners/avater3.png"></image>
					<view class="name">
						Cyril Mickelson (CEO)</view>
				</view>
				<view class="right">
					<view class="tit">
						Meet the Visionary
						<text class="text"> Driving Force behind ClarifAI Trade</text>
					</view>

					<view class="txt">
						Cyril pursued his Master of Science in Cryptography and Information Security from the
						prestigious
						Stanford College, deepening his expertise in blockchain technology and cryptography.
						<br><br>
						Established his distinguished career as a blockchain development expert, he leverages over a
						decade
						of experience in the field. His journey began as a software engineer at a leading tech company,
						where he honed his skills in software development and system architecture.
						<br><br>
						Transitioning into blockchain technology, Cyril emerged as a visionary leader, co-founding
						several
						tech startups focused on blockchain innovation. His ventures span decentralized applications,
						smart
						contract auditing, and blockchain consulting, establishing him as a prominent figure in the
						industry.
						<br><br>
						Cyril’s expertise extends to cryptocurrency analysis, where he has demonstrated a keen
						understanding
						of market trends and investment strategies, contributing to his success as a tech entrepreneur.
					</view>
				</view>

			</view>
		</view>

		<view class="Inception" id="The Inception">
			<view class="title">The Inception</view>
			<view class="Background ">
				<view class="left">
					<view class="tit">
						One market dip is enough<br>
						to wipe out all we have on hands.
					</view>
					<view class="txt">
						“I have experienced many rounds of market dips.<br>
						I understand how hard it is to suffer from losing everything in the market<br>
						and how lonely it is to endure the market correction<br>
						as a retailer without anywhere to turn.<br>
						But with AIMM, the situation has changed and you are alone no more.”<br>
					</view>
					<view class="tips">
						– Cyril Mickelson, The Founder of ClarifAI Trade.
					</view>
				</view>
				<view class="right">
					<text class="text">
						Pioneering Blockchain Investment
					</text>
					<br><br>
					ClarifAI Trade’s ambition is grand yet clear: to become the Berkshire Hathaway of the blockchain
					industry. Our mission is to seamlessly bridge the worlds of traditional finance and digital
					currency, creating a synergy that empowers all levels of traders and investors.
					<br><br>
					We envision a future where the complexity of cryptocurrency is unraveled, making it accessible and
					understandable for everyone from beginners to seasoned market players.
				</view>
			</view>
			<view class="grid">
				<view class="Initiative">
					<view style="color: #FFFFFF;font-size: 40px;">Founding Initiative
					</view><br><br>

					In turmoil, we hold a steadfast belief in investment;
					in waves, we embrace the meaning of adventure.<br><br>

					The founding story of ClarifAI Trade, led by Cyril Mickelson, resonates deeply with the everyday
					cryptocurrency trader, many of whom have navigated similar tumultuous waters.<br><br>

					<text style="color: #BDFF29;">Belief amidst Turbulence: The Journey of Genesis</text><br><br>

					It all began with Cyril’s early exploration of Bitcoin investment back in 2017. Fueled by the
					excitement
					of the burgeoning market, Cyril dove in headfirst, believing in the transformative power of
					decentralized currencies.<br><br>

					However, his journey was fraught with challenges. As the market experienced its first major
					correction,
					Cyril made the cautious decision to lock in profits, missing out on the meteoric rise that followed.
					Despite this setback, Cyril remained steadfast in his belief in the potential of blockchain
					technology.<br><br>

					<text style="color: #BDFF29;">Rediscovery and Renewed Faith </text><br><br>

					In 2021, the cryptocurrency market had evolved significantly, and Cyril’s early experiences had
					honed
					his understanding of its dynamics. Recognizing the need for reliable predictive tools in the
					ever-shifting market, Cyril set out to find a solution that would empower investors like
					himself.<br>
				</view>
				<view class="Initiative Initiative2">
					<view style="color: #FFFFFF;font-size: 40px;">Brainchild: AIMM</view><br><br>

					Ignited by a growing passion and a determined vision, Cyril embarked on a mission to navigate the
					volatile crypto landscape with newfound determination. His search led him to AIMM, a pioneering
					blockchain predictive tech company at the cutting edge of cryptocurrency analysis.<br><br>

					<text style="color: #BDFF29;">The Incubation of AIMM</text><br><br>

					Impressed by AIMM’s innovative tool boasting an impressive 98% accuracy in predicting the price
					movements of Bitcoin and Ethereum, Cyril saw an opportunity to not only enhance his own trading
					strategies but also to democratize access to this invaluable resource.<br><br>

					<text style="color: #BDFF29;">Venture Capital</text><br><br>

					In a bold move, Cyril, together with the AIMM tech engineers, founded ClarifAI Trade, a venture
					capital
					firm dedicated to maximizing AIMM’s potential and making its predictive tool available to the public
					on
					a subscription basis.<br><br>

					<text style="color: #BDFF29;">Democratizing Access to Predictive Technology</text><br><br>

					Driven by his own experiences of triumph and tribulation in the crypto market, Cyril Mickelson
					forged a
					path towards a brighter future for cryptocurrency investors everywhere, leaving behind a legacy of
					innovation and empowerment.<br><br>

					Through the advanced predictive tool by AIMM, ClarifAI Trade aimed to level the playing field,
					empowering individuals to make informed decisions and seize opportunities in the dynamic world of
					digital assets.<br><br>
				</view>
			</view>


		</view>

		<view class="Blueprint" id="The Blueprint">
			<view class="title">The Blueprint</view>
			<view class="txt" style="font-size: 20px; color: #FFFFFF;">How AIMM Works</view>
			<view class="txt">
				Penetrating the unpredictable environment post-Bitcoin Halving is challenging, but not so to the
				Artificial Intelligence Market Modelling (AIMM), a cutting-edge model based on the Efficient Market
				Hypothesis (EMH) designed to transform investment strategies in the volatile cryptocurrency market.
			</view>
			<view class="and">
				<image class="left" src="../../static/page/and-image.jpg">
				</image>
				<view class="right">

					<view class="item">
						<image class="icon" src="../../static/page/and-icon1.png"></image>
						<view class="info">
							<view class="desc" style="color: #BDFF29;">DePIN</view>
							<view class="name">Unleashing the Power of LSTM and GPU Acceleration</view>
							<view class="desc">
								AIMM incorporates Long Short-term Memory (LSTM) grid within a GPU-accelerated framework
								on Decentralized Physical Infrastructure Network (DePIN), achieving a groundbreaking 98%
								accuracy in predicting cryptocurrency price movements that allows fast and precise
								forecasts.
							</view>
						</view>
					</view>
					<view class="item">
						<image class="icon" src="../../static/page/and-icon2.png"></image>
						<view class="info">
							<view class="desc" style="color: #BDFF29;">Meta Model</view>
							<view class="name">The Analytical Core</view>
							<view class="desc">
								At the heart of AIMM is the Meta Model, which integrates Neural Prophets’ real-time
								processing with the robust analysis of Random Forest algorithms. This core is not just a
								showcase of AIMM’s computational prowess but also a source of reliable, detailed market
								insights for investors.
							</view>
						</view>
					</view>
					<view class="item">
						<image class="icon" src="../../static/page/and-icon3.png"></image>
						<view class="info">
							<view class="desc" style="color: #BDFF29;">The New Standard</view>
							<view class="name">Cryptographic Progressive Calculator</view>
							<view class="desc">
								AIMM’s uniqueness is further underscored by its Cryptographic Progressive Calculator
								(CPC), which revolutionizes data analysis in cryptocurrency. Using advanced
								cryptographic techniques, the CPC processes a wide range of blockchain-specific data,
								ensuring predictions are comprehensive and grounded in a holistic market view.
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="Technology">
				<view class="tit">AIMM Technology Integration and Computational Process</view>
				<view class="grid">
					<view class="item">
						<view class="name">Product</view>
						<view class="desc">AIMM Artificial Intelligence Market Modeling <br>Operating EMH Efficient
							Market Hypothesis</view>
					</view>
					<view class="item">
						<view class="name">Hardware Infrastructure</view>
						<view class="desc">Massive GPU Network</view>
					</view>
					<view class="item">
						<view class="name">Software Loader</view>
						<view class="desc">Independent Isolated Models <br> Stacked Model</view>
					</view>
					<view class="item">
						<view class="name">Memory</view>
						<view class="desc">LSTM Long Short-Term Memory</view>
					</view>
					<view class="item">
						<view class="name">Analytics</view>
						<view class="desc">Random Forests</view>
					</view>
					<view class="item">
						<view class="name">Calculation</view>
						<view class="desc">CPC Cryptographic Progressive Calculator</view>
					</view>
					<view class="item">
						<view class="name">Prediction</view>
						<view class="desc">Neural Prophet</view>
					</view>
				</view>
			</view>


			<view class="title" style="margin: 0;">Services</view>
			<view class="Services">
				<view class="detail">
					<image class="icon" src="../../static/page/left.png" mode="widthFix"
						@click="current==0?current = 2:current--">
					</image>
					<swiper class="swiper" :current="current" circular>
						<swiper-item class="swiper-item">
							<view class="tit">Incubation Coaching</view>
							<view class="txt">
								At ClarifAI Trade, we are dedicated to bolstering startups and small businesses through
								our venture capital arm. We provide essential funding, resources, and expertise to help
								emerging companies thrive and reach their aspirations.
								<br><br>
								Startups and small businesses fuel economic growth and innovation, and we are committed
								to their success. Beyond financial support, ClarifAI Trade offers strategic guidance and
								mentorship. Our venture capital funding targets early-stage companies poised to disrupt
								industries and forge new markets.
							</view>
						</swiper-item>
						<swiper-item class="swiper-item">
							<view class="tit">Quantitative Trading</view>
							<view class="txt">
								ClarifAI Trade generates revenue by managing subsidiaries and reinvesting earnings into
								quantitative DeFi trading. Leveraging industry expertise and advanced technology, we
								deliver outstanding results.
								<br><br>
								Our committed team offers comprehensive financial management solutions, helping clients
								grow their capital and meet their financial goals. As DeFi experts backed by AIMM
								innovation, ClarifAI Trade is your reliable partner for superior results and financial
								success in navigating financial complexities.
							</view>
						</swiper-item>
						<swiper-item class="swiper-item">
							<view class="tit">Market-Making</view>
							<view class="txt">
								ClarifAI Trade excels in cryptocurrency market-making with the advanced AIMM predictive
								tool. Our technology innovation allows us to analyze and predict market trends
								accurately, improving our trading strategies.
								<br><br>
								Using AIMM’s real-time analytics, ClarifAI Trade offers competitive pricing and
								maintains strong market liquidity. Leveraging predictive technology, we manage risks and
								seizes trading opportunities effectively in the dynamic world of cryptocurrency trading.
							</view>
						</swiper-item>
					</swiper>
					<image class="icon" src="../../static/page/right.png" mode="widthFix"
						@click="current==2?current = 0:current++">
					</image>
				</view>
			</view>

			<view class="Map">
				<view class="title" style="margin: 40px 0 ;">Glistening Milestones Ahead</view>
				<view class="txt">
					Our roadmap aims to fortify ClarifAI Trade’s technological base, expand our market presence, improve
					user experience, and ensure scalability for future growth. Each phase builds on the previous one to
					ensure continuous development and alignment with market demands and technological advancements.
				</view>
				<view class="detail">
					<view class="item">
						<view class="name">Phase <text class="text">Amaretti</text>: Strengthen Core Technology</view>
						<view class="desc">
							<text class="text">Upgrade AI Models</text>
							Enhance the existing LSTM, Neural Prophet, and Random Forest models to improve prediction
							accuracy and efficiency.
						</view>
						<view class="desc"><text class="text">Data Acquisition</text>
							Invest in acquiring diverse datasets to refine model training and broaden the range of
							market scenarios AIMM can handle.</view>

						<view class="desc"><text class="text">Security Enhancements</text>
							Implement advanced security measures to protect sensitive financial data and trading
							strategies.
						</view>
					</view>
					<view class="item">
						<view class="name">Phase <text class="text">Baklava</text>: Market Expansion and Partnerships
						</view>
						<view class="desc">
							<text class="text">Brokerage Partnerships</text>
							Establish partnerships with additional crypto exchanges and traditional brokers to widen
							market access.
						</view>
						<view class="desc">
							<text class="text">Customer Onboarding</text>
							Develop a streamlined onboarding process for new users, focusing on educational resources
							about using AIMM effectively.
						</view>
						<view class="desc">
							<text class="text">Regulatory Compliance</text>
							Ensure compliance with financial regulations in new markets, especially focusing on the EU
							and Asia.
						</view>
					</view>
					<view class="item">
						<view class="name">Phase <text class="text">Cupcake</text>: Product Development</view>
						<view class="desc">
							<text class="text">User Interface (UI) Improvements</text>
							Redesign the user interface for better usability based on user feedback.
						</view>
						<view class="desc">
							<text class="text">Customization Features</text>
							Introduce features that allow users to customize the AI’s trading parameters according to
							individual risk appetites and goals.
						</view>
						<view class="desc">
							<text class="text">Beta Testing New Features</text>
							Launch beta versions of new features to gather user feedback before full release.
						</view>
					</view>
					<view class="item">
						<view class="name">Phase <text class="text">Donut</text>: Branding and Scaling</view>
						<view class="desc">
							<text class="text">Brand Awareness Campaigns</text>
							Execute targeted marketing campaigns to raise awareness of AIMM and its benefits
							among potential clients.
						</view>
						<view class="desc">
							<text class="text">Scaling Infrastructure</text>
							Upgrade infrastructure to handle increased user loads and data throughput.
						</view>
						<view class="desc">
							<text class="text">Customer Support Expansion</text>
							Expand the customer support team to ensure high service levels as user base grows.
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="Synergy" id="The Synergy">
			<view class="title">The Synergy</view>
			<view class="item">
				<view class="left">
					<view class="tit">Strategic Stakeholders <br><text class="text">And Sustainable Development</text>
					</view>
					<view class="txt">
						After discovering AIMM, Cyril along with the original AIMM engineering team,
						formed ClarifAI Trade. Cyril and a group of investors allocated initial funds into the venture,
						making AIMM the technology development department of ClarifAI Trade.
						<br><br>
						Investing in AIMM also serves as a talent retention strategy, integrating AIMM’s team into
						ClarifAI Trade’s R&D department. This ensures ongoing innovation and sustainable growth in the
						blockchain industry.
					</view>
				</view>
				<view class="right">
					<image class="image" src="../../static/page/technical-image1.jpg" mode="widthFix"></image>
				</view>
			</view>
			<view class="item">
				<view class="right">
					<image class="image" src="../../static/page/technical-image2.jpg" mode="widthFix"></image>
				</view>
				<view class="left">
					<view class="tit">Venture Capitalists <br><text class="text">And Institutional Investors</text>
					</view>
					<view class="txt">
						A significant portion of ClarifAI Trade’s funding comes from angel investors who specialize in
						technology and financial services. These investors are attracted by ClarifAI Trade’s innovative
						approach to blockchain applications and its potential for high returns.
					</view>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<view class="tit">Joint Ventures <br><text class="text">In Research and Development</text>
					</view>
					<view class="txt">
						ClarifAI Trade places a strong emphasis on building and maintaining strategic partnerships that
						enhance its business capabilities and extend its market reach.
						<br><br>
						These partnerships are integral to ClarifAI Trade’s approach to innovating within the blockchain
						industry and beyond, facilitating a diverse range of collaborative opportunities that drive
						mutual growth and success.
					</view>
				</view>
				<view class="right">
					<image class="image" src="../../static/page/technical-image3.jpg" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="footer" id="Contacts">
			<view class="detail">
				<view class="left">
					<image class="logo" src="../../static/page/navlogo.png" mode="heightFix"></image>
					<view class="txt">Copyright © 2024 ClarifAI Trade. All rights reserved.</view>
				</view>
				<view class="right">
					<view class="item">
						<view class="tit">Social Media</view>
						<view class="icon">
							<image class="image" src="../../static/index/follow-logo1.png"
								@click="goH5('https://t.me/ClarifAI_Trade')"></image>
							<image class="image" src="../../static/index/follow-logo10.png"
								@click="goH5('https://twitter.com/ClarifAI_Trade')"></image>
							<image class="image" src="../../static/index/follow-logo8.png"
								@click="goH5('https://discord.gg/KzrfpHwG54')"></image>
							<image class="image" src="../../static/index/follow-logo9.png"
								@click="goH5('https://www.youtube.com/@ClarifAITrade')"></image>
							<image class="image" src="../../static/index/follow-logo2.png"
								@click="goH5('https://www.tiktok.com/@clarifai_trade')"></image>
							<image class="image" src="../../static/index/follow-logo7.png"
								@click="goH5('https://www.instagram.com/clarifai.trade/')"></image>
							<image class="image" src="../../static/index/follow-logo5.png"
								@click="goH5('https://www.facebook.com/ClarifAI.Trading/')"></image>
							<image class="image" src="../../static/index/follow-logo11.png"
								@click="goH5('https://medium.com/@ClarifAI_Trade')"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import '../../util/rem.js'
	export default {
		data() {
			return {
				navIndex: 0,
				navList: ['ClarifAI Trade', 'The Inception', 'The Blueprint', 'The Synergy', 'Contacts'],
				bannerNav: false,
				current: 0,
				token:uni.getStorageSync('AIUToken')
			}
		},
		onLoad() {
			this.token = uni.getStorageSync('AIUToken')
			this.$nextTick(() => {
				this.$wow.init()
			})
		},
		methods: {
			// 左侧切换点击事件
			selectActiveEvt(index, block) {
				document.getElementById(index).scrollIntoView({
					block: block,
					behavior: 'smooth',
				})
			},
			goWhitePaper() {
				uni.navigateTo({
					url: '/pages/webview/webview'
				})
			},
			goH5(url) {
				if (url) {
					window.open(url)
				}
			},
		},
		onPageScroll(e) {
			/* let query = uni.createSelectorQuery().in(this);
			//需要给黄色区域设置一个id标识，在这里是demo
			query.select('#banner-nav').boundingClientRect(data => {
				console.log(data.top) //这个就是距离顶部的高度
				this.bannerNav = data.top<80?true:false
			}).exec(); */
			this.bannerNav = e.scrollTop > 0 ? true : false
		}
	}
</script>
<style lang="scss" scoped>
	@import '../common.css';

	.content {
		.header {
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			transition: all 0.4s;
			background: #202126;
			box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.5);

			.detail {
				width: 1440px;
				margin: 0 auto;
				height: 80px;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.logo {
					width: 44px;
					height: 44px;
				}

				.right {
					display: flex;
					align-items: center;

					.item {
						font-family: Poppins;
						font-weight: 500;
						font-size: 16px;
						color: #FFFFFF60;
						line-height: 20px;
						text-align: left;
						font-style: normal;
						margin: 0 24px;
						cursor: pointer;
					}

					.item:hover {
						color: #BDFF29;
					}

					.btn {
						margin-left: 24px;
						width: 160px;
						height: 42px;
						border-radius: 23px;
						border: 1px solid #BDFF29;
						font-weight: 600;
						font-size: 16px;
						color: #BDFF29;
						line-height: 42px;
						text-align: center;
						font-style: normal;
						cursor: pointer;
					}

					.btn:hover {
						background-color: #BDFF29;
						color: #000000;
					}
				}
			}
		}

		.banner {
			width: 100%;
			background: url(@/static/page/banner-bag.png);
			background-size: cover;
			background-position: center;
			margin-top: 80px;
			padding: 256px 0 128px 0;
			position: relative;
			overflow: hidden;

			.bag {
				position: absolute;
				width: 1578px;
				height: 1542px;
				top: -267px;
				right: -165px;
				animation: rotate2 15s infinite linear;

				@keyframes rotate2 {
					100% {
						transform: rotate(-360deg);
					}
				}
			}

			.top {
				display: flex;
				width: 1440px;
				margin: 0 auto;

				.left {
					width: 688px;

					.tit {
						font-family: Poppins;
						font-weight: bold;
						font-size: 56px;
						color: #FFFFFF;
						line-height: 74px;
						text-align: left;
						font-style: normal;

						.text {
							color: #BDFF29;
						}
					}

					.txt {
						font-family: Poppins;
						font-weight: 400;
						font-size: 20px;
						color: #808080;
						line-height: 30px;
						text-align: left;
						font-style: normal;
						margin: 36px 0 86px 0;
					}

					.btn {
						width: 178px;
						height: 56px;
						background: #BDFF29;
						border-radius: 8px;
						font-family: Poppins;
						font-weight: bold;
						font-size: 18px;
						color: #000000;
						line-height: 56px;
						text-align: center;
						font-style: normal;
						cursor: pointer;
					}

					.btn:hover {
						background: #88dd00;
					}
				}

				.right {
					width: 471px;
					height: 478px;
					margin: 12px 0 0 120px;
					animation: rotate 10s infinite linear;

					@keyframes rotate {
						100% {
							transform: rotate(360deg);
						}
					}
				}

				margin-bottom: 200px;
			}

			.detail {
				width: 1440px;
				display: flex;
				justify-content: space-between;
				position: relative;
				margin: 0 auto;

				.left {
					position: absolute;
					width: 162px;
					height: 162px;
					left: 0;
					top: 0;
				}

				.right {
					position: absolute;
					width: 162px;
					height: 162px;
					right: 0;
					top: 0;
				}

				.item {
					width: 428px;
					height: 820px;
					display: flex;
					flex-direction: column;
					position: relative;

					.line {
						position: absolute;
						width: 2px;
						height: 522px;
					}

					.info {
						flex: 1;
						display: flex;
						flex-direction: column;
						// align-items: center;
						justify-content: center;
						padding-left: 20px;

						.tit {
							font-family: Poppins;
							font-weight: bold;
							font-size: 36px;
							color: #FFFFFF;
							line-height: 48px;
							font-style: normal;
							margin-bottom: 24px;
						}

						.txt {
							font-family: Poppins;
							font-weight: 600;
							font-size: 16px;
							color: #808080;
							line-height: 20px;
							text-align: left;
							font-style: normal;
						}
					}

					.image {
						width: 428px;
						height: 428px;
					}
				}

				.item:nth-child(3) {
					.line {
						bottom: 0;
						right: -18px;
					}
				}

				.item:nth-child(4) {
					.line {
						top: 0;
						right: -18px;
					}
				}

				.item:nth-child(5) {
					margin-right: 18px;

					.line {
						bottom: 0;
						right: -18px;
					}
				}
			}
		}

		.title {
			font-family: Poppins;
			font-weight: bold;
			font-size: 56px;
			color: #BDFF29;
			line-height: 74px;
			text-align: center;
			font-style: normal;
			margin-bottom: 80px;
		}

		.Compute {
			width: 100%;
			background: url(@/static/page/compute-bag.png);
			background-size: cover;
			background-position: center;
			padding: 100px 0;

			.detail {
				width: 1440px;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.tit {
					width: 640px;
					font-family: Poppins;
					font-weight: bold;
					font-size: 56px;
					color: #BDFF29;
					line-height: 74px;
					text-align: left;
					font-style: normal;
				}

				.right {
					width: 640px;

					.txt {
						font-family: Poppins;
						font-weight: 600;
						font-size: 18px;
						color: #808080;
						line-height: 30px;
						text-align: left;
						font-style: normal;
						margin-bottom: 48px;
					}

					.btn {
						width: 178px;
						height: 56px;
						background: #BDFF29;
						border-radius: 8px;
						font-family: Poppins;
						font-weight: bold;
						font-size: 18px;
						color: #000000;
						line-height: 56px;
						text-align: center;
						font-style: normal;
						cursor: pointer;
					}

					.btn:hover {
						background: #02D371;
					}
				}
			}

		}


		.ease {
			width: 100%;
			background: url(@/static/page/ease-bag.png) no-repeat;
			background-size: 100% 940px;
			background-position: center;
			position: relative;
			overflow: hidden;
			padding: 100px 0;

			.bag {
				position: absolute;
				width: 1578px;
				height: 1542px;
				top: -244px;
				right: 172px;
				animation: rotate2 15s infinite linear;
				z-index: -1;

				@keyframes rotate2 {
					100% {
						transform: rotate(-360deg);
					}
				}
			}

			.detail {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: center;

				.item {
					width: 512px;
					height: 410px;
					padding: 50px 68px;
					background: url(@/static/page/ease-item1.png);
					background-size: 100% 100%;

					.icon {
						width: 72px;
						height: 72px;

					}

					.tit {
						font-family: Poppins;
						font-weight: bold;
						font-size: 24px;
						color: #FFFFFF;
						line-height: 32px;
						text-align: left;
						font-style: normal;
						margin: 20px 0;

						.text {
							color: #BDFF29;
						}
					}

					.txt {
						font-family: Poppins;
						font-weight: 600;
						font-size: 14px;
						color: #808080;
						line-height: 22px;
						text-align: left;
						font-style: normal;
					}
				}

				.item:nth-child(2) {
					background: url(@/static/page/ease-item2.png);
					background-size: 100% 100%;
				}

				.item:nth-child(3) {
					background: url(@/static/page/ease-item3.png);
					background-size: 100% 100%;
				}

				.item:nth-child(4) {
					background: url(@/static/page/ease-item4.png);
					background-size: 100% 100%;
				}

				.item:nth-child(5) {
					background: url(@/static/page/ease-item5.png);
					background-size: 100% 100%;
				}

				.item:nth-child(6) {
					background: url(@/static/page/ease-item6.png);
					background-size: 100% 100%;
				}
			}
		}


		.Founder {

			// padding: 50px 0;
			.detail {
				width: 1440px;
				margin: 0 auto;
				display: flex;
				align-items: center;

				.left {
					width: 400px;
					margin-right: 100px;

					.avater {
						width: 200px;
						height: 200px;
						display: block;
						margin: 0 auto;
					}
				}

				.right {
					flex: 1;
				}
			}

			.tit {
				font-family: Poppins;
				font-weight: bold;
				font-size: 40px;
				color: #FFFFFF;
				line-height: 74px;
				font-style: normal;
				display: flex;
				flex-direction: column;

				.text {
					color: #BDFF29;
				}
			}

			.name {
				font-family: Poppins;
				font-weight: bold;
				font-size: 40px;
				color: #FFFFFF;
				line-height: 74px;
				text-align: center;
				font-style: normal;
				margin-bottom: 48px;
			}

			.txt {
				margin: 0 auto;
				font-family: Poppins;
				font-weight: 600;
				font-size: 18px;
				color: #808080;
				line-height: 30px;
				font-style: normal;

			}
		}

		.Inception {
			padding: 128px 0;
			background-color: #151515;
			margin-top: 128px;

			.Background {
				width: 1440px;
				margin: 0 auto;
				/* display: flex;
				align-items: center;
				
				justify-content: space-between; */

				.left {
					text-align: center;

					.tit {
						font-family: Poppins;
						font-weight: bold;
						font-size: 40px;
						color: #FFFFFF;
						line-height: 60px;
						font-style: normal;
						display: flex;
						flex-direction: column;

						.text {
							color: #BDFF29;
						}
					}

					.txt {
						margin: 30px auto;
						font-family: semibolditalic;
						font-weight: 600;
						font-size: 20px;
						color: #808080;
						line-height: 30px;
						font-style: italic;
					}

					.tips {
						font-family: semibolditalic;
						font-weight: 600;
						font-size: 20px;
						color: #FFFFFF;
						line-height: 30px;
						font-style: italic;
					}
				}

				.right {
					margin-top: 40px;
					text-align: center;
					font-family: Poppins;
					font-weight: 400;
					font-size: 20px;
					color: #FFFFFF;
					line-height: 30px;
					font-style: normal;

					.text {
						color: #BDFF29;
					}
				}
			}

			.grid {
				display: flex;
				width: 1440px;
				margin: 128px auto;
				justify-content: space-between;
			}

			.Initiative {
				width: 700px;
				font-family: Poppins;
				font-weight: 600;
				font-size: 20px;
				color: #808080;
				text-align: left;
			}

			.Initiative2 {
				text-align: right;
			}
		}

		.Blueprint {
			padding: 128px 0;
			background: rgba(160, 197, 198, 0.08);

			.title {
				margin-bottom: 40px;
			}

			.txt {
				width: 900px;
				margin: 0 auto;
				font-weight: 400;
				font-size: 18px;
				color: #A1A1A1;
				line-height: 28px;
				text-align: center;
				font-style: normal;
				margin-bottom: 40px;
			}

			.Technology {
				padding: 100px 0;

				.tit {
					margin: 0 auto;
					width: 700px;
					font-weight: bold;
					font-size: 40px;
					color: #FFFFFF;
					line-height: 62px;
					text-align: center;
					font-style: normal;
					margin-bottom: 16px;
				}

				.grid {
					width: 1440px;
					margin: 0 auto;
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					justify-content: space-between;
				}

				.item {
					width: 700px;
					display: flex;
					align-items: center;
					margin: 20px auto;
					background-color: #151515;
					padding: 48px;
					border-radius: 10px;

					.name {
						width: 150px;
						font-weight: bold;
						font-size: 20px;
						color: #FFFFFF;
						line-height: 30px;
						text-align: left;
						font-style: normal;
						margin-right: 40px;
					}

					.desc {
						flex: 1;
						font-weight: 400;
						font-size: 18px;
						color: #A1A1A1;
						line-height: 28px;
						font-style: normal;
					}
				}
			}

			.and {
				display: flex;
				align-items: center;
				justify-content: center;

				.left {
					width: 624px;
					height: 792px;
					margin-right: 88px;
					border-radius: 20px;
				}

				.right {
					width: 728px;

					.tit {
						font-weight: bold;
						font-size: 40px;
						color: #FFFFFF;
						line-height: 62px;
						text-align: left;
						font-style: normal;
						margin-bottom: 16px;
					}

					.item {
						display: flex;
						margin-top: 56px;

						.icon {
							width: 82px;
							height: 82px;
							margin-right: 24px;
						}

						.name {
							width: 622px;
							font-weight: bold;
							font-size: 28px;
							color: #FFFFFF;
							line-height: 34px;
							text-align: left;
							font-style: normal;
							margin-bottom: 16px;
						}

						.desc {
							width: 622px;
							font-weight: 400;
							font-size: 18px;
							color: #A1A1A1;
							line-height: 28px;
							text-align: left;
							font-style: normal;
						}
					}
				}
			}

			.Services {
				.detail {
					display: flex;
					align-items: center;
					height: 430px;
					justify-content: center;
					margin: 50px 0;

					.icon {
						width: 50px;
						height: 50px;
						cursor: pointer;
					}

					.icon:hover {
						opacity: 0.8;
					}

					.swiper {
						width: 1200px;
						height: 400px;
						margin: 0 50px;

						.swiper-item {
							height: 400px;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							;
							background-color: #FBFAFE20;
							border-radius: 10px;

							.tit {
								font-family: Poppins;
								font-weight: bold;
								font-size: 30px;
								color: #BDFF29;
								line-height: 40px;
								text-align: right;
								font-style: normal;
								margin-bottom: 50px;
							}

							.txt {
								width: 1080px;
								font-family: Poppins;
								font-size: 18px;
								color: #FFFFFF;
								line-height: 34px;
								text-align: center;
								font-style: normal;

							}


						}
					}
				}
			}

			.Map {
				.detail {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					justify-content: center;

					.item {
						width: 696px;
						background: #FBFAFE20;
						border-radius: 12px;
						border: 1px solid #D5D5D520;
						padding: 48px;
						margin: 48px 24px 0 24px;

						.image {
							width: 100%;
							height: 280px;
							margin-bottom: 36px;
						}

						.name {
							font-family: Poppins;
							font-weight: bold;
							font-size: 24px;
							color: #FFFFFF;
							line-height: 32px;
							text-align: left;
							font-style: normal;
							margin-bottom: 18px;

							.text {
								color: #BDFF29;
								margin: 0 10px;
							}
						}

						.desc {
							font-family: Poppins;
							font-weight: 500;
							font-size: 14px;
							color: #A1A1A1;
							line-height: 24px;
							text-align: left;
							font-style: normal;
							margin-bottom: 20px;
							display: flex;
							flex-direction: column;
							position: relative;
							padding-left: 20px;

							.text {
								color: #BDFF29;
							}
						}

						.desc::after {
							position: absolute;
							content: '';
							width: 10px;
							height: 10px;
							border-radius: 50%;
							background-color: #BDFF29;
							left: 0;
							top: 8px;
						}
					}
				}
			}
		}

		.Synergy {
			padding: 128px 0;

			.item {
				display: flex;
				align-items: center;
				width: 1440px;
				margin: 180px auto;
				justify-content: space-between;

				.left {
					width: 700px;

					.tit {
						font-weight: bold;
						font-size: 40px;
						color: #FFFFFF;
						line-height: 62px;
						font-style: normal;
						margin-bottom: 16px;

						.text {
							color: #BDFF29;
						}
					}

					.txt {
						font-weight: 400;
						font-size: 18px;
						color: #A1A1A1;
						line-height: 28px;
						font-style: normal;
					}
				}

				.right {
					.image {
						width: 640px;
					}
				}
			}

			.item:nth-child(3) {
				.left {
					text-align: right;
				}
			}
		}

		.footer {
			padding: 48px 0;
			background: #000000;

			.detail {
				width: 1440px;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.left {
					.logo {
						width: 68px;
						height: 68px;
						margin-bottom: 40px;
					}

					.txt {
						font-family: Poppins;
						font-weight: 600;
						font-size: 14px;
						color: #A1A1A1;
						line-height: 20px;
						text-align: left;
						font-style: normal;
					}
				}

				.right {
					display: flex;

					.item {
						margin-left: 56px;

						.tit {
							font-family: Poppins;
							font-weight: bold;
							font-size: 16px;
							color: #FFFFFF;
							line-height: 20px;
							text-align: left;
							font-style: normal;
							margin-bottom: 24px;
						}

						.txt {
							font-family: Poppins;
							font-weight: 600;
							font-size: 14px;
							color: rgba(255, 255, 255, 0.5);
							line-height: 20px;
							text-align: left;
							font-style: normal;
							margin-bottom: 24px;
							cursor: pointer;
						}

						.txt:hover {
							color: #FFFFFF;
						}

						.icon {
							display: flex;

							.image {
								width: 28px;
								height: 28px;
								margin-right: 18px;
								cursor: pointer;
							}
						}
					}
				}
			}
		}
	}
</style>