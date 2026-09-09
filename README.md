# Practice-coding
C#
https://www.youtube.com/watch?v=rab_1cFQUF4

ต้องมี .net sdk สำหรับ visual studio ที่ไปโหลดมา
dotnet --version

จากนั้น สร้าง console project โดยใช้ .net sdk และ cli
dotnet new console -o name จะใส่ path ก็ใส่ /หลังชื่อแล้วใส่ชื่ออีกทีก็ได้

เวลารัน dotnet run เฉยๆ อย่าลืม cd เข้าไปที่ project

ืdotnet new blazor -o name สำหรับทำเป็น web application fullstack 
dotnet new console -o name สำหรับ console ไว้รันที่ command line เฉยๆ

สำหรับการแก้ไขปัญหาเรื่อง ReadKey ไม่ขึ้นปุ่มเป็น none ให้ไปทำโฟลเดอร์ .vscode แล้วเปลี่ยน console เป็น integratedTerminal ถ้ามีไฟล์อยู่แล้วแค่ไปเปลี่ยนพอ ถ้าไม่มีไปทำเพิ่ม

ตัว object หรือเก็บข้อมูลใช้ ได้ทั้ง class หรือ record 
สรุปวิธีจำง่ายๆ เพื่อนำไปเลือกใช้

เลือกใช้ class เมื่อ: ออบเจกต์นั้นมีการเปลี่ยนสถานะบ่อยๆ มีเมธอดการทำงานซับซ้อน หรือเป็นคลาสเชิงจัดการระบบ (เช่น OrderManager, UserService, PlayerScore)

เลือกใช้ record เมื่อ: ออบเจกต์นั้นทำหน้าที่เป็นตัวส่งต่อข้อมูล อ่านอย่างเดียว หรือเก็บข้อมูลที่ต้องการนำมาเปรียบเทียบค่ากัน (เช่น DTO, ข้อมูลพนักงาน Employee, ข้อมูลสินค้า Product, Response จาก API)

int - stores integers (whole numbers), without decimals, such as 123 or -123
double - stores floating point numbers, with decimals, such as 19.99 or -19.99
char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
string - stores text, such as "Hello World". String values are surrounded by double quotes
bool - stores values with two states: true or false
long
float

const มีเหมือนกัน

Names can contain letters, digits and the underscore character (_)
Names must begin with a letter or underscore
Names should start with a lowercase letter, and cannot contain whitespace
Names are case-sensitive ("myVar" and "myvar" are different variables)
Reserved words (like C# keywords, such as int or double) cannot be used as names

Implicit casting is done automatically when passing a smaller size type to a larger size type:
Explicit casting must be done manually by placing the type in parentheses in front of the value: ประมาณแบบ แปลงจาก 9.78 เป็น int ก็จะเป็น 9

Convert.ToString
.ToDouble ได้หมดเลย

Operators
=	x = 5	x = 5	
+=	x += 3	x = x + 3	
-=	x -= 3	x = x - 3	
*=	x *= 3	x = x * 3	
/=	x /= 3	x = x / 3	
%=	x %= 3	x = x % 3	
&=	x &= 3	x = x & 3 คล้ายกับเอาค่า x มาหารทีหลังแบบเอาผลหาร ไม่สนเศษ
|=	x |= 3	x = x | 3	
^=	x ^= 3	x = x ^ 3	
>>=	x >>= 3	x = x >> 3	
<<=	x <<= 3	x = x << 3

Logical
&& || 

Math.Max(x,y) method can be used to find the highest value of x and y
Math.Min(x,y) method can be used to find the lowest value of of x and y
Math.Sqrt(x) method returns the square root of x
Math.Abs(x) method returns the absolute (positive) value of x
Math.Round() rounds a number to the nearest whole number

string txt;
ใช้ txt.ToUpper() txt.ToLower()

string.Concat(firstName, lastName)

String Interpolation '$user'

myString[0]
You can access the characters in a string by referring to its index number inside square brackets []

string myString = "Hello";
myString.IndexOf("e") = 1
You can also find the index position of a specific character in a string, by using the IndexOf() method

Another useful method is Substring(), which extracts the characters from a string, starting from the specified character position/index, and returns a new string. This method is often used together with IndexOf() to get the specific character position

Because strings must be written within quotes, C# will misunderstand this string, and generate an error
\'	'	Single quote
\"	"	Double quote
\\	\	Backslash

string txt = "It\'s alright."; => result It's alright.

int time = 20;
string result = (time < 18) ? "Good day." : "Good evening.";
ใช้แทน if else ได้

The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

while เช็กก่อนทำ
do while ทำก่อนเช็ค

for (int i = 0; i < 5; i++) 
{
  Console.WriteLine(i);
}

string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
foreach (string i in cars) 
{
  Console.WriteLine(i);
}

ิbreak กับ continue ใช้ได้ทั้ง for loop while loop เพื่อหยุดการกระทำนั้นไม่ทำ loopต่อหรือข้ามไปอันถัดไปได้เลย

Array
string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
int[] myNum = {10, 20, 30, 40};

วิธี access Console.WriteLine(cars[0]);
cars.length

// Create an array of four elements, and add values later
string[] cars = new string[4];

// Create an array of four elements and add values right away 
string[] cars = new string[4] {"Volvo", "BMW", "Ford", "Mazda"};

// Create an array of four elements without specifying the size 
string[] cars = new string[] {"Volvo", "BMW", "Ford", "Mazda"};

// Create an array of four elements, omitting the new keyword, and without specifying the size
string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};

