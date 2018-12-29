jQuery(function($){
    var $smallpic = $(".bigpic");
            var $img = $(".bigpic img");
            var $shade = $(".blocks");
            var $big=$(".fd");
            var $imgBig=$(".fd img");
            $smallpic.on("mouseover",function(){
                $shade.css("display","block");
                $big.css("display","block"); 
            }).on("mouseout",function(){
                $shade.css("display","none");
                $big.css("display","none"); 
            }).on("mousemove",function(e){
                var scale=2;
                $shade.css({width:$smallpic.outerWidth()/scale,height:$smallpic.outerHeight()/scale});
                $imgBig.attr("src",$img[0].src).css({width:$smallpic.outerWidth()*scale});
                var $ox=e.pageX-$smallpic[0].offsetLeft-$shade.outerWidth()-$shade.innerWidth()/2;
                var $oy=e.pageY-$smallpic[0].offsetTop-$shade.outerHeight()-$shade.innerHeight()/2;
                if($ox<=0){
                    $ox=0
                }else if($ox>=$smallpic.outerWidth()-$shade.outerWidth()){
                    $ox=$smallpic.outerWidth()-$shade.outerWidth();
                }
                if($oy<=0){
                    $oy=0
                }else if($oy>=$smallpic.outerHeight()-$shade.outerHeight()){
                    $oy=$smallpic.outerHeight()-$shade.outerHeight();
                }
                $shade.css({left:$ox,top:$oy});
                $imgBig.css({marginTop:-$oy*scale-40,marginLeft:-$ox*scale-40});
    })









});