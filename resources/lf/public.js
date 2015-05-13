// JavaScript Document
$(".nav li:last").addClass("bor0");
var mose=($(".mosueon_tab").width()/3);
$(".mosueon_tab li").width(mose).height(mose*380/458);
$(".mosueon_tab").height(mose*380/458);

$(".mosueon_tab li img").width(mose).height(mose*380/458);
$(".img2").width((5/3)*mose);
$(".zhaoc").width(mose).height(mose*380/458);

$(".mosueon_tab li").each(function() {
    var hri=$(this).height();
	var thi=$(this).find(".txt").height();
	$(this).find(".txt").css("margin-top",(hri-thi)/2)
});
$(window).resize(function(){
var mose=($(".mosueon_tab").width()/3);

$(".mosueon_tab li").width(mose).height(mose*380/458);
$(".mosueon_tab").height(mose*380/458);
$(".mosueon_tab li img").width(mose).height(mose*380/458);
$(".img2").width((5/3)*mose);
$(".zhaoc").width(mose).height(mose*380/458);
$(".mosueon_tab li").each(function() {
    var hri=$(this).height();
	var thi=$(this).find(".txt").height();
	$(this).find(".txt").css("margin-top",(hri-thi)/2)
});
	});
/*if($(".lst_dl dt li").size()>7){
	lsize=$(".lst_dl dt li").size();	
for(i=7;i<lsize;i++){
	html=$(".lst_dl dt li").eq(i).html();
	$(".lst_dl dd ul").append("<li>"+html+"</li>");	
	}
}else{
		
		}*/	
$(".lst_dl li").each(function(index, element) {
    i=$(this).index()+1;
	if(i%2==0){
		$(this).addClass("mar_r0");
		}
});	
var aacn=1;	
$(".mosueon_tab li").addClass("selsect");
$(".mosueon_tab li").hover(function(){
	var alw=($(".mosueon_tab").width()/3);
	$(".mosueon_tab li").addClass("selsect");
	that=$(this);
	pt=setTimeout(function(){
	if(aacn>0){
		aacn=-1;
		
	that.css("z-index",100);
	that.removeClass("selsect");
	that.find(".litile").show();
	that.find(".txt h1").css("margin-top",-60);
	that.find("img").eq(0).hide();
	that.find("img").eq(1).show();
	that.animate({"width":(5/3)*alw},600,function(){
		that.find(".himg1").hide();
		that.find(".himg2").show();
		});
	$(".selsect").find(".txt").hide();	
	$(".selsect").animate({"width":alw*(2/3)},600,function(){
		aacn=1;
		});
	setTimeout(function(){that.find(".zhaoc").width((5/6)*alw).addClass("bglan");},200);	
	}		
	},500);
	},function(){
		clearTimeout(pt);
		var alw=($(".mosueon_tab").width()/3);
		$(".zhaoc").width(alw).removeClass("bglan");
	$(this).find(".txt h1").css("margin-top",0);
	$(this).find(".litile").hide();
	$(this).find("img").eq(1).hide();
	$(this).find("img").eq(0).show();
		$(this).css("z-index","")
		$(this).animate({"width":alw},200,function(){
			that.find(".himg2").hide();
			that.find(".himg1").show();
			});
	$(".selsect").find(".txt").show();	
	$(".selsect").animate({"width":alw},200);
		},function(){$(".mosueon_tab li").addClass("selsect");$(".selsect").find(".txt").show();});


$(".brand_p ul").width($(".brand_p li").size()*300);
if($(".brand_p li").size()<4){
	$(".prev").hide();
	$(".next").hide();
	}
$(".brand_p li").eq(1).addClass("curtd");	
var unclick=true;
$(".prev").click(function(){
	dom=$(this).next();
	a=300;
	i=1;
	i1=1;
	prev();
	$(".curtd").removeClass("curtd");
	$(".brand_p li").eq(1).addClass("curtd");
});

$(".next").click(function(){
	dom=$(this).prev();
	a=300;
	i=1;
	i1=1;
	next();
	$(".curtd").removeClass("curtd");
	$(".brand_p li").eq(2).addClass("curtd");
});
$(".nav li:last").find("dl a:last").addClass("pdaimng0");

$(".nav li:last").find("a:first").addClass("pdaimng0");
$(".two_n").each(function() {
    size=$(this).find("dd").size();
	adw=0;
	for(i=0;i<size;i++){
		adw=adw+$(this).find("dd").eq(i).width();
		}
$(this).width(adw+10);
if($(this).parent().index()==3){
	$(this).width(adw+16);
	}
if($(this).parent().index()==5){
	$(this).width(adw+6);
	}	
});

