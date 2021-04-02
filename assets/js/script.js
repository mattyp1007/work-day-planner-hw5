var saveButtonEls = $('.saveBtn');
var textBoxEls = $('textarea');
var activeContents = [
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



$('.saveBtn').on('click', function(event) {
  event.stopPropagation();
  var buttonEl = $(event.target);
  var inputEl = buttonEl.parent().prev().children().first();
  
  console.log(inputIndex);
  var todo = {
    hour: inputEl.attr('data-hour'),
    contents: inputEl.val()
  }

  
})


// color the boxes based on current time
var currentHour = moment().format('k');
for(i=0; i<textBoxEls.length; i++){
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