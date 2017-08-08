$(function() {
    function addShade() {
        var htmlHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        $("body").append('<div class="loading-shade"></div>');
        $(".loading-shade").css("100%");
    }
	sharezhe();
	function sharezhe(){
	    $('#share').unbind("click").bind("click",function(){
	         addShade();
	         $('.btn_share').show();
	         del();   
	    });
	}
	function del(){
		$(".loading-shade").unbind("click").bind("click",function(){
	    	$('.loading-shade').remove();
	     	$('.btn_share').hide();
	    });
	}
	//-----------
  	function removediv(){
  		$('.btn_close').unbind("click").bind('click',function(){
			$('.loading-shade').remove();
			$('.tips').hide();
		});
	}
  	//==============
  	//更多规则弹出层
  	$('.conrulesmore').unbind("click").bind('click',function(){
		addShade();
		$('.morerulestips').show();
		del2()
	});
	function del2(){
		$('.btn_close').bind('click',function(){
			$('.loading-shade').remove();
			$('.morerulestips').hide();
		});
	}
	//==============      
	var $btn = $('.playbtn');
	var isture = 0;
	var clickfunc = function() {
		var data = [1, 2, 3, 4, 5, 6];
		//data为随机出来的结果，根据概率后的结果
		data = data[Math.floor(Math.random() * data.length)];
		
		
		switch(data) {
			case 1:
				rotateFunc(1, 0, '3倍积分');
				break;
			case 2:
				rotateFunc(2, 60, '迪卡侬代金券');
				break;
			case 3:
				rotateFunc(3, 120, '健身房优惠券');
				break;
			case 4:
				rotateFunc(4, 180, '瑜伽体验卡');
				break;
			case 5:
				rotateFunc(5, 240, 'iPhone6手机');
				break;
			case 6:
				rotateFunc(6, 300, '运动哑铃');
				break;
		}
	}
	$btn.click(function() {
		if(isture) return;  // 如果在执行就退出
		isture = true;   // 标志为 在执行
		if (true) {
			clickfunc();
		} 
	});
	var rotateFunc = function(awards, angle, text) {
		isture = true;
		$btn.stopRotate();
		$btn.rotate({
			angle: 0,
			duration: 5000, //旋转时间
			animateTo: angle + 1440, //让它根据得出来的结果加上1440度旋转
			callback: function() {
				isture = false; 
				addShade();   
				$('.tips').show();
				$('.btn_desc').html(text);
				removediv();  
				
				//根据后端返回需要的参数以及切换弹出层的奖品图片
				if (awards=="1") {
					console.log("1111111113倍积分");
					$(".prize img").attr("src","img/lottery/prize_0.png");
					
				} else if(awards=="2"){
					console.log("2222222迪卡侬代金券");
					$(".prize img").attr("src","img/lottery/prize_2.png");
				} else if(awards=="3"){
					console.log("3333333333健身房优惠券");
					$(".prize img").attr("src","img/lottery/prize_3.png");
				} else if(awards=="4"){
					console.log("444444444瑜伽体验卡");
					$(".prize img").attr("src","img/lottery/prize_4.png");
				}else if(awards=="5"){
					console.log("555555555555iPhone6手机");
					$(".prize img").attr("src","img/lottery/prize_5.png");
				}else if(awards=="6"){
					console.log("66666666666运动哑铃");
					$(".prize img").attr("src","img/lottery/prize_6.png");
				}
				
			}
		});
	};
	
});
