$(function(){
	 $('#body').fullpage({
	 	'navigation': true,
	 	afterLoad:function(anchorLink,index){
	 		if(index == '2'){
	 			$(".section2").find(".p").delay(500).animate({
	 				top:'30%',
	 				opacity:1,
	 			},1000,'easeOutExpo');
	 			$(".section2").find(".p1").delay(500).animate({
	 				top:'45%',
	 				opacity:1,
	 			},1000,'easeOutExpo');
	 			$(".section2").find(".p2").delay(700).animate({
	 				top:'65%',
	 				opacity:1,
	 			},1000,'easeOutExpo');
	 			$(".section2").find(".menu").delay(500).animate({
	 				top:'100%',
	 				opacity:1,
	 			},1000,'easeOutExpo');
	 		}
	 		if(index == '3'){
	 			$(".section3").find(".box1").delay(200).animate({
	 			// 	left:'200px',
					// top:'100px',
					opacity:1,
	 			},1000,'easeOutExpo')
	 			$(".section3").find(".box2").delay(200).animate({
	 			// 	left:'550px',
					// top:'100px',
					opacity:1,
	 			},1000,'easeOutExpo')
	 			$(".section3").find(".box3").delay(200).animate({
	 			// 	left:'900px',
					// top:'100px',
					opacity:1,
	 			},1000,'easeOutExpo')
	 			$(".section3").find(".box4").delay(200).animate({
	 			// 	left:'200px',
					// top:'360px',
					opacity:1,
	 			},1000,'easeOutExpo')
	 			$(".section3").find(".box5").delay(200).animate({
	 			// 	left:'550px',
					// top:'360px',
					opacity:1,
	 			},1000,'easeOutExpo')
	 			$(".section3").find(".box6").delay(200).animate({
	 			// 	left:'900px',
					// top:'360px',
					opacity:1,
	 			},1000,'easeOutExpo')
	 		}
	 	},
	 	onLeave:function(index,direction){
	 		if(index == '2'){
	 			$(".section2").find(".p").delay(500).animate({
	 				top:'30%',
	 				opacity:1,
	 			},1000,'easeOutExpo');
	 			$(".section2").find(".p1").delay(500).animate({
	 				top:'45%',
	 				opacity:1,
	 			},1000,'easeOutExpo');
	 			$(".section2").find(".p2").delay(700).animate({
	 				top:'65%',
	 				opacity:1,
	 			},1000,'easeOutExpo');
	 			$(".section2").find(".menu").delay(500).animate({
	 				top:'100%',
	 				opacity:1,
	 			},1000,'easeOutExpo');
	 		}
	 		if(index == '3'){
	 			$(".section3").find(".box1").delay(200).animate({
	 			// 	left:'-50px',
					// top:'20px',
					opacity:0,
	 			},1000,'easeOutExpo')
	 			$(".section3").find(".box2").delay(200).animate({
	 			// 	left:'550px',
					// top:'-20px',
					opacity:0,
	 			},1000,'easeOutExpo')
	 			$(".section3").find(".box3").delay(200).animate({
	 			// 	left:'1100px',
					// top:'-20px',
					opacity:0,
	 			},1000,'easeOutExpo')
	 			$(".section3").find(".box4").delay(200).animate({
	 			// 	left:'-50px',
					// top:'600px',
					opacity:0,
	 			},1000,'easeOutExpo')
	 			$(".section3").find(".box5").delay(200).animate({
	 			// 	left:'550px',
					// top:'600px',
					opacity:0,
	 			},1000,'easeOutExpo')
	 			$(".section3").find(".box6").delay(200).animate({
	 			// 	left:'1100px',
					// top:'600px',
					opacity:0,
	 			},1000,'easeOutExpo')
	 		}
	 	}
	 })
	 $('.enter p').click(function(){
		$.fn.fullpage.moveSectionDown()
	});
	setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 3000);
})
$(document).ready(function(){
	$(".name").mouseover(function(){
		var index=$(this).index();
		$(".xinxi").css("display","none").eq(index).css("display","block")
		$(".name").css({"background":"transparent","color":"#fff"}).eq(index).css({"background":"#fff","color":"#000"})
	})
})
