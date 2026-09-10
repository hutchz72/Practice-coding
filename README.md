# 🌱 C# Practice Notes

โน้ตสรุปการฝึกเขียน C# แบบเข้าใจง่าย ๆ เก็บไว้ทบทวนตอนลืม ✨

> 🎥 อ้างอิงวิดีโอ: [Practice-coding C#](https://www.youtube.com/watch?v=rab_1cFQUF4)

---

## 📦 เริ่มต้นโปรเจกต์

ต้องมี **.NET SDK** ก่อน เช็กเวอร์ชันด้วย:

```bash
dotnet --version
```

สร้าง console project ด้วย CLI:

```bash
dotnet new console -o ชื่อโปรเจกต์
# จะใส่ path ก็เติม / แล้วตามด้วยชื่ออีกทีได้
```

รันโปรเจกต์ (อย่าลืม `cd` เข้าไปที่โฟลเดอร์โปรเจกต์ก่อน):

```bash
dotnet run
```

| คำสั่ง | ใช้ทำอะไร |
|---|---|
| `dotnet new console -o name` | โปรเจกต์ console รันที่ command line |
| `dotnet new blazor -o name` | โปรเจกต์เว็บแบบ fullstack |

### 🔧 แก้ปัญหา `Console.ReadKey` ไม่ขึ้นปุ่ม

ไปที่โฟลเดอร์ `.vscode` → เปลี่ยนค่า `console` เป็น `integratedTerminal`
(ถ้ามีไฟล์อยู่แล้วแก้เลย ถ้าไม่มีก็สร้างเพิ่ม)

---

## 🧱 Class vs Record — เลือกใช้ยังไงดี?

| เลือกใช้ | เมื่อไหร่ |
|---|---|
| **class** | ออบเจกต์เปลี่ยนสถานะบ่อย มี method ซับซ้อน หรือเป็นตัวจัดการระบบ เช่น `OrderManager`, `UserService`, `PlayerScore` |
| **record** | ใช้ส่งต่อข้อมูล อ่านอย่างเดียว หรือเทียบค่ากัน เช่น DTO, `Employee`, `Product`, response จาก API |

---

## 🔤 ชนิดข้อมูล (Data Types)

| Type | เก็บอะไร | ตัวอย่าง |
|---|---|---|
| `int` | จำนวนเต็ม | `123`, `-123` |
| `double` | ทศนิยม | `19.99`, `-19.99` |
| `char` | ตัวอักษรเดียว (ใส่ `' '`) | `'a'`, `'B'` |
| `string` | ข้อความ (ใส่ `" "`) | `"Hello World"` |
| `bool` | จริง/เท็จ | `true`, `false` |
| `long` / `float` | ตัวเลขขนาดใหญ่ / ทศนิยม | — |
| `const` | ค่าคงที่ | — |

### 📛 กฎการตั้งชื่อตัวแปร
- ใช้ตัวอักษร ตัวเลข และ `_` ได้
- ต้องขึ้นต้นด้วยตัวอักษรหรือ `_`
- แนะนำให้ขึ้นต้นด้วยตัวพิมพ์เล็ก ห้ามมีช่องว่าง
- ตัวพิมพ์เล็ก-ใหญ่ถือว่าต่างกัน (`myVar` ≠ `myvar`)
- ห้ามใช้ keyword ของ C# เป็นชื่อตัวแปร (เช่น `int`, `double`)

### 🔁 การแปลงชนิดข้อมูล
- **Implicit casting**: แปลงอัตโนมัติ เมื่อแปลงจาก type เล็ก → type ใหญ่
- **Explicit casting**: ต้องแปลงเอง ใส่ type ในวงเล็บหน้าค่า เช่น `(int)9.78` → ได้ `9`
- ใช้ `Convert.ToString()`, `Convert.ToDouble()` ได้เช่นกัน

---

## ➕ Operators

| Operator | ตัวอย่าง | เทียบเท่ากับ |
|---|---|---|
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |
| `%=` | `x %= 3` | `x = x % 3` |
| `&=` | `x &= 3` | `x = x & 3` (คล้ายหารแล้วเอาผลหาร ไม่สนเศษ) |
| `\|=` | `x \|= 3` | `x = x \| 3` |
| `^=` | `x ^= 3` | `x = x ^ 3` |
| `>>=` | `x >>= 3` | `x = x >> 3` |
| `<<=` | `x <<= 3` | `x = x << 3` |

**Logical:** `&&` และ `||`

### 🧮 Math methods
```csharp
Math.Max(x, y)   // ค่ามากสุดระหว่าง x, y
Math.Min(x, y)   // ค่าน้อยสุดระหว่าง x, y
Math.Sqrt(x)     // รากที่สองของ x
Math.Abs(x)      // ค่าสัมบูรณ์ (บวกเสมอ)
Math.Round(x)    // ปัดเป็นจำนวนเต็มที่ใกล้สุด
```

---

## 🔡 String

```csharp
txt.ToUpper();
txt.ToLower();

string.Concat(firstName, lastName);

// String Interpolation
$"{user}"
```

- `myString[0]` → เข้าถึงตัวอักษรในตำแหน่งนั้นด้วย index
- `myString.IndexOf("e")` → หาตำแหน่ง index ของตัวอักษร
- `Substring()` → ตัดข้อความจากตำแหน่งที่กำหนด (มักใช้คู่กับ `IndexOf()`)

### Escape characters
| Code | ผลลัพธ์ | ความหมาย |
|---|---|---|
| `\'` | `'` | Single quote |
| `\"` | `"` | Double quote |
| `\\` | `\` | Backslash |

```csharp
string txt = "It\'s alright."; // => It's alright.
```

---

## ❓ Ternary Operator (แทน if-else)

```csharp
int time = 20;
string result = (time < 18) ? "Good day." : "Good evening.";
```

---

## 🔂 Loops

- **while** → เช็กเงื่อนไข**ก่อน**ทำ
- **do while** → ทำ**ก่อน**แล้วค่อยเช็กเงื่อนไข (รันอย่างน้อย 1 ครั้งเสมอ)

```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}

