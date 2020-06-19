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

//create array
var tasksArr = [];
//when save button is clicked save text of that specific block
$('.saveBtn').on('click',function (){
// textID = $(event.target).siblings('textarea');
content = $(this).closest('textarea').text().trim();

// console.log(textID);
console.log(content);

})
//save text with id of block to array
//when page loads load correct text to field based on id


//check the time everyminute to update block colors
checkTime();
setInterval(checkTime,60000);


