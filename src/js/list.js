jQuery(function($){
    $('.goodslist li').mouseenter(function(){
        $('.goodslist>div').css('display','block');
    });
    $('.goodslist li').mouseout(function(){
        $('.goodslist>div').css('display','none');
    })

    
})
