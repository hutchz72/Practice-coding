// ==========================================
// โจทย์ที่ 1: คำนวณ OT ของพนักงาน (empeo HR System)
// ==========================================
function calculateOvertime(records) {
  // ดักจับ Edge Case กรณีส่งข้อมูลว่างเปล่ามา
  if (!records || !Array.isArray(records)) return [];

  return records.map((record) => {
    let otHours = 0;

    if (record.hoursWorked > 8) {
      let extraTime = record.hoursWorked - 8; // ชั่วโมงที่เกินจากงานปกติ
      let fullHours = Math.floor(extraTime); // ชั่วโมงเต็ม
      let minutes = (extraTime - fullHours) * 60; // แปลงเศษเป็นนาที

      // เงื่อนไข: ถ้าเศษนาที >= 30 ให้ปัดขึ้นเป็น 1 ชั่วโมง
      if (minutes >= 30) {
        otHours = fullHours + 1;
      } else {
        otHours = fullHours;
      }
    }

    return { empId: record.empId, otHours: otHours };
  });
}

// ==========================================
// โจทย์ที่ 2: หานักขายยอดเยี่ยม Top Salesman (Venio CRM)
// ==========================================
function getTopSalesman(salesData) {
  if (!salesData || !Array.isArray(salesData) || salesData.length === 0) {
    return null;
  }

  let totalByPerson = {};

  // 1. วน Loop สรุปยอดขายรวมของแต่ละคน
  salesData.forEach((item) => {
    if (totalByPerson[item.name]) {
      totalByPerson[item.name] += item.amount;
    } else {
      totalByPerson[item.name] = item.amount;
    }
  });

  // 2. เปรียบเทียบหายอดขายที่สูงที่สุด
  let topSalesman = "";
  let maxAmount = 0;

  for (let name in totalByPerson) {
    if (totalByPerson[name] > maxAmount) {
      maxAmount = totalByPerson[name];
      topSalesman = name;
    }
  }

  return { name: topSalesman, totalAmount: maxAmount };
}

// ==========================================
// โจทย์ที่ 3: ค้นหา Email ปลอดภัย ป้องกัน Crash (Debugging)
// ==========================================
function findUserEmail(users, targetId) {
  // ป้องกันกรณี users ที่ส่งเข้ามาเป็น null หรือไม่ใช่ Array
  if (!users || !Array.isArray(users)) return "Invalid Input";

  // ใช้ .find() แทนการวน loop เอง ช่วยป้องกัน Index Out of Bounds และอ่านง่ายขึ้น
  const user = users.find((u) => u && u.id === targetId);

  // เช็กว่าเจอ user ไหม ป้องกันการดึงค่าจาก undefined (NullPointerException)
  return user ? user.email : "User Not Found";
}

// ==========================================
// Section: ทดสอบการทำงาน ( Test Run )
// ==========================================

console.log("--- 1. ผลลัพธ์การคำนวณ OT ---");
const attendanceData = [
  { empId: "E01", hoursWorked: 9.5 }, // เกิน 1.5 ชม. (30 นาที) -> ควรได้ OT 2
  { empId: "E02", hoursWorked: 8.2 }, // เกิน 0.2 ชม. (12 นาที) -> ควรได้ OT 0
  { empId: "E03", hoursWorked: 11.0 }, // เกิน 3.0 ชม. -> ควรได้ OT 3
];
console.log(calculateOvertime(attendanceData));

console.log("\n--- 2. ผลลัพธ์การหา Top Salesman ---");
const salesList = [
  { name: "Aom", amount: 500 },
  { name: "Bank", amount: 300 },
  { name: "Aom", amount: 700 }, // ยอดรวม Aom = 1200
  { name: "Bank", amount: 400 }, // ยอดรวม Bank = 700
];
console.log(getTopSalesman(salesList));

console.log("\n--- 3. ผลลัพธ์การค้นหา User Email ---");
const userList = [
  { id: 101, email: "dev1@gofive.co" },
  { id: 102, email: "dev2@gofive.co" },
];
console.log("ค้นหา ID 102:", findUserEmail(userList, 102));
console.log("ค้นหา ID 999 (ไม่มีในระบบ):", findUserEmail(userList, 999));