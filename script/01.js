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

//스크롤이벤트
$(window).on("scroll", function () {
	let scrollTop = $(window).scrollTop()
	sections.each(function (i, o) {
		if (scrollTop >= sections.eq(i).offset().top - speed) {
			console.log(sections.eq(i).offset().top - speed)
			$("#nav ul.gnb_inner li").eq(i).addClass("active").siblings().removeClass("active")
		} else if (scrollTop >= sections.eq(2).offset().top - speed) {
			sections.eq(2).find(".left").addClass("in");
			sections.eq(2).find("span").addClass("show");
		}
	})
})

$(".left_pc .hidden").hover(
	function () {
		let ah = $(this).innerHeight()
		let img = $(this).find("img")
		let imgh = img.innerHeight()
		img.stop().animate({ top: ah - imgh }, 3000)
	},
	function () {
		let img = $(this).find("img")
		img.stop().animate({ top: 0 }, 3000)
	}
)
/*slogan-*/ 
let p = gsap.utils.toArray("span");

gsap.set(p, { autoAlpha: 1 });

p.forEach((p) => {
  let splitHide = new SplitText(p, {
    type: "words",
    wordsClass: "hide"
  });

  let split = new SplitText(p, {
    type: "words,lines",
    linesClass: "lines",
    wordsClass: "words"
  });

  gsap.from(split.words, {
    duration: 1.2,
    yPercent: 100,
    ease: "power3.out",
    stagger: 0.04,
    scrollTrigger: {
      trigger: p
    }
  });
});
