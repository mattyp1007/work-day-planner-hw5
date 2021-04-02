var saveButtonEls = $('.saveBtn');
var textBoxEls = $('textarea');
var planner = JSON.parse(localStorage.getItem('planner'));
// make new planner array if one doesn't exist
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

var currentHour = moment().format('k');
for(i=0; i<textBoxEls.length; i++){
  // fill in the text content saved text content
  $(textBoxEls[i]).val(planner[i].contents);

  // color the boxes based on current time
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

// Save button click listener
$('.saveBtn').on('click', function(event) {
  event.stopPropagation();
  // select button clicked
  var buttonEl = $(event.target);
  // corresponding text box
  var inputEl = buttonEl.parent().prev().children().first();
  // create object
  var todo = {
    hour: inputEl.attr('data-hour'),
    contents: inputEl.val()
  }
  // find the matching object in planner array and update contents
  for(var i = 0; i < planner.length; i++){   
    if(planner[i].hour == todo.hour){
      planner[i].contents = todo.contents;
    }
  }
  // save to local storage
  localStorage.setItem('planner', JSON.stringify(planner));

})
