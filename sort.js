// Write a JavaScript program which can accept a file of natural language text as input. It should print all unique words in descending order of frequency. If two words have an equal number of occurrences in the document, they should be ordered alphabetically.
// ​
// For example, if the contents of a document were to be "ba cc aa bb ba bb cc cc", the result should be:
// ​
// cc 3
// ba 2
// bb 2
// aa 1

function sort() {
  var text = document.getElementById('text_area').value
      text = text.split('.').join(' ')
      text = text.replace(/(\r\n|\n|\r\.)/gm," ");
      text = text.toLowerCase().split(" ").sort();
  var current = null;
  var cnt = 0;
  var masterList = []

  for (var i = 0; i < text.length; i++) {
      if (text[i] != current) {
          if (cnt > 0) {
            masterList.push({ key: current, val: cnt } );
          }
          current = text[i];
          cnt = 1;
      } else {
          cnt++;
      }
  }
  if (cnt > 0) {
    masterList.push({ key: current, val: cnt } );
  }

  masterList = masterList.sort(function (a, b) {
    return - ( (a.val - b.val) && a.key.localeCompare( b.key ) );
  });

  masterList = masterList.sort(function (a, b) {
    return - (a.val - b.val);
  });

  var table = $('<table></table>').addClass('foo');
    for(i = 0; i < masterList.length; i++){
    var row = $('<tr></tr>').addClass('bar').text('result ' + masterList[i]["key"] + masterList[i]["val"]);
    table.append(row);
  }

  $('#here_table').append(table);

}
