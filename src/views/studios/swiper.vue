<template>
	<div class="swiper-container">
	           <div class="swiper-wrapper">
	               <slot></slot>
	           </div>
	           <!-- 如果需要分页器 -->
	           <!-- <div class="swiper-pagination"></div> -->
	           
	</div>
</template>

<script type="text/javascript">
	import Swiper from 'swiper' //swiper .js
	import 'swiper/dist/css/swiper.css'// swiper.css
	export default {

		mounted(){
			// 监听事件
			var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 50,
		centeredSlides: true,
		slideToClickedSlide: true,
      pagination: {
        el: '.swiper-pagination',
				clickable: true,
      },
    });
		},
	}
</script>

<style lang="scss" scoped>
	.swiper-wrapper{
		img {
			width: 100%;
		}
	}
</style>