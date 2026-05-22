const SHEET_ID = 'spreadsheets/d/1wEUNY71YMwBVi-9LbrFm-IHKjJHrtIuEBqxUylAR7-4';
const SHEET_NAME = 'ชีต1';

function setupSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  const headers = ['id','date','time','supervisor','teacher','subject','classroom','topic','comment','learning','student','innovation','assessment','classroomScore','score','createdAt'];
  if (sh.getLastRow() === 0) sh.appendRow(headers);
  return sh;
}

function doGet(e) {
  const sh = setupSheet();
  const values = sh.getDataRange().getValues();
  if (values.length <= 1) return jsonOutput([]);
  const headers = values.shift();
  const data = values.map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    return obj;
  });
  return jsonOutput(data);
}

function doPost(e) {
  const sh = setupSheet();
  const data = JSON.parse(e.postData.contents || '{}');
  const id = data.id || ('S' + Date.now());
  const values = sh.getDataRange().getValues();
  const headers = values[0];
  const idCol = headers.indexOf('id');
  const row = [id, data.date || data.supervisionDate || '', data.time || data.supervisionTime || '', data.supervisor || '', data.teacher || '', data.subject || '', data.classroom || '', data.topic || '', data.comment || '', Number(data.learning || 0), Number(data.student || 0), Number(data.innovation || 0), Number(data.assessment || 0), Number(data.classroomScore || 0), Number(data.score || 0), new Date()];
  let updated = false;
  for (let r = 1; r < values.length; r++) {
    if (String(values[r][idCol]) === String(id)) {
      sh.getRange(r + 1, 1, 1, row.length).setValues([row]);
      updated = true;
      break;
    }
  }
  if (!updated) sh.appendRow(row);
  return jsonOutput({status:'success', id:id, updated:updated});
}

function jsonOutput(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
