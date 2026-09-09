// Console.WriteLine("Hello, World!");

bool exit = false;

string firstName = "";
string lastName = "";

List<Employee> employees = new List<Employee>();

do
{
    Console.Clear();
    DisplayEmployees(employees);
    Console.WriteLine("Please press the 'A' key to add an employee, or press any other key to exit the application.");

    ConsoleKey key = Console.ReadKey().Key;
    if (key == ConsoleKey.A)
    {
        Console.WriteLine();
        Console.Write("Enter the employee's first name:");
        firstName = Console.ReadLine() ?? "";

        Console.Write("Enter the employee's last name:");
        lastName = Console.ReadLine() ?? "";

        var employee = new Employee(firstName, lastName);

        if(!employees.Contains(employee))
        {
            employees.Add(employee);
        }
    }
    else
    {
        exit = true;
    }
}

while (exit == false);

void DisplayEmployees(List<Employee> employees)
{
    foreach (var employee in employees)
    {
        employee.DisplayInfo();
    }
}

record Employee(string FirstName, string LastName)
{
    public void DisplayInfo()
    {
        Console.WriteLine($"Employee Name: {FirstName} {LastName}");
    }
}

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


