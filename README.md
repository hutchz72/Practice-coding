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

# C# Fundamentals — สรุปคำถามพื้นฐานที่ควรรู้
 
เอกสารนี้สรุปแนวคิดพื้นฐานของ C# / .NET จำนวน 15 หัวข้อ พร้อมคำอธิบายและตัวอย่างโค้ด เหมาะสำหรับทบทวนความรู้และเตรียมสัมภาษณ์งาน
 
## สารบัญ
 
1. [Value Type vs Reference Type](#1-value-type-vs-reference-type)
2. [`int`, `struct`, `class` และเหตุผลของการออกแบบ struct](#2-int-struct-class-และเหตุผลของการออกแบบ-struct)
3. [4 หลักการของ OOP](#3-4-หลักการของ-oop)
4. [`abstract class` vs `interface`](#4-abstract-class-vs-interface)
5. [`override` vs `overload`](#5-override-vs-overload)
6. [`try-catch-finally`](#6-try-catch-finally)
7. [`String` vs `StringBuilder`](#7-string-vs-stringbuilder)
8. [Boxing และ Unboxing](#8-boxing-และ-unboxing)
9. [`List<T>`, `Array`, `Dictionary<TKey,TValue>`](#9-listt-array-dictionarytkeytvalue)
10. [`IEnumerable` vs `IQueryable`](#10-ienumerable-vs-iqueryable)
11. [`async` / `await` และ Deadlock](#11-async--await-และ-deadlock)
12. [`==` vs `.Equals()`](#12--vs-equals)
13. [Access Modifiers](#13-access-modifiers)
14. [Garbage Collection](#14-garbage-collection)
15. [`static` class / method](#15-static-class--method)
---
 
## 1. Value Type vs Reference Type
 
### แนวคิดหลัก
 
| หัวข้อ | Value Type | Reference Type |
|---|---|---|
| สิ่งที่ตัวแปรเก็บ | **ตัวข้อมูลจริง** | **ที่อยู่ (reference)** ที่ชี้ไปยังข้อมูลบน heap |
| การ copy / assign | copy ค่าทั้งก้อน (ต่างคนต่างมีสำเนาของตัวเอง) | copy แค่ reference (ชี้ไปที่ object เดียวกัน) |
| ค่า `null` | ไม่ได้ (ต้องใช้ `int?` / `Nullable<T>`) | ได้ |
| ตัวอย่าง | `int`, `double`, `bool`, `char`, `decimal`, `enum`, `struct` | `class`, `string`, `array`, `delegate`, `interface`, `object`, `record` |
| ต้นแบบ | สืบทอดจาก `System.ValueType` | สืบทอดจาก `System.Object` โดยตรง |
 
> **ข้อควรระวังเรื่อง stack/heap:** หลายตำราบอกว่า "value type อยู่บน stack, reference type อยู่บน heap" ซึ่งเป็นการสรุปแบบง่ายเกินไป ความจริงคือ value type จะถูกเก็บ **ตรงที่ประกาศตัวแปร** เช่น ถ้าเป็น local variable ก็อยู่บน stack แต่ถ้าเป็น field ของ class (ซึ่งอยู่บน heap) ตัว value type ก็จะอยู่บน heap ภายใน object นั้น
 
### ตัวอย่าง Value Type
 
```csharp
int a = 10;
int b = a;     // copy ค่า 10 ไปให้ b
b = 99;
 
Console.WriteLine(a); // 10  (a ไม่ได้รับผลกระทบ)
Console.WriteLine(b); // 99
```
 
### ตัวอย่าง Reference Type
 
```csharp
class Person
{
    public string Name { get; set; }
}
 
var p1 = new Person { Name = "Somchai" };
var p2 = p1;          // copy แค่ reference — p1 และ p2 ชี้ไป object เดียวกัน
p2.Name = "Somsri";
 
Console.WriteLine(p1.Name); // Somsri  (p1 ก็เปลี่ยนด้วย)
```
 
### การส่งค่าเข้า method
 
```csharp
void ChangeNumber(int n)   { n = 100; }              // แก้แค่สำเนา
void ChangeName(Person p)  { p.Name = "Changed"; }   // แก้ object จริง (เพราะ reference ชี้ที่เดียวกัน)
void Reassign(Person p)    { p = new Person(); }     // ไม่มีผลกับตัวแปรข้างนอก (reassign แค่ reference ที่เป็นสำเนา)
```
 
ถ้าต้องการให้ method แก้ตัวแปรของผู้เรียกได้จริง ให้ใช้ `ref` หรือ `out`
 
---
 
## 2. `int`, `struct`, `class` และเหตุผลของการออกแบบ struct
 
| ประเภท | เป็น Value / Reference | หมายเหตุ |
|---|---|---|
| `int` | **Value Type** | จริงๆ คือ alias ของ `System.Int32` ซึ่งเป็น `struct` |
| `struct` | **Value Type** | ผู้ใช้สร้างเองได้ |
| `class` | **Reference Type** | |
 
### ทำไม struct ถึงถูกออกแบบเป็น value type?
 
เป้าหมายคือให้มี **ชนิดข้อมูลขนาดเล็กที่เบา** โดย:
 
1. **ไม่ต้อง allocate บน heap แยกต่างหาก** — ลดภาระของ Garbage Collector (เช่น array ของ struct คือหน่วยความจำก้อนเดียวเรียงต่อกัน ไม่ใช่ array ของ pointer ที่ชี้ไปหลาย object)
2. **มี semantic แบบ "ค่า"** — `Point(1,2)` สองตัวที่มีค่าเท่ากันถือว่าเท่ากัน ไม่ต้องสนใจว่าเป็น "ตัวเดียวกัน" หรือไม่ เหมือนที่ `int` ทำงาน
3. **cache locality ดี** — ข้อมูลอยู่ติดกัน CPU อ่านได้เร็ว
4. **ไม่มี overhead ของ object header** และไม่ต้อง dereference pointer
ตัวอย่างใน .NET เองที่เป็น struct: `DateTime`, `TimeSpan`, `Guid`, `Nullable<T>`, `KeyValuePair<,>`, `Span<T>`
 
### ตัวอย่าง
 
```csharp
public readonly struct Point
{
    public int X { get; }
    public int Y { get; }
 
    public Point(int x, int y) => (X, Y) = (x, y);
}
 
var a = new Point(1, 2);
var b = a;   // copy ทั้งก้อน — a และ b เป็นอิสระต่อกัน
```
 
### แนวทางเลือกใช้ struct (Microsoft Guidelines)
 
ควรใช้ struct เมื่อ **ครบทุกข้อ** ต่อไปนี้:
 
- แทน **ค่าเดี่ยวๆ ในเชิงตรรกะ** (เช่น พิกัด, สี, จำนวนเงิน)
- ขนาดเล็ก (โดยทั่วไป **ไม่เกิน ~16 bytes**)
- **Immutable** (ควรใช้ `readonly struct`)
- ไม่ต้องถูก box บ่อยๆ
### ข้อจำกัดของ struct
 
- สืบทอดจาก struct/class อื่นไม่ได้ (แต่ **implement interface ได้**)
- มี default value เสมอ (ทุก field เป็นศูนย์) ซึ่งอาจเป็นสถานะที่ไม่ถูกต้องสำหรับ domain ของคุณ
- ถ้าใหญ่เกินไป การ copy ทุกครั้งที่ส่งเข้า method จะช้ากว่า class
- mutable struct เป็นต้นเหตุของบั๊กที่หาตัวยาก เพราะแก้ไข "สำเนา" โดยไม่รู้ตัว
---
 
## 3. 4 หลักการของ OOP
 
### 3.1 Encapsulation (การห่อหุ้ม)
 
ซ่อนข้อมูลภายในและเปิดเผยเฉพาะส่วนที่จำเป็นผ่าน interface ของ object เพื่อป้องกันไม่ให้ภายนอกทำให้สถานะเสียหาย
 
```csharp
public class BankAccount
{
    private decimal _balance;           // ซ่อนไว้ แก้ตรงๆ จากข้างนอกไม่ได้
 
    public decimal Balance => _balance; // อ่านได้อย่างเดียว
 
    public void Deposit(decimal amount)
    {
        if (amount <= 0) throw new ArgumentException("จำนวนเงินต้องมากกว่า 0");
        _balance += amount;
    }
 
    public void Withdraw(decimal amount)
    {
        if (amount > _balance) throw new InvalidOperationException("ยอดเงินไม่พอ");
        _balance -= amount;
    }
}
```
 
**ประโยชน์:** บังคับ business rule ไว้ที่เดียว, เปลี่ยน implementation ภายในได้โดยไม่กระทบผู้ใช้
 
### 3.2 Inheritance (การสืบทอด)
 
class ลูกรับ member ของ class แม่มาใช้และต่อยอดได้ ใช้แทนความสัมพันธ์แบบ **"is-a"**
 
```csharp
public class Animal
{
    public string Name { get; set; }
    public void Eat() => Console.WriteLine($"{Name} กำลังกิน");
}
 
public class Dog : Animal
{
    public void Bark() => Console.WriteLine($"{Name}: โฮ่ง!");
}
 
var d = new Dog { Name = "Mali" };
d.Eat();   // ใช้ของ Animal
d.Bark();  // ของ Dog เอง
```
 
> **คำแนะนำ:** C# สืบทอด class ได้ทีละ 1 class เท่านั้น และควร *"Favor composition over inheritance"* คือถ้าเป็นความสัมพันธ์แบบ "has-a" ให้ประกอบ object เข้าด้วยกันแทนการสืบทอด
 
### 3.3 Polymorphism (พหุสัณฐาน)
 
object ต่างชนิดตอบสนองต่อ "คำสั่งเดียวกัน" ได้ต่างกัน โดยผู้เรียกไม่ต้องรู้ชนิดจริง
 
```csharp
public abstract class Shape
{
    public abstract double Area();
}
 
public class Circle : Shape
{
    public double R { get; init; }
    public override double Area() => Math.PI * R * R;
}
 
public class Rectangle : Shape
{
    public double W { get; init; }
    public double H { get; init; }
    public override double Area() => W * H;
}
 
Shape[] shapes = { new Circle { R = 2 }, new Rectangle { W = 3, H = 4 } };
foreach (var s in shapes)
    Console.WriteLine(s.Area());   // เรียก Area() เหมือนกัน แต่ทำงานต่างกันตามชนิดจริง (runtime)
```
 
### 3.4 Abstraction (นามธรรม)
 
แสดงเฉพาะ "สิ่งที่ทำได้" และซ่อน "วิธีทำ" โดยกำหนดเป็น contract ผ่าน `abstract class` หรือ `interface`
 
```csharp
public interface IMessageSender
{
    void Send(string to, string message);
}
 
public class EmailSender : IMessageSender
{
    public void Send(string to, string message) { /* ส่งผ่าน SMTP */ }
}
 
public class SmsSender : IMessageSender
{
    public void Send(string to, string message) { /* ส่งผ่าน SMS gateway */ }
}
 
public class NotificationService
{
    private readonly IMessageSender _sender;
    public NotificationService(IMessageSender sender) => _sender = sender;
 
    public void Notify(string user) => _sender.Send(user, "สวัสดี");
    // NotificationService ไม่ต้องรู้เลยว่าส่งแบบไหน
}
```
 
### ความแตกต่างระหว่าง Encapsulation กับ Abstraction
 
- **Encapsulation** = *ปกป้องข้อมูล* ด้วยการซ่อน state ภายใน (เน้น "how it's protected")
- **Abstraction** = *ลดความซับซ้อน* ด้วยการเปิดเผยแค่สิ่งจำเป็น (เน้น "what it does")
---
 
## 4. `abstract class` vs `interface`
 
| หัวข้อ | `abstract class` | `interface` |
|---|---|---|
| ความหมายเชิงออกแบบ | "**is-a**" มีพื้นฐานร่วมกัน | "**can-do**" มีความสามารถตาม contract |
| สืบทอด/implement หลายตัว | สืบทอดได้ **1 class** | implement ได้ **หลาย interface** |
| Field / state | **มีได้** | ไม่มี instance field |
| Constructor | มีได้ | ไม่มี |
| Method ที่มี implementation | มีได้ | มีได้ตั้งแต่ C# 8 (*default interface method*) แต่ไม่ควรใช้พร่ำเพรื่อ |
| Access modifier ของ member | ใช้ได้ทุกแบบ | โดยทั่วไปเป็น `public` |
| สร้าง instance ตรงๆ | ไม่ได้ | ไม่ได้ |
| เหมาะกับ | แชร์โค้ดและ state ระหว่าง class ที่เกี่ยวข้องกันใกล้ชิด | กำหนด contract ให้ class ที่ไม่เกี่ยวกันมา implement, ทำ DI / mock test |
 
### ตัวอย่าง
 
```csharp
// abstract class — แชร์โค้ด + state ร่วม
public abstract class Employee
{
    public string Name { get; }
    protected Employee(string name) => Name = name;
 
    public abstract decimal CalculateSalary();         // ลูกต้อง implement
    public void PrintName() => Console.WriteLine(Name); // โค้ดร่วมที่ใช้ได้เลย
}
 
public class FullTimeEmployee : Employee
{
    public FullTimeEmployee(string name) : base(name) { }
    public override decimal CalculateSalary() => 30000m;
}
 
// interface — ความสามารถที่ class ไม่เกี่ยวกันก็มีได้
public interface IExportable { string ExportToCsv(); }
public interface IAuditable  { DateTime CreatedAt { get; } }
 
public class Invoice : IExportable, IAuditable
{
    public DateTime CreatedAt { get; } = DateTime.UtcNow;
    public string ExportToCsv() => "...";
}
```
 
### เลือกใช้แบบไหนเมื่อไหร่?
 
- เลือก **interface** เมื่อ
  - ต้องการ contract ที่ class ต่างตระกูลกัน implement ร่วมกันได้
  - ต้องการให้ test ง่าย (mock) หรือใช้ Dependency Injection
  - ต้อง implement หลายความสามารถพร้อมกัน
- เลือก **abstract class** เมื่อ
  - มี **โค้ดหรือ state ร่วม** ที่อยากให้ลูกใช้ซ้ำ
  - ต้องการควบคุม lifecycle เช่น constructor, template method pattern
  - class เหล่านั้นเป็น "ตระกูลเดียวกัน" จริงๆ
> **หลักปฏิบัติ:** ถ้าไม่แน่ใจ ให้เริ่มจาก interface เพราะยืดหยุ่นกว่า ค่อยเพิ่ม abstract class base ถ้าพบว่ามีโค้ดซ้ำที่ต้องแชร์ (ใช้ร่วมกันได้: abstract class ที่ implement interface)
 
---
 
## 5. `override` vs `overload`
 
| | Override | Overload |
|---|---|---|
| ความหมาย | class ลูก **เขียนทับ** พฤติกรรมของ method ใน class แม่ | สร้าง method **ชื่อเดียวกัน แต่ parameter ต่างกัน** ใน class เดียวกัน |
| signature | **เหมือนเดิมทุกประการ** | ต้อง **ต่างกัน** (จำนวน/ชนิด/ลำดับของ parameter) |
| Polymorphism | **Runtime** (dynamic binding) | **Compile-time** (static binding) |
| keyword | `virtual` / `abstract` ที่แม่ + `override` ที่ลูก | ไม่ต้องใช้ keyword พิเศษ |
| return type อย่างเดียวต่างกัน | — | **ไม่ถือว่า overload** |
 
### Override
 
```csharp
public class Animal
{
    public virtual void Speak() => Console.WriteLine("...");
}
 
public class Cat : Animal
{
    public override void Speak() => Console.WriteLine("เมี้ยว");
}
 
Animal a = new Cat();
a.Speak();   // "เมี้ยว"  ← ตัดสินใจตอนรันตามชนิดจริงของ object
```
 
### Overload
 
```csharp
public class Calculator
{
    public int Add(int a, int b)             => a + b;
    public double Add(double a, double b)    => a + b;
    public int Add(int a, int b, int c)      => a + b + c;
}
 
var c = new Calculator();
c.Add(1, 2);       // เรียกตัวแรก
c.Add(1.5, 2.5);   // เรียกตัวที่สอง  ← compiler เลือกตั้งแต่ตอน compile
```
 
### แถม: `new` (method hiding) ต่างจาก `override`
 
```csharp
public class Base  { public virtual void Hi() => Console.WriteLine("Base"); }
public class A : Base { public override void Hi() => Console.WriteLine("A"); }
public class B : Base { public new void Hi()      => Console.WriteLine("B"); }
 
Base x = new A(); x.Hi();  // "A"    (override → ดูตามชนิดจริง)
Base y = new B(); y.Hi();  // "Base" (new → ดูตามชนิดของตัวแปร)
```
 
โดยทั่วไป **หลีกเลี่ยง `new` hiding** เพราะทำให้เกิดพฤติกรรมที่สับสน
 
---
 
## 6. `try-catch-finally`
 
### โครงสร้างและลำดับการทำงาน
 
```csharp
try
{
    // โค้ดที่อาจเกิด exception
}
catch (FileNotFoundException ex)
{
    // จัดการ exception เฉพาะชนิดนี้
}
catch (Exception ex)
{
    // จัดการ exception อื่นๆ (ต้องวางไว้ท้ายสุด)
}
finally
{
    // ทำงาน "เสมอ" ไม่ว่าจะมี exception หรือไม่
}
```
 
**ลำดับ:**
 
1. รันโค้ดใน `try`
2. ถ้าเกิด exception → หา `catch` แรกที่ชนิดตรง (เรียงจากบนลงล่าง) แล้วรัน
3. `finally` รัน **เสมอ** ไม่ว่ากรณีใด — ปกติ, เกิด exception, หรือแม้แต่มี `return` ใน `try`/`catch`
### ตัวอย่างการทำงานของ `finally`
 
```csharp
int Test()
{
    try
    {
        return 1;
    }
    finally
    {
        Console.WriteLine("finally ยังรันอยู่");  // พิมพ์ก่อนที่ method จะ return จริง
    }
}
```
 
> `finally` จะ **ไม่รัน** เฉพาะกรณีที่ process ตายทันที เช่น `Environment.FailFast()`, ไฟดับ หรือเกิด `StackOverflowException`
 
### เมื่อไหร่ควรใช้ `finally`?
 
ใช้เพื่อ **คืนทรัพยากร (cleanup)** ที่ต้องทำเสมอ เช่น ปิดไฟล์ ปิด connection ปลดล็อก
 
```csharp
SqlConnection? conn = null;
try
{
    conn = new SqlConnection(connStr);
    conn.Open();
    // ... ทำงานกับ DB
}
catch (SqlException ex)
{
    Log(ex);
    throw;
}
finally
{
    conn?.Dispose();   // ปิดทุกกรณี
}
```
 
> **ในทางปฏิบัติ** ถ้า object implement `IDisposable` ให้ใช้ `using` แทน เพราะ compiler แปลงเป็น `try-finally` ให้อัตโนมัติ และอ่านง่ายกว่า
>
> ```csharp
> using var conn = new SqlConnection(connStr);
> conn.Open();
> ```
 
### Best Practices
 
- **จับเฉพาะ exception ที่รู้วิธีจัดการ** อย่า `catch (Exception)` แล้วเงียบ (swallow)
- ถ้าต้อง log แล้วส่งต่อ ใช้ **`throw;`** (รักษา stack trace) **ไม่ใช่ `throw ex;`** (ทำ stack trace หาย)
- อย่าใช้ exception ควบคุม flow ปกติ (มี cost สูง) เช่น ใช้ `int.TryParse` แทนการ `try { int.Parse }`
- ใช้ **exception filter** เพื่อจับตามเงื่อนไข: `catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.NotFound)`
- อย่า `return`/`throw` ภายใน `finally` เพราะจะกลบ exception เดิม
---
 
## 7. `String` vs `StringBuilder`
 
| | `string` | `StringBuilder` |
|---|---|---|
| Mutability | **Immutable** (แก้ไม่ได้) | **Mutable** (แก้ใน buffer เดิมได้) |
| ทุกครั้งที่ "แก้" | สร้าง string **ใหม่** ทั้งก้อน | แก้ใน buffer ภายใน |
| เหมาะกับ | ข้อความสั้น การต่อไม่กี่ครั้ง | ต่อ/แก้ข้อความ **จำนวนมาก** โดยเฉพาะในลูป |
| Namespace | `System` | `System.Text` |
 
### ทำไมต่อ string ในลูปด้วย `+` ถึงไม่ดี?
 
เพราะ `string` เป็น immutable ทุกครั้งที่ `s += "x"` จะเกิดสิ่งนี้:
 
1. จอง memory ก้อนใหม่ขนาด `ความยาวเดิม + ความยาวที่ต่อ`
2. **copy** ข้อมูลเดิมทั้งหมดไปใส่
3. ทิ้ง string เก่าให้ GC เก็บ
ถ้าต่อ N ครั้ง จะ copy ข้อมูลรวมกันประมาณ `1 + 2 + 3 + ... + N` ≈ **O(N²)** และสร้างขยะจำนวนมากให้ GC
 
```csharp
// ❌ ไม่ดี: สร้าง string ใหม่ 100,000 ก้อน
string s = "";
for (int i = 0; i < 100_000; i++)
    s += i;
 
// ✅ ดี: ใช้ buffer เดียว ~ O(N)
var sb = new StringBuilder();
for (int i = 0; i < 100_000; i++)
    sb.Append(i);
string result = sb.ToString();
```
 
### ข้อควรรู้เพิ่มเติม
 
- การต่อ string **ไม่กี่ตัวนอกลูป** ใช้ `+` หรือ string interpolation (`$"{a} {b}"`) ได้ตามปกติ ไม่ต้องใช้ `StringBuilder` (อ่านง่ายกว่า และ compiler optimize ให้)
- การต่อ **ค่าคงที่ (constant)** compiler จะรวมให้ตอน compile
- ถ้ามี collection อยู่แล้ว `string.Join(", ", items)` มักเหมาะกว่าการวนลูปต่อเอง
- กรณีต้องการ performance สูงมากอาจใช้ `Span<char>`, `string.Create` หรือ `StringBuilder` ที่กำหนด capacity เริ่มต้น (`new StringBuilder(capacity)`) เพื่อลดการขยาย buffer
---
 
## 8. Boxing และ Unboxing
 
### คืออะไร?
 
- **Boxing** = การแปลง **value type → `object`** (หรือ interface ที่ value type นั้น implement) โดย runtime จะ **จอง object บน heap** แล้ว copy ค่าเข้าไปห่อไว้
- **Unboxing** = การแปลง **`object` → value type** โดยดึงค่าออกจากกล่อง (ต้อง cast เป็น **ชนิดเดิมเป๊ะ**)
```csharp
int i = 123;
object o = i;        // Boxing   → สร้าง object บน heap + copy ค่า
int j = (int)o;      // Unboxing → ตรวจชนิด + copy ค่ากลับ
 
long k = (long)o;    // ❌ InvalidCastException! ต้อง unbox เป็น int ก่อน: (long)(int)o
```
 
### ผลต่อ Performance
 
- **allocate บน heap** ทุกครั้งที่ box → เพิ่มภาระให้ GC (โดยเฉพาะถ้าเกิดในลูปหรือ hot path)
- **copy ข้อมูล** ตอน box และ unbox
- ตอน unbox ต้อง **ตรวจชนิด** ที่ runtime
- ช้ากว่าการใช้ value type ตรงๆ หลายเท่า และสร้างขยะที่ทำให้ GC ทำงานบ่อยขึ้น
### จุดที่ boxing เกิดโดยไม่รู้ตัว
 
```csharp
// 1) collection แบบ non-generic
var list = new ArrayList();
list.Add(42);                 // box ทุกครั้ง
 
// 2) ส่ง value type เข้า parameter ที่เป็น object
Console.WriteLine("val: {0}", 42);       // box (ใน overload ที่รับ object)
string.Format("{0}", 42);                // box
 
// 3) แปลง struct ไปเป็น interface
IComparable c = 5;                        // box
 
// 4) เรียก method ของ object บน value type บางกรณี
//    เช่น struct ที่ไม่ override GetHashCode/ToString/Equals
```
 
### วิธีหลีกเลี่ยง
 
```csharp
// ✅ ใช้ generic collection
var list = new List<int>();
list.Add(42);                  // ไม่ box
 
// ✅ ใช้ generic method / generic constraint
void Print<T>(T value) where T : struct { /* ... */ }
 
// ✅ string interpolation (ใน .NET ยุคใหม่ใช้ interpolated string handler ช่วยลด boxing)
string s = $"val: {42}";
 
// ✅ override ToString/Equals/GetHashCode ใน struct ของคุณเอง
// ✅ implement IEquatable<T> เพื่อเปรียบเทียบโดยไม่ box
```
 
---
 
## 9. `List<T>`, `Array`, `Dictionary<TKey,TValue>`
 
| | `Array` (`T[]`) | `List<T>` | `Dictionary<TKey,TValue>` |
|---|---|---|---|
| ขนาด | **คงที่** ตอนสร้าง | **ปรับขยายได้** | ปรับขยายได้ |
| การเข้าถึง | ด้วย index `O(1)` | ด้วย index `O(1)` | ด้วย **key** `O(1)` โดยเฉลี่ย |
| ค้นหาค่า | `O(n)` | `O(n)` (`Contains`, `IndexOf`) | ค้นหา key `O(1)` เฉลี่ย |
| เพิ่มท้าย | ทำไม่ได้ (ต้องสร้างใหม่) | `O(1)` amortized | `O(1)` เฉลี่ย |
| แทรก/ลบกลาง | ไม่ได้ | `O(n)` (ต้องเลื่อนสมาชิก) | ลบด้วย key `O(1)` เฉลี่ย |
| ลำดับ | มีลำดับ | มีลำดับ | **ไม่รับประกันลำดับ** |
| Key ซ้ำ | — | — | **ไม่ได้** (เกิด exception ถ้าใช้ `Add`) |
 
### ตัวอย่าง
 
```csharp
// Array — ขนาดคงที่ รู้จำนวนแน่นอน
int[] scores = new int[5] { 80, 90, 75, 60, 100 };
 
// List<T> — ชุดข้อมูลที่จำนวนเปลี่ยนไปเรื่อยๆ
var names = new List<string> { "Ann", "Bob" };
names.Add("Cat");
names.Remove("Bob");
 
// Dictionary — ค้นหาด้วย key เร็วๆ
var users = new Dictionary<int, string>
{
    [1] = "Ann",
    [2] = "Bob"
};
 
if (users.TryGetValue(2, out var name))
    Console.WriteLine(name);   // Bob
```
 
### เลือกใช้ในสถานการณ์ไหน?
 
- **`Array`**
  - ทราบขนาดแน่นอนและไม่เปลี่ยน
  - ต้องการ performance สูงสุด / memory น้อยที่สุด
  - ทำงานกับข้อมูลดิบ, buffer, หรือ API ที่รับ array
- **`List<T>`**
  - ค่าเริ่มต้นสำหรับ "ลิสต์ของสิ่งของ" ส่วนใหญ่
  - ต้องเพิ่ม/ลบสมาชิกบ่อย, วนลูป, เรียงลำดับ
- **`Dictionary<TKey,TValue>`**
  - ต้อง **ค้นหา/อ้างอิงด้วย key** บ่อยๆ เช่น lookup ตาม Id, cache, นับความถี่
  - ถ้าใช้ `list.Find(...)` หรือ `list.FirstOrDefault(x => x.Id == id)` ซ้ำๆ บนข้อมูลเยอะ → ควรเปลี่ยนเป็น Dictionary
### Tips
 
- ใช้ `TryGetValue` แทนการเช็ก `ContainsKey` แล้วค่อย index เพื่อลดการค้นหาซ้ำสองรอบ
- ถ้าต้องการแค่ "มี/ไม่มี" โดยไม่ต้องมี value ให้ใช้ **`HashSet<T>`**
- ถ้ารู้ขนาดโดยประมาณล่วงหน้า ระบุ `capacity` ตอนสร้าง `List<T>`/`Dictionary` เพื่อลดการ resize
- key ของ Dictionary ต้อง implement `GetHashCode`/`Equals` อย่างถูกต้อง และควร **immutable**
---
 
## 10. `IEnumerable` vs `IQueryable`
 
| | `IEnumerable<T>` | `IQueryable<T>` |
|---|---|---|
| Namespace | `System.Collections.Generic` | `System.Linq` |
| ประมวลผลที่ไหน | **ในหน่วยความจำ (in-memory)** ฝั่ง application | **ที่แหล่งข้อมูล** เช่น ฐานข้อมูล (แปลงเป็น SQL) |
| รับ lambda เป็น | `Func<T, bool>` (delegate) | `Expression<Func<T, bool>>` (expression tree) |
| เหมาะกับ | collection ใน memory (List, Array ฯลฯ) | query provider เช่น EF Core, LINQ to SQL |
| การกรองข้อมูล | ดึงข้อมูลมาก่อน แล้วค่อยกรองใน memory | ส่งเงื่อนไขไปกรองที่ต้นทาง |
 
> `IQueryable<T>` สืบทอดมาจาก `IEnumerable<T>` อีกที
 
### ตัวอย่างด้วย Entity Framework
 
```csharp
// IQueryable — filter ที่ฐานข้อมูล
IQueryable<User> q = db.Users.Where(u => u.Age > 18);
// SQL: SELECT ... FROM Users WHERE Age > 18   ✅ ส่งมาเฉพาะแถวที่ต้องการ
 
// IEnumerable — ดึงมาทั้งหมดก่อน แล้วกรองใน memory
IEnumerable<User> e = db.Users.AsEnumerable().Where(u => u.Age > 18);
// SQL: SELECT ... FROM Users   ❌ ดึงทุกแถวมาก่อน แล้วค่อยกรองใน C#
```
 
### Deferred Execution (การทำงานแบบเลื่อนเวลา)
 
ทั้งคู่ **ยังไม่ทำงานจนกว่าจะถูก "enumerate"** เช่น `foreach`, `ToList()`, `ToArray()`, `Count()`, `First()`
 
```csharp
var query = db.Users.Where(u => u.IsActive);   // ยังไม่ยิง SQL
var list  = query.ToList();                    // ตรงนี้ถึงจะยิง SQL จริง
```
 
### ข้อควรระวัง
 
- **อย่า `ToList()` / `AsEnumerable()` เร็วเกินไป** ก่อนจะ filter/paging เสร็จ เพราะจะดึงข้อมูลทั้งตารางมาไว้ใน memory
- ฟังก์ชันที่ provider แปลงเป็น SQL ไม่ได้ (เช่น method ที่เราเขียนเอง) จะเกิด error หรือถูกบังคับให้ประมวลผลฝั่ง client
- ถ้า method ของคุณ **return `IQueryable`** ผู้เรียกจะต่อ query เพิ่มได้ แต่ทำให้ขอบเขตของ data layer รั่วออกมา ถ้าไม่ต้องการ ให้ return `IEnumerable`/`List` ที่ materialize แล้ว
- การวนซ้ำ `IEnumerable` ที่มาจาก query หลายรอบจะ **execute query ซ้ำทุกรอบ** ถ้าจะใช้ซ้ำให้ `ToList()` เก็บไว้ก่อน
---
 
## 11. `async` / `await` และ Deadlock
 
### แนวคิดแบบเข้าใจง่าย
 
ลองนึกถึง **ร้านกาแฟ**:
 
- **แบบ synchronous:** พนักงานรับออเดอร์แล้ว **ยืนรอ** เครื่องชงกาแฟจนเสร็จ ลูกค้าคนต่อไปต้องรอไปด้วย
- **แบบ asynchronous:** พนักงานกดสั่งเครื่องชง แล้ว **ไปรับลูกค้าคนอื่นต่อ** พอกาแฟเสร็จค่อยกลับมาส่ง
`async/await` คือการบอกว่า "งานนี้ต้องรอ (I/O เช่น เรียก API, อ่าน DB, อ่านไฟล์) ระหว่างรอ **ปล่อย thread ให้ไปทำอย่างอื่นก่อน** แล้วค่อยกลับมาทำต่อเมื่อพร้อม" ทำให้ UI ไม่ค้าง และ server รองรับ request ได้มากขึ้นด้วย thread จำนวนเท่าเดิม
 
```csharp
public async Task<string> GetDataAsync()
{
    using var client = new HttpClient();
    string html = await client.GetStringAsync("https://example.com");  // ระหว่างรอ thread ไม่ถูกบล็อก
    return html.ToUpper();   // ทำต่อเมื่อได้ผลลัพธ์แล้ว
}
```
 
- `async` : ทำเครื่องหมายว่า method นี้ใช้ `await` ได้
- `await` : "รอผลของ Task นี้แบบไม่บล็อก thread" แล้วกลับมาทำบรรทัดถัดไป
- `Task` / `Task<T>` : ตัวแทนของงานที่กำลังทำ (ผลลัพธ์ในอนาคต)
> `async` **ไม่ได้แปลว่าสร้าง thread ใหม่** งาน I/O ส่วนใหญ่ไม่ต้องใช้ thread ระหว่างรอเลย
 
### ทำไมเขียนผิดวิธีถึงเกิด Deadlock?
 
สาเหตุคลาสสิก: **บล็อกรอ async ด้วย `.Result` หรือ `.Wait()`** ในสภาพแวดล้อมที่มี **SynchronizationContext** (เช่น UI ของ WinForms/WPF หรือ ASP.NET แบบ classic)
 
```csharp
// ❌ โค้ดที่ทำให้เกิด deadlock (เช่นเรียกจาก UI thread)
public string GetData()
{
    return GetDataAsync().Result;   // บล็อก UI thread เพื่อรอ
}
```
 
**เกิดอะไรขึ้นทีละขั้น:**
 
1. UI thread เรียก `GetDataAsync()` → ทำงานถึง `await` แล้วคืน `Task` ที่ยังไม่เสร็จ
2. UI thread ไปเรียก `.Result` → **บล็อก** รอให้ Task เสร็จ
3. พอ I/O เสร็จ `await` พยายาม **กลับมาทำต่อบน UI thread** (เพราะจับ SynchronizationContext ไว้)
4. แต่ UI thread **กำลังถูกบล็อกอยู่** รอ Task เดียวกันนี้
5. 🔒 **ต่างฝ่ายต่างรอกัน → Deadlock**
### วิธีแก้ / แนวทางที่ถูกต้อง
 
```csharp
// ✅ 1) async ไปให้สุดทาง (async all the way)
public async Task<string> GetDataWrapperAsync()
{
    return await GetDataAsync();
}
 
// ✅ 2) ในโค้ด library ใช้ ConfigureAwait(false) เพื่อไม่ต้องกลับไป context เดิม
public async Task<string> GetDataAsync()
{
    var html = await client.GetStringAsync(url).ConfigureAwait(false);
    return html;
}
```
 
### กฎที่ควรจำ
 
- ✅ **Async all the way**: ถ้าเรียก async ให้ `await` และทำให้ method ที่เรียกเป็น async ต่อกันไปจนถึงชั้นบนสุด
- ❌ **อย่าใช้ `.Result` / `.Wait()` / `.GetAwaiter().GetResult()`** กับ Task ที่ยังไม่เสร็จ ถ้าไม่จำเป็น
- ❌ **อย่าใช้ `async void`** ยกเว้น event handler เพราะจับ exception ไม่ได้ และรอให้เสร็จไม่ได้ (ให้ return `Task` แทน)
- ✅ ตั้งชื่อ method async ลงท้ายด้วย `Async`
- ✅ ใช้ `Task.WhenAll` เมื่อต้องการรันหลายงานพร้อมกัน
- ✅ ส่ง `CancellationToken` เข้าไปใน API ที่ใช้เวลานาน
- ⚠️ **ASP.NET Core ไม่มี SynchronizationContext** จึงไม่เกิด deadlock แบบคลาสสิกนี้ แต่การ `.Result`/`.Wait()` ยังทำให้เกิด **thread pool starvation** (thread หมด) ได้เมื่อมี request จำนวนมาก
---
 
## 12. `==` vs `.Equals()`
 
### หลักการ
 
- `==` คือ **operator** ที่ถูกตัดสินที่ **compile-time** ตามชนิดของตัวแปร (ไม่ใช่ชนิดจริงของ object)
- `.Equals()` คือ **virtual method** ที่ถูกตัดสินที่ **runtime** ตามชนิดจริงของ object
### พฤติกรรมตามชนิด
 
| ชนิด | `==` | `.Equals()` |
|---|---|---|
| value type พื้นฐาน (`int`, `double`, `bool`...) | เปรียบเทียบ **ค่า** | เปรียบเทียบ **ค่า** |
| `struct` ของเราเอง | **ใช้ไม่ได้** จนกว่าจะ overload `==` | default เทียบทุก field (ใช้ reflection จึงช้า) ควร override |
| `class` (default) | เปรียบเทียบ **reference** (ชี้ object เดียวกันไหม) | เปรียบเทียบ **reference** (ถ้าไม่ override) |
| `string` | เปรียบเทียบ **เนื้อหา** (overload ไว้แล้ว) | เปรียบเทียบ **เนื้อหา** |
| `record` | เปรียบเทียบ **ค่าของ property** | เปรียบเทียบ **ค่าของ property** |
 
### ตัวอย่าง
 
```csharp
// 1) class ทั่วไป
class Person { public string Name { get; set; } }
 
var p1 = new Person { Name = "A" };
var p2 = new Person { Name = "A" };
var p3 = p1;
 
Console.WriteLine(p1 == p2);       // False (คนละ object)
Console.WriteLine(p1.Equals(p2));  // False (ยังเทียบ reference อยู่)
Console.WriteLine(p1 == p3);       // True  (ชี้ object เดียวกัน)
 
// 2) string
string s1 = "hello";
string s2 = new string("hello".ToCharArray());
Console.WriteLine(s1 == s2);       // True  (string overload == ให้เทียบเนื้อหา)
Console.WriteLine(s1.Equals(s2));  // True
Console.WriteLine((object)s1 == (object)s2); // False ← ตัวแปรเป็น object จึงเทียบ reference
 
// 3) value type ที่ถูก box
object a = 1;
object b = 1;
Console.WriteLine(a == b);         // False (เทียบ reference ของกล่องสองใบ)
Console.WriteLine(a.Equals(b));    // True  (Equals ของ int เทียบค่า)
```
 
### การ override ให้ถูกต้อง
 
ถ้า override `Equals` **ต้อง override `GetHashCode` ด้วยเสมอ** (กฎ: object ที่ `Equals` เท่ากัน ต้องมี HashCode เท่ากัน) ไม่เช่นนั้นจะใช้เป็น key ใน `Dictionary`/`HashSet` ไม่ถูกต้อง
 
```csharp
public class Money : IEquatable<Money>
{
    public decimal Amount { get; }
    public string Currency { get; }
 
    public Money(decimal amount, string currency) => (Amount, Currency) = (amount, currency);
 
    public bool Equals(Money? other) =>
        other is not null && Amount == other.Amount && Currency == other.Currency;
 
    public override bool Equals(object? obj) => Equals(obj as Money);
    public override int GetHashCode() => HashCode.Combine(Amount, Currency);
 
    public static bool operator ==(Money? l, Money? r) => l?.Equals(r) ?? r is null;
    public static bool operator !=(Money? l, Money? r) => !(l == r);
}
```
 
### เครื่องมือเสริม
 
- `object.ReferenceEquals(a, b)` — บังคับเทียบ reference เสมอ
- `record` / `record struct` — compiler สร้าง `Equals`, `GetHashCode`, `==` ให้อัตโนมัติ (เปรียบเทียบตามค่า)
---
 
## 13. Access Modifiers
 
| Modifier | เข้าถึงได้จาก | ใช้เมื่อ |
|---|---|---|
| `public` | **ทุกที่** ไม่มีข้อจำกัด | API ที่ตั้งใจเปิดให้ภายนอกใช้ |
| `private` | **เฉพาะภายใน type เดียวกัน** (class/struct ที่ประกาศ) | รายละเอียดภายใน, field, helper method |
| `protected` | ภายใน type เดียวกัน + **class ลูก** (ไม่ว่าจะอยู่ assembly ไหน) | member ที่ให้เฉพาะลูกใช้/override |
| `internal` | **ภายใน assembly (project) เดียวกัน** | โค้ดที่ใช้ร่วมกันภายใน library แต่ไม่เปิดให้ภายนอก |
| `protected internal` | เข้าถึงได้ถ้า **อยู่ assembly เดียวกัน หรือ เป็น class ลูก** (OR) | ต้องการให้ทั้งโค้ดใน assembly และลูกจากข้างนอกใช้ได้ |
| `private protected` | เข้าถึงได้ถ้า **อยู่ assembly เดียวกัน และ เป็น class ลูก** (AND) | แคบกว่า protected internal (C# 7.2+) |
 
### ตัวอย่าง
 
```csharp
// อยู่ใน Assembly A
public class Base
{
    public int Pub;
    private int _priv;
    protected int Prot;
    internal int Intl;
    protected internal int ProtIntl;
    private protected int PrivProt;
}
 
// อยู่ใน Assembly A (assembly เดียวกัน)
class SameAssemblyChild : Base
{
    void Test()
    {
        Pub = 1;        // ✅
        // _priv = 1;   // ❌ private
        Prot = 1;       // ✅ เป็นลูก
        Intl = 1;       // ✅ assembly เดียวกัน
        ProtIntl = 1;   // ✅
        PrivProt = 1;   // ✅ assembly เดียวกัน + เป็นลูก
    }
}
 
// อยู่ใน Assembly B (อ้างอิง Assembly A)
class OtherAssemblyChild : Base
{
    void Test()
    {
        Pub = 1;        // ✅
        Prot = 1;       // ✅ เป็นลูก
        // Intl = 1;    // ❌ คนละ assembly
        ProtIntl = 1;   // ✅ เป็นลูก (เงื่อนไข OR)
        // PrivProt = 1;// ❌ คนละ assembly (เงื่อนไข AND ไม่ผ่าน)
    }
}
```
 
### ค่าเริ่มต้นเมื่อไม่ระบุ
 
- **member ของ class/struct** → `private`
- **type ระดับบนสุด** (class, struct, interface, enum ที่ไม่ได้ซ้อนใน type อื่น) → `internal`
- **member ของ interface** → `public`
- **member ของ enum** → `public` (แก้ไขไม่ได้)
### หลักการเลือกใช้
 
> เริ่มจาก **จำกัดสิทธิ์ให้แคบที่สุดก่อน** (`private`) แล้วค่อยเปิดกว้างขึ้นเมื่อจำเป็นจริงๆ เพื่อลด coupling และให้เปลี่ยน implementation ภายในได้อย่างปลอดภัย
 
---
 
## 14. Garbage Collection
 
### GC ทำงานอย่างคร่าวๆ
 
**Garbage Collector (GC)** ของ .NET คือระบบจัดการหน่วยความจำอัตโนมัติ ที่คอยคืนพื้นที่ของ object บน **managed heap** ที่ไม่มีใครใช้แล้ว
 
**แนวคิดสำคัญ:**
 
1. **Reachability (การเข้าถึงได้):** object ที่ยัง "เข้าถึงได้" จาก *roots* (ตัวแปร local บน stack, static field, CPU register, GC handle) ถือว่ายังมีชีวิต ส่วนที่ไม่มีใครอ้างอิงถึงแล้วคือ "ขยะ"
2. **Mark → Sweep/Compact:** GC *mark* object ที่ยังเข้าถึงได้ทั้งหมด, ทิ้งส่วนที่ไม่ถูก mark, แล้ว *compact* (ขยับ object ที่รอดมาชิดกัน) เพื่อลด fragmentation
3. **Generational GC:** แบ่ง object ตามอายุเพื่อให้เก็บขยะได้ถี่และถูกลง
| Generation | ความหมาย | ความถี่ในการเก็บ |
|---|---|---|
| **Gen 0** | object ใหม่ ส่วนใหญ่ตายเร็ว (ตัวแปรชั่วคราว) | **บ่อยที่สุด** เร็ว |
| **Gen 1** | object ที่รอดจาก Gen 0 มาแล้ว (บัฟเฟอร์ระหว่างกลาง) | ปานกลาง |
| **Gen 2** | object อายุยาว (static data, cache, singleton) | น้อยที่สุด แต่แพงที่สุด (full GC) |
 
4. **Large Object Heap (LOH):** object ขนาดตั้งแต่ ~85,000 bytes ขึ้นไป (เช่น array ใหญ่ๆ) ถูกเก็บแยก และถูกเก็บขยะพร้อมกับ Gen 2 (โดยปกติไม่ compact) การสร้าง object ใหญ่ถี่ๆ จึงเป็นภาระ
> **GC จะ "หยุดโลก" บางช่วง** (suspend thread ของแอป) เพื่อทำงานบางขั้นตอน .NET มี **Concurrent/Background GC** และ **Server GC** ช่วยลดผลกระทบ
 
### นักพัฒนาต้องจัดการ memory เองไหม?
 
**แยกเป็น 2 ส่วน:**
 
#### ✅ Managed memory (object ธรรมดาใน C#) — ไม่ต้องจัดการเอง
GC จัดการให้ ไม่ต้อง `free` / `delete` เอง
 
#### ⚠️ Unmanaged resources — ต้องจัดการเอง
GC **ไม่รู้จัก** ทรัพยากรภายนอก เช่น file handle, database connection, socket, GDI object, memory จาก native code ต้อง **ปล่อยคืนเองอย่างชัดเจน** ผ่าน `IDisposable`
 
```csharp
// ✅ ใช้ using เพื่อให้ Dispose() ถูกเรียกแน่นอน
using var stream = new FileStream("data.txt", FileMode.Open);
using var conn   = new SqlConnection(connStr);
```
 
**รูปแบบ Dispose แบบเต็ม (เมื่อ class ถือ unmanaged resource เอง):**
 
```csharp
public class MyResource : IDisposable
{
    private IntPtr _handle;      // unmanaged resource
    private bool _disposed;
 
    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);   // ไม่ต้องให้ finalizer ทำงานซ้ำ
    }
 
    protected virtual void Dispose(bool disposing)
    {
        if (_disposed) return;
        if (disposing)
        {
            // คืน managed resource ที่ implement IDisposable
        }
        // คืน unmanaged resource
        _disposed = true;
    }
 
    ~MyResource() => Dispose(false);   // safety net ถ้าลืม Dispose
}
```
 
> ปัจจุบันนิยมใช้ **`SafeHandle`** ห่อ unmanaged handle แทนการเขียน finalizer เอง
 
### สิ่งที่ยังทำให้ memory leak ได้แม้มี GC
 
- **event handler ที่ไม่ได้ unsubscribe** (publisher ถือ reference ถึง subscriber ทำให้เก็บไม่ได้)
- **static field / static collection / cache** ที่โตเรื่อยๆ ไม่เคยล้าง
- ลืม `Dispose()` ทรัพยากรที่ไม่ใช่ managed memory
- closure / lambda ที่จับตัวแปรอ้างอิง object ใหญ่ไว้
- สร้าง object ใหญ่ (LOH) บ่อยๆ จนเกิด fragmentation
### Tips
 
- **อย่าเรียก `GC.Collect()` เอง** ยกเว้นมีเหตุผลเฉพาะทางจริงๆ เพราะมักทำให้ประสิทธิภาพแย่ลง
- ลดการ allocate ใน hot path: ใช้ `struct`/`Span<T>`/`ArrayPool<T>`, reuse object, หลีกเลี่ยง boxing และการต่อ string ในลูป
- ใช้ `WeakReference` สำหรับ cache ที่อนุญาตให้ GC เก็บได้
---
 
## 15. `static` class / method
 
### คืออะไร?
 
`static` หมายถึง member **ผูกกับ type เอง ไม่ใช่กับ instance** เรียกใช้ผ่านชื่อ class ได้เลยโดยไม่ต้อง `new`
 
- **static method/field/property:** ใช้ร่วมกันทั้งโปรแกรม มีชุดเดียว
- **static class:** class ที่ **สร้าง instance ไม่ได้**, มีได้แต่ static member, เป็น `sealed` โดยปริยาย (สืบทอดไม่ได้) และ implement instance interface ไม่ได้
```csharp
public static class MathHelper
{
    public const double Pi = 3.14159;
 
    public static double Square(double x) => x * x;
}
 
double r = MathHelper.Square(5);   // ไม่ต้อง new
```
 
### เมื่อไหร่ควรใช้?
 
- **Utility / Helper ที่ไม่มี state** และเป็น pure function (ผลลัพธ์ขึ้นกับ input อย่างเดียว) เช่น `Math.Abs`, `string.IsNullOrEmpty`
- **Extension methods** (ต้องประกาศใน static class)
- **ค่าคงที่ / ค่ากำหนดที่ใช้ร่วมกัน** (`const`, `static readonly`)
- **Factory method** เช่น `Guid.NewGuid()`, `DateTime.Parse()`
- **Extension / helper ที่ไม่ต้อง inject dependency**
```csharp
public static class StringExtensions
{
    public static bool IsEmail(this string s) => s.Contains('@');   // extension method
}
 
bool ok = "a@b.com".IsEmail();
```
 
### ข้อเสียถ้าใช้พร่ำเพรื่อ
 
| ปัญหา | อธิบาย |
|---|---|
| **ทดสอบยาก (Testability)** | mock หรือแทนที่ static ได้ยาก ทำให้ unit test ยาก โดยเฉพาะถ้า static เรียก DB / ไฟล์ / เวลา (`DateTime.Now`) |
| **Hidden dependency / Tight coupling** | โค้ดที่เรียก `SomeStatic.Do()` ผูกติดกับ implementation ตายตัว เปลี่ยนหรือสลับไม่ได้ |
| **Global mutable state** | `static` field ที่แก้ไขได้ = ตัวแปร global ทำให้ติดตามพฤติกรรมยาก และเกิดบั๊กที่ขึ้นกับลำดับการเรียก |
| **Thread-safety** | static state ถูกแชร์ทุก thread/request ต้องจัดการ lock/concurrency เอง ถ้าไม่ระวังจะเกิด race condition |
| **Memory ถูกถือไว้ตลอด** | static field มีอายุเท่าโปรแกรม (อยู่ใน root ของ GC) ถ้าเก็บ collection/object ใหญ่ไว้ จะไม่ถูกเก็บคืน → memory leak |
| **ใช้ OOP ไม่เต็มที่** | static ไม่รองรับ polymorphism/inheritance/interface แบบ instance ทำให้ขยายพฤติกรรมยาก |
| **Static constructor / init order** | ลำดับการ initialize ซับซ้อน และ exception ใน static constructor ทำให้ type ใช้ไม่ได้ (`TypeInitializationException`) |
 
### ตัวอย่างเปรียบเทียบ
 
```csharp
// ❌ ผูกกับ static — ทดสอบยาก เพราะ DateTime.Now ควบคุมไม่ได้
public class OrderService
{
    public bool IsExpired(Order o) => o.ExpireAt < DateTime.Now;
}
 
// ✅ ใช้ abstraction + DI — ทดสอบและเปลี่ยน implementation ได้
public interface IClock { DateTime Now { get; } }
 
public class SystemClock : IClock { public DateTime Now => DateTime.Now; }
 
public class OrderService
{
    private readonly IClock _clock;
    public OrderService(IClock clock) => _clock = clock;
 
    public bool IsExpired(Order o) => o.ExpireAt < _clock.Now;
}
```
 
> (ใน .NET 8+ มี `TimeProvider` ให้ใช้แทนการสร้าง `IClock` เอง)
 
### สรุปแนวทาง
 
- ใช้ `static` กับสิ่งที่ **ไม่มี state และไม่มี dependency ภายนอก** (pure helper)
- ถ้าจำเป็นต้องมี state หรือต้อง inject dependency → ใช้ **class ปกติ + Dependency Injection** (เช่น ลงทะเบียนเป็น Singleton ผ่าน DI container) แทน static
- หลีกเลี่ยง `static` mutable field ถ้าไม่จำเป็น
---
 
## อ้างอิงเพิ่มเติม
 
- [C# Documentation (Microsoft Learn)](https://learn.microsoft.com/dotnet/csharp/)
- [.NET Garbage Collection](https://learn.microsoft.com/dotnet/standard/garbage-collection/)
- [Framework Design Guidelines](https://learn.microsoft.com/dotnet/standard/design-guidelines/)
- [Asynchronous programming (async/await)](https://learn.microsoft.com/dotnet/csharp/asynchronous-programming/)
 