string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
foreach (string i in cars)
{
    Console.WriteLine(i);
}
```

- `break` และ `continue` ใช้ได้ทั้ง `for` และ `while`
  - `break` → หยุด loop ทันที
  - `continue` → ข้ามไปรอบถัดไป

---

## 📚 Array

```csharp
string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
int[] myNum = { 10, 20, 30, 40 };

Console.WriteLine(cars[0]);   // เข้าถึงสมาชิก
cars.Length;                  // ความยาว array
```

### วิธีสร้าง array หลายแบบ

```csharp
// สร้างว่างไว้ก่อน ใส่ค่าทีหลัง
string[] cars = new string[4];

// สร้างพร้อมค่า และระบุขนาด
string[] cars = new string[4] { "Volvo", "BMW", "Ford", "Mazda" };

// ไม่ต้องระบุขนาด
string[] cars = new string[] { "Volvo", "BMW", "Ford", "Mazda" };

// ไม่ใช้ new เลย
string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
```

### วน loop array

```csharp
for (int i = 0; i < cars.Length; i++)
{
    Console.WriteLine(cars[i]);
}

foreach (string i in cars)
{
    Console.WriteLine(i);
}

Array.Sort(cars); // เรียงลำดับให้อัตโนมัติ
```

### LINQ กับ Array

```csharp
using System.Linq;

int[] myNumbers = { 5, 1, 8, 9 };
Console.WriteLine(myNumbers.Max()); // ค่ามากสุด
Console.WriteLine(myNumbers.Min()); // ค่าน้อยสุด
Console.WriteLine(myNumbers.Sum()); // ผลรวม
```

### Multidimensional Array (2 มิติ)

```csharp
int[,] numbers = { { 1, 4, 2 }, { 3, 6, 8 } };
Console.WriteLine(numbers[0, 2]);  // Outputs 2

numbers[0, 0] = 5;
Console.WriteLine(numbers[0, 0]);  // Outputs 5

foreach (int i in numbers)
{
    Console.WriteLine(i);
}

for (int i = 0; i < numbers.GetLength(0); i++)
{
    for (int j = 0; j < numbers.GetLength(1); j++)
    {
        Console.WriteLine(numbers[i, j]);
    }
}
```

---

## 🛠️ Methods

```csharp
static void MyMethod()
{
    Console.WriteLine("I just got executed!");
}

static void Main(string[] args)
{
    MyMethod(); // Outputs "I just got executed!"
}
```

- **`static`** → method นี้เป็นของ class เอง ไม่ต้องสร้าง object ก่อนเรียกใช้
- **`void`** → ไม่มีการ return ค่า

### Parameter

```csharp
static void MyMethod(string fname, int age)
{
    Console.WriteLine(fname + " is " + age);
}