ใช้ for loop array
for (int i = 0; i < cars.Length; i++) 
{
  Console.WriteLine(cars[i]);
}

string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
foreach (string i in cars) 
{
  Console.WriteLine(i);
}

Array.Sort(cars); ตรงๆได้เลย แล้วเดะมันเรียงให้

using System;
using System.Linq;

namespace MyApplication
{
  class Program
  {
    static void Main(string[] args)
    {
      int[] myNumbers = {5, 1, 8, 9};
      Console.WriteLine(myNumbers.Max());  // returns the largest value
      Console.WriteLine(myNumbers.Min());  // returns the smallest value
      Console.WriteLine(myNumbers.Sum());  // returns the sum of elements
    }
  }
}

int[,] numbers = { {1, 4, 2}, {3, 6, 8} };
Console.WriteLine(numbers[0, 2]);  // Outputs 2

numbers[0, 0] = 5;  // Change value to 5
Console.WriteLine(numbers[0, 0]); // Outputs 5 instead of 1

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

MyMethod() is the name of the method
static means that the method belongs to the Program class and not an object of the Program class. You will learn more about objects and how to access methods through objects later in this tutorial.
void means that this method does not have a return value. You will learn more about return values later in this chapter

static void MyMethod() 
{
  Console.WriteLine("I just got executed!");
}

static void Main(string[] args)
{
  MyMethod();
}

// Outputs "I just got executed!"

Parameter

static void MyMethod(string fname, int age) 
{
  Console.WriteLine(fname + " is " + age);
}

static void Main(string[] args)
{
  MyMethod("Liam", 5);
  MyMethod("Jenny", 8);
  MyMethod("Anja", 31);
}

// Liam is 5
// Jenny is 8
// Anja is 31

static void MyMethod(string country = "Norway") 
{
  Console.WriteLine(country);
}

static void Main(string[] args)
{
  MyMethod("Sweden");
  MyMethod("India");
  MyMethod();
  MyMethod("USA");
}

An object is created from a class. We have already created the class named Car, so now we can use this to create objects.

To create an object of Car, specify the class name, followed by the object name, and use the keyword new

class Car 
{
  string color = "red";

  static void Main(string[] args)
  {
    Car myObj = new Car();
    Console.WriteLine(myObj.color);
  }
}

class Car
{
  string color = "red";
  static void Main(string[] args)
  {
    Car myObj1 = new Car();
    Car myObj2 = new Car();
    Console.WriteLine(myObj1.color);
    Console.WriteLine(myObj2.color);
  }
}

สร้าง class หลากประเภทก็สร้างclass คนละไฟล์

public	The code is accessible for all classes
private	The code is only accessible within the same class
protected	The code is accessible within the same class, or in a class that is inherited from that class. You will learn more about inheritance in a later chapter
internal	The code is only accessible within its own assembly, but not from another assembly. You will learn more about this in a later chapter

