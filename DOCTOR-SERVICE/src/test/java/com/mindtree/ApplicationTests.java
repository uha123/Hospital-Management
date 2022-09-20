package com.mindtree;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.mindtree.controller.*;
import com.mindtree.entity.Doctor;
import com.mindtree.service.DoctorService;

@SpringBootTest(classes = {ApplicationTests.class})

class ApplicationTests {

	@Mock
	DoctorService docService;

	@InjectMocks
	DoctorController con;

	List<Doctor> docList;
	Doctor doc;

	@Test
	@Order(1)
	public void testGetAllDoctors() {

		docList = new ArrayList<>();
		docList.add(new Doctor(1,"Ram",28,"male","Heart",0));
		docList.add(new Doctor(2,"Priya",26,"female","Brain",0));

		when(docService.fetchAllDoctors()).thenReturn(docList);

		ResponseEntity<?> resp = con.getAllDoctors();

		assertEquals(HttpStatus.OK, resp.getStatusCode());	
	}

	@Test
	@Order(2)
	public void testAddDoctor() {

		doc = new Doctor(2,"Priya",26,"female","Brain",0);

		when(docService.addDoctor(doc)).thenReturn(doc);

		ResponseEntity<?> resp = con.addDoctor(doc);

		assertEquals(HttpStatus.CREATED, resp.getStatusCode());	
	}

	@Test
	@Order(3)
	public void testGetDoctorById() {

		doc = new Doctor(2,"Priya",26,"female","Brain",0);

		int id = 2;

		when(docService.fetchADoctor(id)).thenReturn(doc);

		ResponseEntity<?> resp = con.getADoctor(id);

		assertEquals(HttpStatus.OK, resp.getStatusCode());	
	}

	@Test
	@Order(4)
	public void testGetDoctorsNames() {

		List<String> docNames = new ArrayList<>();
		docNames.add("kohli");
		docNames.add("Dhoni");

		when(docService.getDocName()).thenReturn(docNames);

		ResponseEntity<?> resp = con.getDocName();

		System.out.println(resp.getStatusCode());
		System.out.println(resp.getBody());

		assertEquals(HttpStatus.OK, resp.getStatusCode());	
	}


}