$(".two_n").hide();
var pts=null;
$(".nav li").hover(function(){
if($(this).find("dd").size()>0){
	if($(this).index()>2){
		$(this).find(".two_n").addClass("parigh");
		}else{
		$(this).find(".two_n").addClass("palfrt");
		var offl=$(this).find(".two_n").width();
		var offn=$(".nav").offset().left+$(".nav").width()-$(this).offset().left;
		if(offl>offn){
			var cd=offl-offn;
			$(this).find(".two_n").css("left",-cd);
			}
			}	
		$(".two_n").hide();	
		var that=$(this);		
	pts=setTimeout(function(){
		that.find(".two_n").fadeIn(100);		
	$(".bgwht").animate({"top":80},100,function(){
		
		});
	},500);			
	$(this).css("z-index",1000);
	}
},function(){
	clearTimeout(pts);
	$(this).css("z-index","");
	$(this).find(".two_n").hide();
	$(".bgwht").animate({"top":0},100,function(){
		});
});
$("#myRoundabout li").click(function(){
	$(".chsd_3d").removeClass("chsd_3d");
	$(this).addClass("chsd_3d");
	$(".tixted h1").html($(".chsd_3d").find("h1").html());
	$(".csdpxt").html($(".chsd_3d").find(".sweb").html());
	});

$("#myRoundabout li").hover(function(){
if($(this).width()>360){
	$(this).find(".hesed").show();
	}
},function(){
	$(this).find(".hesed").hide();
	});
$(".cul").addClass("hidden");
$(".cul").eq(0).removeClass("hidden")	
$(".culture li").hover(function(){
	$(this).addClass("chosed1");
	$(this).click(function(){
		i=$(this).index();
		$(".chosed").removeClass("chosed");
		$(this).addClass("chosed");	
		$(".cul").addClass("hidden");
		$(".cul").eq(i).removeClass("hidden")
	});
},function(){
	$(this).removeClass("chosed1");
});
$(".nv_list").each(function() {
    $(this).find("li:first").find("span").addClass("bor_l0");
	$(this).find("li:last").find("span").addClass("bor_r0");
});
$(".lisd li").hover(function(){
		$(this).parents(".cul").find(".showtxt").hide();
		$(this).parents(".cul").find(".txtre").show();
	},function(){
		$(this).removeClass("sclect");
		$(this).parents(".cul").find(".showtxt").show();
		$(this).parents(".cul").find(".txtre").hide();
		});
$(".nv_list li").hover(function(){
	$(this).parent().find(".sclect").removeClass("sclect");
	$(this).addClass("sclect");
	$(this).parents(".cul").find(".txtre h1").html($(this).find("span").html());
	$(this).parents(".cul").find(".wenbn").html($(this).find(".weng").html());
},function(){
	if($(this).parent().attr("class")=="nv_list lisd"){
		$(this).removeClass("sclect");
		}
	
	});

$(".looked").click(function(){
	if($(this).parent().parent().next().find(".work").css("display")=="block"){
		$(this).parent().parent().next().find(".work").hide();
		}else{
			$(".work").hide();
			$(this).parent().parent().next().find(".work").show();
			}
});
$(".scroll_g li").hover(function(){
	$(this).addClass("chosexd1");
	$(this).click(function(){
		i=$(this).index();
		$(".chosexd").removeClass("chosexd");
		$(this).addClass("chosexd");
		$(".deciser").addClass("hidden");
		$(".deciser").eq(i).removeClass("hidden");
		});
},function(){
	$(this).removeClass("chosexd1");
});





function next(){
		if(unclick){
			unclick=false;
			 dom.animate({
			 scrollLeft:a*i+dom.scrollLeft()	
			},500,function(){
				for(ind=0;ind<i1;ind++){
				dom.find("ul").append("<li>"+dom.find("li:first").html()+"</li>");
				dom.find("li:first").remove();
				dom.find("li").width(a);
				dom.scrollLeft(-a)
				dom.find("ul").width(dom.find("li").size()*a);
				}
				unclick=true;
			})
			}
	return false;	
		
}
function prev(){;
		for(ind=0;ind<i1;ind++){
		dom.find("li:first").before("<li>"+dom.find("li:last").html()+"</li>");
		dom.find("li:last").remove();
		dom.find("li").width(a);
		dom.scrollLeft(a);
		dom.find("ul").width(dom.find("li").size()*a);
		}
		if(unclick){
			unclick=false;
			 dom.animate({
			 scrollLeft:-a*i+dom.scrollLeft()	
			},500,function(){
				unclick=true;
			});
			}
	return false;	
		
}
$(".slekse").click(function(){
	if($(".chaol").css("display")=="none"){
		$(".chaol").show();	
		}else{
		$(".chaol").hide();	
		}
	
	

});
$(".mosueon_tab a").attr("href","javascript:void(0);")