get set มี 2 แบบ
class Person
{
  private string name; // field
  public string Name   // property
  {
    get { return name; }
    set { name = value; }
  }
}

class Program
{
  static void Main(string[] args)
  {
    Person myObj = new Person();
    myObj.Name = "Liam";
    Console.WriteLine(myObj.Name);
  }
}


class Person
{
  public string Name  // property
  { get; set; }
}

class Program
{
  static void Main(string[] args)
  {
    Person myObj = new Person();
    myObj.Name = "Liam";
    Console.WriteLine(myObj.Name);
  }
}

Inheritance

class Vehicle  // base class (parent) 
{
  public string brand = "Ford";  // Vehicle field
  public void honk()             // Vehicle method 
  {                    
    Console.WriteLine("Tuut, tuut!");
  }
}

class Car : Vehicle  // derived class (child)
{
  public string modelName = "Mustang";  // Car field
}

class Program
{
  static void Main(string[] args)
  {
    // Create a myCar object
    Car myCar = new Car();

    // Call the honk() method (From the Vehicle class) on the myCar object
    myCar.honk();

    // Display the value of the brand field (from the Vehicle class) and the value of the modelName from the Car class
    Console.WriteLine(myCar.brand + " " + myCar.modelName);
  }
}

ใส่ sealed หน้า class จะทำให้ class อื่นมา inheritance ไม่ได้


class Animal  // Base class (parent) 
{
  public virtual void animalSound() 
  {
    Console.WriteLine("The animal makes a sound");
  }
}

class Pig : Animal  // Derived class (child) 
{
  public override void animalSound() 
  {
    Console.WriteLine("The pig says: wee wee");
  }
}

class Dog : Animal  // Derived class (child) 
{
  public override void animalSound() 
  {
    Console.WriteLine("The dog says: bow wow");
  }
}

class Program 
{
  static void Main(string[] args) 
  {
    Animal myAnimal = new Animal();  // Create a Animal object
    Animal myPig = new Pig();  // Create a Pig object
    Animal myDog = new Dog();  // Create a Dog object

    myAnimal.animalSound();
    myPig.animalSound();
    myDog.animalSound();
  }
}

การใส่ overide ทำให้ทับกับตัวใหญ่ได้ ถ้าไม่ใส่จะไม่ทับและแสดงตัวเก่า

Data abstraction is the process of hiding certain details and showing only essential information to the user.
Abstraction can be achieved with either abstract classes or interfaces (which you will learn more about in the next chapter).

The abstract keyword is used for classes and methods:

Abstract class: is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).

Abstract method: can only be used in an abstract class, and it does not have a body. The body is provided by the derived class (inherited from).
An abstract class can have both abstract and regular methods

abstract เป็นตัวกึ่งบังคับให้คลาสที่มาใช้มาเรียก ต้องทำ method ชื่อที่กำหนดเป็นของตนเอง

// Abstract class
abstract class Animal
{
  // Abstract method (does not have a body)
  public abstract void animalSound();
  // Regular method
  public void sleep()
  {
    Console.WriteLine("Zzz");
  }
}

// Derived class (inherit from Animal)
class Pig : Animal
{
  public override void animalSound()
  {
    // The body of animalSound() is provided here
    Console.WriteLine("The pig says: wee wee");
  }
}

class Program
{
  static void Main(string[] args)
  {
    Pig myPig = new Pig(); // Create a Pig object
    myPig.animalSound();  // Call the abstract method
    myPig.sleep();  // Call the regular method
  }
}


An interface is a completely "abstract class", which can only contain abstract methods and properties (with empty bodies)

// Interface
interface IAnimal 
{
  void animalSound(); // interface method (does not have a body)
}

// Pig "implements" the IAnimal interface
class Pig : IAnimal 
{
  public void animalSound() 
  {
    // The body of animalSound() is provided here
    Console.WriteLine("The pig says: wee wee");
  }
}

class Program 
{
  static void Main(string[] args) 
  {
    Pig myPig = new Pig();  // Create a Pig object
    myPig.animalSound();
  }
}

enum Level 
{
  Low,
  Medium,
  High
}



