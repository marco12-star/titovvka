/*VIDEO ON HOVER*/
$("#btn").mouseover(function() {
    $("video").mouseover();
});

$("#btn").mouseout(function() {
    $("video").mouseout();
});
/*VIDEO ON HOVER*/

// SLIDER FOR MAIN

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:700,
		autoplaySpeed:800,
		variableWidth: true,
		customPaging: (slider, i) => `<span>0${i + 1}.</span>`,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1,
          customPaging: (slider, i) => `<span>0${i + 1}.вариант</span>`,
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

// SLIDER FOR MAIN

//HERO SLIDER FOR ABOUT PAGE

$(document).ready(function(){
  $('.hero__slider').slick({
    arrows:true,
    dots:true,
    slidesToShow:1,
    autoplay:false,
    speed:700,
    autoplaySpeed:800,
    variableWidth: true,
    customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '<i class="fa fa-sort-asc"></i></button>';
      },
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow:1
        }
      }
    ]
  });
});

// HERO SLIDER FOR ABOUT PAGE

// SHINE SLIDER ON ABOUT

$(document).ready(function(){
  $('.shine__slider').slick({
    arrows:true,
    dots:false,
    slidesToShow:2,
    autoplay:false,
    speed:700,
    autoplaySpeed:800,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow:1
        }
      }
    ]
  });
});

// SHINE SLIDER ON ABOUT

/*CALC*/
Vue.config.productionTip = false;
Vue.config.devtools = false
new Vue({
  el: "#app",
  data: {    
    adults: 1,
    kids: 0,
    start: '2020-05-20',
    stop: '2020-05-21',
    greet: {
    display: 'none'
    },
    
  },
  methods: {  
     close: function(){
     this.greet.display='none';
     },
     order: function(){
     this.greet.display='block'
      // console.log(this.start);
     },
    decAdults: function(){
       if(this.adults < 2)return;
       this.adults--;
    },incAdults: function(){
       if(this.adults > 9)return;
       this.adults++;
    },
    decKids: function(){
       if(this.kids < 1)return;
       this.kids--;
    },incKids: function(){
       if(this.kids > 11)return;
       this.kids++;
    }
  },
  computed:{
    price: function(){
      // дата старта
      var sd = new Date(this.start)
      var slim = new Date(sd.getFullYear(), 4, 20)      
     // дата завершения
      var ed = new Date(this.stop)      
      var elim = new Date(ed.getFullYear(), 9, 1)
      var days = Math.ceil(  (ed - sd) / (86400 * 1000))            
      var adultPrice = 7000;
      var kidsPrice = 3500;
     // май 4 от нуля октябрь 9 от нуля     
      if( slim <= sd && sd <= elim ){
               adultPrice = 5000;
               kidsPrice = 2500;
      }
      return days * (this.adults * adultPrice + this.kids * kidsPrice );
    }
  }
})

/*CALC*/

