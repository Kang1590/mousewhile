$(document).ready(function(){
	
	//왼쪽메뉴 클릭시 활성화된다.
	$("a").click(function(){
		//클릭한 a의 부모(li)인텍스번호 get
		const n = $(this).parent().index();
		//점검
		console.log(n);
		//모든클래스 삭제
		$("a").removeClass();
		$(this).addClass("menuOver "+"m"+(n+1));
		//클릭한 메뉴만 클래스 추가
	});
	
	//휠(스크롤) 위치에 따라 왼쪽메뉴 활성화.
	$(document).scroll(function(){
		//브라우저높이
		const h1 = $(window).height();
		//스크롤내린 높이
		const t1 = $(document).scrollTop();
		//계산: 스크롤높이를 브라우저높이로 나눈 정수값(floor 소수점미만 버림)
		const ht = Math.floor(t1/h1);
		//console.log(ht);
		//모든클래스 삭제
		$("a").removeClass();
		//해당 메뉴만 클래스 추가
		$("li").eq(ht).children().addClass("menuOver "+"m"+(ht+1));
	});
	
	
});/////////////end












