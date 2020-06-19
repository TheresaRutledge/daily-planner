var today = new moment().format('dddd MMMM Do, YYYY');
var currentHour = parseInt(new moment().format('HH'));




//set current date
$('#currentDay').text(today);

//check time to update input fields
const checkTime = () => {
$('.description').each(function(){
    el=$(this);
    blockTime = parseInt(this.id);
    if(blockTime<currentHour){
        el.removeClass('future');
        el.addClass('past');
    } else if(blockTime===currentHour){
        el.removeClass('future');
        el.addClass('present');
    }
})    
}

//check the time everyminute to update block colors
checkTime();
setInterval(checkTime,60000);


