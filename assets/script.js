//current date
var today = new moment().format('dddd MMMM Do, YYYY');
//current hour
var currentHour = parseInt(new moment().format('HH'));

//array to hold all tasks
var tasksArr = JSON.parse(localStorage.getItem('tasks')) || [];


//set current date
$('#currentDay').text(today);

//load tasks from localStorage
const loadTasks = () => {
    $.each(tasksArr, function (index) {
        $(`textarea#${tasksArr[index].id}`).val(tasksArr[index].input);
    })
}

//check time to update background color
const checkTime = () => {
    $('.description').each(function () {
        el = $(this);
        blockTime = parseInt(this.id);
        if (blockTime < currentHour) {
            el.removeClass('future');
            el.addClass('past');
        } else if (blockTime === currentHour) {
            el.removeClass('future');
            el.addClass('present');
        }
    })
}

//when save button is clicked update array
$('.saveBtn').on('click', function () {
    let blockInput = $(this).siblings('textarea').val().trim();
    let blockID = $(this).siblings('textarea').attr('id');

    if (!checkTasks(blockID, blockInput)) {
        tasksArr.push({ id: blockID, input: blockInput });
    }
    saveTasks(tasksArr);
})

//check if task already exists, if so overwrite
const checkTasks = (blockID, blockInput) => {
    for (i = 0; i < tasksArr.length; i++) {
        if (tasksArr[i].id === blockID) {
            if (tasksArr[i].input) {
                tasksArr[i].input = blockInput;
                return true;
            }
        }
    } return false;
}

//save to localStorage
const saveTasks = (arr) => {
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
}


//loadtasks
loadTasks();
//check the time everyminute to update block colors
checkTime();
setInterval(checkTime, 60000);


