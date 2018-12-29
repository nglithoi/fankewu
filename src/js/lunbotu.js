            document.addEventListener("DOMContentLoaded", function(){
            var banner = document.querySelector(".banner");
            var ulbox = banner.children[0];
            var firstImg = ulbox.children[0].children[0];
            // 3.复制索引0所在的元素，追加到ul最后面。
            var cloneLi = ulbox.children[0].cloneNode(true);
            ulbox.appendChild(cloneLi);
            var len = ulbox.children.length;
            var idx = 0;
            var timer;
            // 1.banner呈现图片，宽度为第一张图片的宽度。ul的宽度=图片的宽度*图片张数
            //  * 必须等待第一张图片加载完成后，再获取宽度
            firstImg.onload = function(){
                banner.style.width = firstImg.offsetWidth + 'px';
                ulbox.style.width = firstImg.offsetWidth * len + 'px';
            }
            
            var page = createPage();
            autoplay();
            //4.鼠标移入banner，清除定时器。鼠标移出banner，重新开启定时器
            banner.onmouseover = function(){
                clearInterval(timer);
            }
            banner.onmouseout = function(){
                  autoplay();
            }
            //5.点击小圆点，获取里面的内容-1==>索引
            page.onclick = function(e){
                if(e.target.tagName == "SPAN"){
                    idx = e.target.innerHTML - 1;
                    showPic();
                }
            }
            page.onclick =function(){
             idx++;
             showPic();
            }

            // 2.开启定时器，定义一个索引（0、1、2）改变，从而改变的是ulbox的left值
            //  * 当索引为数组长度时，其实要呈现的是索引1所在的图片。为了让轮播图是正着滚的，同时将ul的left手动设置成0。
            function autoplay(){
                timer = setInterval(function(){
                    idx++;
                    showPic();
                },2500) 
            }
            //只做呈现图片
            function showPic(){
                if(idx == len){
                    ulbox.style.left = 0;
                    idx = 1;
                }
                //4.滚动过程中索引改变，去除所有的高亮，再让对应的索引高亮.
                //  * 当滚到被复制那张图片索引时，对应的索引为0的小圆点高亮。
                for(var i=0;i<len-1;i++){
                    page.children[i].classList.remove("active");
                }
                if(idx == 3){
                    page.children[0].classList.add("active");
                }else{
                    page.children[idx].classList.add("active");
                }
                animation(ulbox,{left:-firstImg.offsetWidth *idx},30);
            }
            
            //3.生成页码，同时根据len-1生成小圆点.默认第一个小圆点高亮.active
            function createPage(){
                var page  = document.createElement("div"); 
                page.classList.add("page");
                for(var i=1;i<=len-1;i++){
                    var dotted = document.createElement("span");
                    dotted.innerHTML = i;
                    page.appendChild(dotted);
                }    
                page.children[0].classList.add("active");
                banner.appendChild(page);
                return page;
            }
});



//             // index-liebiaolunbotu
//    document.addEventListener("DOMContentLoaded", function(){
//     var jj1 = document.querySelector("#jj1");
//     var jj2 = document.querySelector("#jj2");

//     var liebiaolunbo = document.querySelector(".liebiaolunbo");
//     var gundongul = liebiaolunbo.children[0];
//     var yigeli = gundongul.children[0];     //一个li
//     var len = gundongul.children;       
//     var idx =4;
    

// //animation(gundongul,{left:-728},30)
//     var leftjj=gundongul.offsetLeft;
//     jj1.onclick=function(){
//         if(leftjj !=0)
//         gundongul.style.left = leftjj +728 +"px";
//             if(leftjj +728 >0){
//                 gundongul.style.left ='0px';
//             }
//             console.log(gundongul.offsetLeft);
 
//     }

//     jj2.onclick=function(){

//             gundongul.style.left = leftjj -728 + 'px';
//             if (leftjj < -728) {
//                 gundongul.style.left = leftjj+"px";
//             }

//     }
     


//    });  