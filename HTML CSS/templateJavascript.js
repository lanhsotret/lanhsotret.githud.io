
$(function(){
    let AddSvg = $('.cont2Svg').eq(0).html();
    $('.cont2Svg').eq(1).html(AddSvg + AddSvg);
    $('.cont2Svg').eq(2).html(AddSvg + AddSvg + AddSvg);
    $('.cont2Svg').eq(3).html(AddSvg + AddSvg + AddSvg);
    DataWeb["linkImg"].forEach((partical,index)=>{
        $('.js-cont6-background').eq(index).css('background-image', `url(${partical})`);
    });
    function maxHeightFn() {
        var maxheigh = $('.js-cont6-div').eq(0).outerHeight();
        for(i = 1; i < $('.js-cont6-div').lenth; i++) {
            var check = maxheigh >= $('.js-cont6-div').eq(i).outerHeight();
            maxheigh = check? maxheigh + "px" : $('.js-cont6-div').eq(i).outerHeight();
        }
        $('.js-cont6-div').css('height', `${maxheigh}px`);
    }
    maxHeightFn();
    DataWeb.social.forEach((partical,index)=>{
        $('main.footer-main1 abbr').eq(index).html(partical["Tags"]);
    });
    $(`<div class="js-footer-main1-icon">${DataWeb["Icon"][0]["Tags"]}${DataWeb["Icon"][0]["Tags"]}${DataWeb["Icon"][0]["Tags"]}${DataWeb["Icon"][0]["Tags"]}${DataWeb["Icon"][0]["Tags"]}</div>`).insertBefore('main.footer-main1 > p');
});

