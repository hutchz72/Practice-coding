package be.springboot.springbootbackend;

import be.springboot.springbootbackend.entity.Employee;
import be.springboot.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public void run(String... args) throws Exception {
        Employee employee1 = Employee.builder().firstName("Jason").lastName("Jack").email("jack@gmail.com").build();
        Employee employee2 = Employee.builder().firstName("Jess").lastName("June").email("june@gmail.com").build();
        Employee employee3 = Employee.builder().firstName("Tony").lastName("jackson").email("jackson@gmail.com").build();
        employeeRepository.save(employee1);
        employeeRepository.save(employee2);
        employeeRepository.save(employee3);
    }
}
