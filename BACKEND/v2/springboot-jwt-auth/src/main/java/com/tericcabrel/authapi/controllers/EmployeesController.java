package com.tericcabrel.authapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tericcabrel.authapi.dtos.EmployeeCreateAccountModel;
import com.tericcabrel.authapi.dtos.JsonResponse;
import com.tericcabrel.authapi.entities.Employee;
import com.tericcabrel.authapi.entities.User;
import com.tericcabrel.authapi.repositories.EmployeeRepository;
import com.tericcabrel.authapi.repositories.UserRepository;

@RequestMapping("/api/v1/employees")
@RestController
@CrossOrigin( value="*" ) 
public class EmployeesController {

	@Autowired
    private  PasswordEncoder passwordEncoder; 
 
	
	
	@Autowired
	private EmployeeRepository repo;
	
	
	@Autowired
	private UserRepository userRepo;
	
	
	
	
	// GET LIST OF EMPLOYEES
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getListOfEmployees(){
		 Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

	     User currentUser = (User) authentication.getPrincipal(); 
	     return ResponseEntity.ok(this.repo.findByClient(currentUser));
	     
	}
	
	
	
	
	@PostMapping("/add")
	public ResponseEntity<?> getListOfEmployees( @RequestBody EmployeeCreateAccountModel model ){
		 Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

	     User client = (User) authentication.getPrincipal();
	     
	     
	     // SET THE CLIENT !
	     Employee e = new Employee(); 
	     e.setClient(client);
	     
	     // SET THE EMPLOYEE ACCOUNT
	     
	     
	     var user = new User()
	             .setFullName(model.getFullName())
	             .setEmail(model.getEmail())
	             .setPassword(passwordEncoder.encode(model.getPassword()));
	     user.setRole("ROLE_EMPLOYEE");

	     this.userRepo.save(user);
	     
	     
	     e.setUser(user); 
	     e.setAddress(model.getAddress());
	     e.setPhone(model.getPhone());
	     
	      
	     
	     
	     this.repo.save(e);
	     
	     // SEND MAIL
	     // login pass
	     


	     return ResponseEntity.ok( new JsonResponse(true,"Employee inserted successfullly") );  
    	 
	}
	
	
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable Long id) {


	    Employee employee = repo.findById(id).get();
	    User user = employee.getUser(); 
	     
	    
	    employee.setUser(null); 
	    repo.delete(employee);
	    
	    
	    this.userRepo.delete(user);
	    
	     
	    return ResponseEntity.ok(new JsonResponse(true, "employee deleted successfully"));
	}
	
	
	
	
	
}
