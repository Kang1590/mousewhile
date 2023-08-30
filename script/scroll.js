$(document).ready(function(){
        	
						//[봄,여름,가을,겨울] 각 섹션
            const elm = $("main>section");
            $(elm).each(function (index) {
							
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    let delta = 0;                   
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } 
                    else if (event.detail){
                        delta = -event.detail / 3;
										}
										
										//스크롤바의 윗쪽 Y위치
                    let moveTop = $(window).scrollTop();
										
										//[0,1,2,3] 봄,여름,가을,겨울 섹션
                    let elmSelecter = elm.eq(index); 
										
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(elmSelecter).next() != undefined) {
														//오류를 처리할 코드블록을 정의.
                            try{
                                moveTop = $(elmSelecter).next().offset().top                             
                            }
														//try 블록에서 오류가 발생할때 실행할 코드블록을 정의
														catch(e){}
                        }
												
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(elmSelecter).prev() != undefined) {
														//오류를 처리할 코드블록을 정의.
                            try{
                                moveTop = $(elmSelecter).prev().offset().top                              
                            }
														//try 블록에서 오류가 발생할때 실행할 코드블록을 정의
														catch(e){}
                        }
                    }
                     
                    // 화면이동 0.2초(200)
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 200, complete: function () {
                        }
                    });
                });
            });
            
            
}); //////////////all end