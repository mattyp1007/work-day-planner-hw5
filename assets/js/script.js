var saveButtonEls = $('.saveBtn');
var textBoxEls = $('textarea');
var planner = JSON.parse(localStorage.getItem('planner'));
console.log(planner);
if(!planner){
  planner = [
    {
      hour: 9,
      contents: ""
    },
    {
      hour: 10,
      contents: ""
    },
    {
      hour: 11,
      contents: ""
    },
    {
      hour: 12,
      contents: ""
    },
    {
      hour: 13,
      contents: ""
    },
    {
      hour: 14,
      contents: ""
    },
    {
      hour: 15,
      contents: ""
    },
    {
      hour: 16,
      contents: ""
    },
    {
      hour: 17,
      contents: ""
    }
  ];
}



$('.saveBtn').on('click', function(event) {
  event.stopPropagation();
  var buttonEl = $(event.target);
  var inputEl = buttonEl.parent().prev().children().first();
  var todo = {
    hour: inputEl.attr('data-hour'),
    contents: inputEl.val()
  }

  for(var i = 0; i < planner.length; i++){   
    if(planner[i].hour == todo.hour){
      planner[i].contents = todo.contents;
    }
  }
  localStorage.setItem('planner', JSON.stringify(planner));

})


// color the boxes based on current time; fill in saved text content
var currentHour = moment().format('k');
for(i=0; i<textBoxEls.length; i++){
  $(textBoxEls[i]).val(planner[i].contents);


  var rowHour = i + 9; // first box represents 09:00, so add hour each iteration
  if(currentHour > rowHour){
    $(textBoxEls[i]).addClass('past');
  }
  else if(currentHour == rowHour){
    $(textBoxEls[i]).addClass('present');
  }
  else{
    $(textBoxEls[i]).addClass('future');
  }
}