
$(function(){
	
//------搜索框点击变色 -------

	$(".searchId").focusin(function(){
		$(".abc").css({
			background:"#ea1a1a"
		});
		$(".def").css({
			background:"#ea1a1a"
		});
	});
	
		$(".searchId").focusout(function(){
		$(".abc").css({
			background:"#eaeaea"
		});
		$(".def").css({
			background:"url(img/search.png)",
			backgroundPositionY:"6px"
		});
	});
	
//--------nav变色------

	$(".navU > li").each(function(){
			$(this).hover(
				function(){
					$(this).children().css({color:"#ea1a1a"});
					$(this).children().children().css({color:"#ea1a1a"});
				},
				function(){
					$(this).children().css({color:"gray"});
					$(this).children().children().css({color:"gray"});
				}
			);
		});

//------下拉菜单-----
	$(".headerL>ul>li").each(function(){
		$(this).hover(
			function(){
				$(this).children().next().children().slideDown().css("display","block");
			},
			function(){
				$(this).children().next().children().slideUp().css("display","none");
			}
		)
	});

//------登录下滑-----
	$(".headerR>ul>li").each(function(){
			$(this).hover(
			function(){
				$(this).children(".zaixian").css({color:"white"});
				$(this).css("background","#C5C5C5");
				$(this).children().next().slideDown().css("display","block");
			},
			function(){
				$(this).children(".zaixian").css({color:"black"});
				$(this).css("background","white")
				$(this).children().next().slideUp().css("display","none");
			}
		);
	});
		
	
	
});
