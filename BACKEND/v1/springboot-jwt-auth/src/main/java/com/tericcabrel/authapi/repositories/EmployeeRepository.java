package com.tericcabrel.authapi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tericcabrel.authapi.entities.Employee;
import com.tericcabrel.authapi.entities.User;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

	List<Employee> findByClient(User client);
}
