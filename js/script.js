new Vue({
  el:'#root',
  data:{
    car0: 0,
    car1: 1,
    car2: 2,
    chatBox: false,
    sendMessage: '',
    arraySendMessage:[],
    navBarElement:[
      {
        page: 'HOME',
        link: '#',
      },
      {
        page: 'ABOUT',
        link: '#'
      },
      {
        page: 'PROJECTS',
        link: '#'
      },
      {
        page: 'SERVICES',
        link: '#'
      },
      {
        page: 'BLOG',
        link: '#'
      },
      {
        page: 'CONTACT',
        link: '#'
      },
    ],
    arrayCarousel: [
      'img/imgCarousel/1.jpg',
      'img/imgCarousel/2.jpg',
      'img/imgCarousel/3.jpg',
      'img/imgCarousel/4.jpg',
      'img/imgCarousel/5.jpg',
      'img/imgCarousel/6.jpg',
    ],
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
    },

    scrollBack: function(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },

    enterSend: function(){
      this.arraySendMessage.push(this.sendMessage);
      this.sendMessage = '';
    },

    chatBoxActiver: function(){
      if(this.chatBox == false){
        this.chatBox = true;
      } else if (this.chatBox == true){
       this.chatBox=false;
     }
    },
    chatBoxDeactiver: function(){
     this.chatBox = false;
    },
  }
})
Vue.config.devtools = true;
