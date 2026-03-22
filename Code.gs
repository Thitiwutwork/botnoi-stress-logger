function doGet(request) {
  // 1. เปลี่ยน URL ตรงนี้เป็นลิงก์ Google Sheets ของคุณ
  // วิธีดู URL: เปิด Google Sheets แล้ว copy URL จาก address bar
  var ss = SpreadsheetApp.openByUrl("YOUR_GOOGLE_SHEETS_URL_HERE");
  var sheet = ss.getActiveSheet();

  // 2. รับค่าตัวแปร (Parameters) ที่จะส่งมาจาก Botnoi (เอาแค่ 3 ตัว)
  var customer_name = request.parameter.customer_name || "ไม่ระบุ";
  var stress_score = request.parameter.stress_score || "-";
  var result_text = request.parameter.result_text || "-";

  // 3. จัดการรูปแบบวันที่และเวลาปัจจุบัน (ทำหน้าที่เป็น Timestamp)
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;

  // 4. บันทึกข้อมูลลงแถวใหม่ใน Sheet ให้ตรงกับ 4 คอลัมน์ที่ตั้งไว้
  // (A = Timestamp, B = ชื่อ, C = คะแนนความเครียด, D = ผลประเมิน)
  sheet.appendRow([dateTime, customer_name, stress_score, result_text]);

  // 5. ส่งข้อความยืนยันกลับไปให้ระบบ Botnoi
  var result = { "status": "success", "message": "บันทึกข้อมูลเรียบร้อยแล้ว" };
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}
