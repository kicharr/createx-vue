<template>
  <swiper
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <swiper-slide>
      <img class="slider-item__image" src="../../assets/images/bg-slider-image.jpg" alt="Slider Image">
    </swiper-slide>
    <swiper-slide>
      <img class="slider-item__image" src="../../assets/images/bg-slider-image.jpg" alt="Slider Image">
    </swiper-slide>
    <swiper-slide>
      <img class="slider-item__image" src="../../assets/images/bg-slider-image.jpg" alt="Slider Image">
    </swiper-slide>
    <swiper-slide>
      <img class="slider-item__image" src="../../assets/images/bg-slider-image.jpg" alt="Slider Image">
    </swiper-slide>
    <swiper-slide>
      <img class="slider-item__image" src="../../assets/images/bg-slider-image.jpg" alt="Slider Image">
    </swiper-slide>
    <swiper-slide>
      <img class="slider-item__image" src="../../assets/images/bg-slider-image.jpg" alt="Slider Image">
    </swiper-slide>
    <swiper-slide>
      <img class="slider-item__image" src="../../assets/images/bg-slider-image.jpg" alt="Slider Image">
    </swiper-slide>
    <swiper-slide>
      <img class="slider-item__image" src="../../assets/images/bg-slider-image.jpg" alt="Slider Image">
    </swiper-slide>
    <swiper-slide>
      <img class="slider-item__image" src="../../assets/images/bg-slider-image.jpg" alt="Slider Image">
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Keyboard, Navigation} from "swiper/modules";
// Import Swiper styles
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      imagesUrl: 'https://res.cloudinary.com/dui2dgzj2/image/upload/v1689707210/bg-slider-image_iqrmp7.jpg'
    }
  },
  methods: {
    doResponce() {
      let responce = fetch(this.imagesUrl);
      console.log(responce)
    }

  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Keyboard, Navigation],
    };
  },
};
</script>

<style scoped>
.slider-item__image {
  max-width: 100%;
  flex: 0;
  width: 100%;
  height: 988px;
}
</style>