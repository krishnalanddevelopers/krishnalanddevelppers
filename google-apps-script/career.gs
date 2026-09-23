/**
 * Krishna Land Developers — "Career" application form to Google Sheet (resume saved to Drive).
 *
 * Setup (one time):
 * 1. Open the Career Google Sheet. Extensions > Apps Script, paste this whole file.
 * 2. Deploy > New deployment > type "Web app"
 *      Execute as: Me
 *      Who has access: Anyone
 *    Authorize (it asks for Sheets + Drive access), then copy the Web app URL (ends with /exec)
 *    into the website's .env.local as GOOGLE_SHEETS_CAREER_URL. SECRET below goes in as
 *    GOOGLE_SHEETS_CAREER_SECRET.
 * Resumes are saved in a private Drive folder named FOLDER_NAME (created automatically); the
 * sheet stores a link to each file.
 * After editing this script later, use Deploy > Manage deployments > Edit > New version
 * so the same URL keeps working.
 */

const SECRET = "TEST_CAREER";
const SHEET_NAME = "Career Applications";
const FOLDER_NAME = "Career Resumes";
const HEADERS = [
  "Timestamp",
  "Name",
  "Email",
  "Phone",
  "Position",
  "Experience (Years)",
  "Resume",
  "Cover Letter",
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== SECRET) {
      return json({ ok: false, error: "Unauthorized" });
    }

    let resumeUrl = "";
    if (data.resume && data.resume.data) {
      const blob = Utilities.newBlob(
        Utilities.base64Decode(data.resume.data),
        data.resume.type || "application/octet-stream",
        (data.name || "Applicant") + " - " + (data.resume.name || "resume")
      );
      resumeUrl = getFolder().createFile(blob).getUrl();
    }

    getSheet().appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      // Leading apostrophe keeps phone numbers as text (no lost zeros / scientific notation)
      data.phone ? "'" + data.phone : "",
      data.position || "",
      data.experience || "",
      resumeUrl,
      data.coverLetter || "",
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
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function getFolder() {
  const folders = DriveApp.getFoldersByName(FOLDER_NAME);
  return folders.hasNext() ? folders.next() : DriveApp.createFolder(FOLDER_NAME);
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
