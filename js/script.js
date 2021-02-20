new Vue({
  el:'#root',
  data:{
    arrayCarousel: [
      'img/imgCarousel/1.jpg',
      'img/imgCarousel/2.jpg',
      'img/imgCarousel/3.jpg',
      'img/imgCarousel/4.jpg',
      'img/imgCarousel/5.jpg',
      'img/imgCarousel/6.jpg',
    ],
    car0: 0,
    car1: 1,
    car2: 2,

  },
  methods:{
    sliderNext: function(){
      if (this.arrayCarousel.length - 1 > this.car2) {
       this.car0 = this.car0 + 1;
       this.car1 = this.car1 + 1;
       this.car2 = this.car2 + 1;
       console.log(this.arrayCarousel.length);
       console.log(this.car2)
      }
    },
    sliderPrev: function(){
      if (this.car2 > 2) {
       this.car0 = this.car0 - 1;
       this.car1 = this.car1 - 1;
       this.car2 = this.car2 - 1;
       console.log(this.arrayCarousel.length);
       console.log(this.car2)
      }
    }
  }
})
Vue.config.devtools = true;
