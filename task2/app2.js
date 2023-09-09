$('#leftRight').click(function(){
    if ($('#left').css('width') == '0px'){
        $('#topBottomL').html('===');
        $('#leftRight').html('◄');
        $('#left').css('width', '19vw');
        $('#right').css('width', '80vw');
    } else{
        $('#topBottomL').html('');
        $('#leftRight').html('►');
        $('#left').css('width', '0vw');
        $('#right').css('width', '99vw');
    }
});
 
let pageHeight = document.documentElement.scrollHeight;
pageHeight = pageHeight - ((pageHeight/100) * 2) - 100;
pageHeight = Math.round(pageHeight);

$( "#topR" ).resizable({
    minHeight: 100,
    maxHeight: pageHeight,
    handles: 's'
});
$( "#topL" ).resizable({
    minHeight: 100,
    maxHeight: pageHeight,
    handles: 's'
});
