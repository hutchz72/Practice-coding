// Console.WriteLine("Hello, World!");

// bool exit = false;

// string firstName = "";
// string lastName = "";

// List<Employee> employees = new List<Employee>();

// do
// {
//     Console.Clear();
//     DisplayEmployees(employees);
//     Console.WriteLine("Please press the 'A' key to add an employee, or press any other key to exit the application.");

//     ConsoleKey key = Console.ReadKey().Key;
//     if (key == ConsoleKey.A)
//     {
//         Console.WriteLine();
//         Console.Write("Enter the employee's first name:");
//         firstName = Console.ReadLine() ?? "";

//         Console.Write("Enter the employee's last name:");
//         lastName = Console.ReadLine() ?? "";

//         var employee = new Employee(firstName, lastName);

//         if(!employees.Contains(employee))
//         {
//             employees.Add(employee);
//         }
//     }
//     else
//     {
//         exit = true;
//     }
// }

// while (exit == false);

// void DisplayEmployees(List<Employee> employees)
// {
//     foreach (var employee in employees)
//     {
//         employee.DisplayInfo();
//     }
// }

// record Employee(string FirstName, string LastName)
// {
//     public void DisplayInfo()
//     {
//         Console.WriteLine($"Employee Name: {FirstName} {LastName}");
//     }
// }

// class Employee
// {
//     public string FirstName { get; set; }
//     public string LastName { get; set; }

//     public Employee(string firstName, string lastName)
//     {
//         FirstName = firstName;
//         LastName = lastName;
//     }

//     public void DisplayInfo()
//     {
//         Console.WriteLine($"Employee Name: {FirstName} {LastName}");
//     }
// }
ExerciseB2.Run();

public static class ExerciseB1
{
    public static void Run()
    {
        Console.WriteLine("FizzBuzz Exercise");
        for (int i = 1; i <= 100; i++)
        {
            if (i % 3 == 0 && i % 5 == 0)
            {
                Console.WriteLine("FizzBuzz");
            }
            else if (i % 3 == 0)
            {
                Console.WriteLine("Fizz");
            }
            else if (i % 5 == 0)
            {
                Console.WriteLine("Buzz");
            }
            else
            {
                Console.WriteLine(i);
            }
        }
    }
}

public static class ExerciseB2
{
    public static void Run()
    {
        Console.WriteLine("Check incoming word Exercise");
        string input = Console.ReadLine() ?? "";
        if (input == "palindrome")
        {
            Console.WriteLine("The word is correct!");
        }
        else
        {
            Console.WriteLine("The word is incorrect!");
        }
    }
}