MyMethod("Liam", 5);   // Liam is 5
MyMethod("Jenny", 8);  // Jenny is 8
```

### Default parameter

```csharp
static void MyMethod(string country = "Norway")
{
    Console.WriteLine(country);
}

MyMethod("Sweden"); // Sweden
MyMethod();         // Norway (ค่า default)
```

---

## 🚗 Class & Object

สร้าง object จาก class ด้วยคีย์เวิร์ด `new`

```csharp
class Car
{
    string color = "red";

    static void Main(string[] args)
    {
        Car myObj = new Car();
        Console.WriteLine(myObj.color);
    }
}
```

> 💡 แต่ละ object ที่สร้างจาก class เดียวกัน จะมีค่าของตัวเองแยกกัน (`myObj1`, `myObj2` ไม่ยุ่งกัน)
>
> ถ้ามีหลาย class แนะนำแยกไฟล์กันเป็นคลาส ๆ ไป

### 🔐 Access Modifiers

| Modifier | เข้าถึงได้จากที่ไหน |
|---|---|
| `public` | ทุก class เข้าถึงได้ |
| `private` | เข้าถึงได้เฉพาะภายใน class เดียวกัน |
| `protected` | class เดียวกัน หรือ class ที่สืบทอดมา |
| `internal` | เฉพาะภายใน assembly เดียวกันเท่านั้น |

### 🎛️ Property (get / set)

**แบบเต็ม** (มี field แยก):
```csharp
class Person
{
    private string name; // field
    public string Name   // property
    {
        get { return name; }
        set { name = value; }
    }
}
```

**แบบสั้น (Auto-property):**
```csharp
class Person
{
    public string Name { get; set; }
}
```

ใช้งานเหมือนกัน:
```csharp
Person myObj = new Person();
myObj.Name = "Liam";
Console.WriteLine(myObj.Name);
```

---

## 🧬 Inheritance (การสืบทอด)

```csharp
class Vehicle // base class (parent)
{
    public string brand = "Ford";
    public void honk()
    {
        Console.WriteLine("Tuut, tuut!");
    }
}

class Car : Vehicle // derived class (child)
{
    public string modelName = "Mustang";
}

Car myCar = new Car();
myCar.honk();
Console.WriteLine(myCar.brand + " " + myCar.modelName);
```

> 🔒 ใส่ `sealed` หน้า class → class อื่นสืบทอดต่อไม่ได้

### `virtual` + `override`

```csharp
class Animal // parent
{
    public virtual void animalSound()
    {
        Console.WriteLine("The animal makes a sound");
    }
}

class Pig : Animal
{
    public override void animalSound()
    {
        Console.WriteLine("The pig says: wee wee");
    }
}

class Dog : Animal
{
    public override void animalSound()
    {
        Console.WriteLine("The dog says: bow wow");
    }
}
```

> ✏️ ถ้าใส่ `override` → method ของ child จะทับของ parent
> ถ้าไม่ใส่ → จะยังใช้ของ parent อยู่เหมือนเดิม

---

## 🎭 Abstraction

**Abstract class** สร้าง object ตรง ๆ ไม่ได้ ต้องถูก inherit ไปใช้เท่านั้น
**Abstract method** ไม่มี body ต้องไปเขียน body ใน class ลูกที่ override

```csharp
abstract class Animal
{
    public abstract void animalSound(); // ไม่มี body
    public void sleep()                 // method ปกติมี body ได้
    {
        Console.WriteLine("Zzz");
    }
}

class Pig : Animal
{
    public override void animalSound()
    {
        Console.WriteLine("The pig says: wee wee");
    }
}

Pig myPig = new Pig();
myPig.animalSound();
myPig.sleep();
```

---

## 🧩 Interface

interface คือ "abstract class ที่สมบูรณ์" มีแต่ method/property ที่ไม่มี body เลย

```csharp
interface IAnimal
{
    void animalSound(); // ไม่มี body
}

class Pig : IAnimal
{
    public void animalSound()
    {
        Console.WriteLine("The pig says: wee wee");
    }
}

Pig myPig = new Pig();
myPig.animalSound();
```

---

## 🎌 Enum

```csharp
enum Level
{
    Low,
    Medium,
    High
}
```

---

<p align="center">Made with 🧋 and a lot of <code>Console.WriteLine()</code></p>
