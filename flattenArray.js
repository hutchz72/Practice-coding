const prompt = require("prompt-sync")();

// ฟังก์ชันแกะ Array ซ้อนกันให้แบนราบ (One-Liner)
const flatten = (arr) => arr.flat(Infinity);

function main() {
  console.log("=== โปรแกรม Flatten Nested Array ===");
  const rawInput = prompt("ใส่ Array เช่น [1, [2, [3, 4]], 5]: ");

  try {
    // แปลงข้อความที่พิมพ์เข้ามา ให้กลายเป็น Array จริงใน JS
    const parsed = JSON.parse(rawInput);

    if (!Array.isArray(parsed)) {
      console.log("ข้อผิดพลาด: ข้อมูลที่กรอกต้องครอบด้วย [ ] เพื่อเป็น Array");
      return;
    }

    const flatResult = flatten(parsed);

    console.log("\n--- ผลลัพธ์ ---");
    console.log("Input: ", parsed);
    console.log("Output:", flatResult);
  } catch (err) {
    console.log("รูปแบบไม่ถูกต้อง กรุณาใส่ในรูปแบบ Array เช่น [1, [2, 3], 4]");
  }
}

main();