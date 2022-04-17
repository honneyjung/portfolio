const topmenu = $("#nav ul.gnb_inner>li")
const sections = $(".section")
const speed = 1500
//버튼클릭시 이동
topmenu.click(function (e) {
	e.preventDefault()
	let target = $(this)
	let index = target.index()
	let section = $(".section").eq(index)
	let offset = section.offset().top
	$("html,body").animate({ scrollTop: offset }, 1000, "easeOutCirc")
})

/*------------------스크롤시 글자 한줄씩 올라오게하기------------------*/
$(window).on("scroll", function () {
	let scrollTop = $(window).scrollTop()
	sections.each(function (i, o) {
		if (scrollTop >= sections.eq(i).offset().top - speed) {
			//console.log(sections.eq(i).offset().top - speed)
			$("#nav ul.gnb_inner li").eq(i).addClass("active").siblings().removeClass("active");
			sections.eq(i).find(".sub_slogan span").addClass("show");
		}
	})
})



/*-----------마우스 호버시 프로젝트 스크롤------------*/
$(".hidden").hover(
	function () {
		let ah=$(this).innerHeight();
		let img=$(this).find("img");
		let imgh=img.innerHeight();
		img.stop().animate({top:ah-imgh},3000)
	},
	function () {
		let img = $(this).find("img")
		img.stop().animate({ top: 0 }, 3000)
	}
)


/*-------- 스킬 애니메이션 -----------*/ 
$(function(){
    var charts = $('.charts');
    var chart = $('.chart');
    var chartOST = chart.offset().top - 700;
    // var excuted = false;
    // console.log(excuted);

    $(window).scroll(function(){
        var currentSCT = $(this).scrollTop();
        if(currentSCT >= chartOST){
            if(!charts.hasClass('active')){
                animateChart();
                charts.addClass('active');
            }
        }
    });


    function animateChart(){
        chart.each(function(){
            var item = $(this);
            var title = item.find('h2');
            var targetNum = title.attr('data-num');
            var circle = item.find('circle');
    
            $({rate:0}).animate({rate:targetNum},
                {
                    duration:1500,
                    progress:function(){
                        var now = this.rate;
                        var amount = 630 - (630*now/100);
                        
                        title.text(Math.floor(now));
                        circle.css({strokeDashoffset:amount});
                    }
            });
        }); //chart each
    }

});
