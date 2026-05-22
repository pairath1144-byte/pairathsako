ระบบนิเทศออนไลน์ โรงเรียนบ้านสากอ - PWA Responsive

ไฟล์ในชุดนี้
- index.html : แอปหน้าเว็บ/PWA
- Code.gs : Google Apps Script สำหรับเชื่อม Google Sheets
- manifest.json : ตั้งค่า PWA
- sw.js : Service Worker
- assets : รูปโลโก้และรูปบุคคลตามที่แนบ

Google Sheet ID:
1-ngmJm5RoUrayIsVpMVj_4dYPcEX1ZevhT-05wBrddE

วิธีติดตั้งให้ใช้งานจริง
1. เปิด Google Sheet ตามลิงก์ที่ให้มา
2. ไปที่ Extensions > Apps Script
3. วางโค้ดจากไฟล์ Code.gs
4. Run ฟังก์ชัน setupSheet หนึ่งครั้ง และอนุญาตสิทธิ์
5. Deploy > New deployment > Web app
6. Execute as: Me
7. Who has access: Anyone
8. คัดลอก Web app URL
9. เปิดระบบ > ตั้งค่าระบบ > วาง Web app URL > บันทึก

ระบบรองรับ
- เข้าสู่ระบบ
- หน้าหลักตามภาพตัวอย่าง
- บันทึกการนิเทศ
- ประเมินรายด้าน
- รายงานผลและพิมพ์ PDF
- แดชบอร์ดกราฟ
- ประวัติการนิเทศ
- จัดการผู้ใช้งานในเครื่อง
- ส่งออก CSV
- เชื่อม Google Sheets
- Responsive มือถือ/แท็บเล็ต/คอมพิวเตอร์
- PWA ติดตั้งบนมือถือได้
