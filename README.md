# Botnoi Stress Score Logger

Google Apps Script สำหรับบันทึกผลประเมินความเครียดจาก Botnoi ลง Google Sheets โดยอัตโนมัติ

## โครงสร้างข้อมูลใน Google Sheets

| A | B | C | D |
|---|---|---|---|
| Timestamp | ชื่อลูกค้า | คะแนนความเครียด | ผลประเมิน |

## วิธีติดตั้ง

### 1. เตรียม Google Sheets
- สร้าง Google Sheets ใหม่
- ตั้งชื่อคอลัมน์ตามตารางข้างต้น (row แรก)

### 2. ติดตั้ง Script
1. เปิด Google Sheets → **Extensions → Apps Script**
2. ลบ code เดิมออกทั้งหมด
3. Copy code จากไฟล์ `Code.gs` วางลงไป
4. แทนที่ `YOUR_GOOGLE_SHEETS_URL_HERE` ด้วย URL ของ Google Sheets คุณ
   ```javascript
   var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/YOUR_ID/edit");
   ```
5. กด **Save** (Ctrl+S)

### 3. Deploy เป็น Web App
1. คลิก **Deploy → New deployment**
2. เลือก Type: **Web app**
3. ตั้งค่าดังนี้:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. คลิก **Deploy** และ copy **Web app URL** ที่ได้

### 4. เชื่อมต่อกับ Botnoi
นำ Web app URL ไปใส่ใน Botnoi พร้อม parameters ดังนี้:

| Parameter | คำอธิบาย |
|---|---|
| `customer_name` | ชื่อผู้ใช้งาน |
| `stress_score` | คะแนนความเครียด |
| `result_text` | ผลการประเมิน |

**ตัวอย่าง URL:**
```
https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?customer_name=สมชาย&stress_score=7&result_text=ความเครียดสูง
```

## Response

Script จะส่งค่ากลับเป็น JSON:
```json
{
  "status": "success",
  "message": "บันทึกข้อมูลเรียบร้อยแล้ว"
}
```
