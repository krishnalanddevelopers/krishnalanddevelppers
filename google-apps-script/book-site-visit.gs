/**
 * Krishna Land Developers — "Book Site Visit" + every enquiry popup to Google Sheet.
 * (Only the /contact page form goes to the Contact Us sheet.) The Form column says which one.
 *
 * Setup (one time):
 * 1. Open the Book Site Visit Google Sheet. Extensions > Apps Script, paste this whole file.
 * 2. Deploy > New deployment > type "Web app"
 *      Execute as: Me
 *      Who has access: Anyone
 *    Authorize, then copy the Web app URL (ends with /exec) into the website's .env.local as
 *    GOOGLE_SHEETS_BOOK_VISIT_URL.
 * 3. Project Settings (gear icon) > Script Properties > Add script property:
 *      Property: SECRET    Value: the GOOGLE_SHEETS_BOOK_VISIT_SECRET value from .env.local
 *    (The secret lives only in Script Properties, never in this file, so it stays out of git.)
 * After editing this script later, use Deploy > Manage deployments > Edit > New version
 * so the same URL keeps working.
 */

const SECRET = PropertiesService.getScriptProperties().getProperty("SECRET");
const SHEET_NAME = "Book Site Visit";
const HEADERS = ["Timestamp", "Name", "Email", "Phone", "Project", "Message", "Form"];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (!SECRET || data.secret !== SECRET) {
      return json({ ok: false, error: "Unauthorized" });
    }

    getSheet().appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      // Leading apostrophe keeps phone numbers as text (no lost zeros / scientific notation)
      data.phone ? "'" + data.phone : "",
      data.project || "",
      data.message || "",
      data.formType || "",
    ]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  // Always (re)write the header row so a sheet created before the Form column picks it up
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight("bold");
  sheet.setFrozenRows(1);
  return sheet;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
