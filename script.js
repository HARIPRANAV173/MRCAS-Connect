function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.teacherName,
    data.schoolName,
    data.participant,
    data.Quiz,
    data.Coding,
    data.Debate,
    data.Poster,
    data.Science,
    data.Dance,
    data.Singing,
    data.Other
  ]);
  return ContentService.createTextOutput("Success");
}
