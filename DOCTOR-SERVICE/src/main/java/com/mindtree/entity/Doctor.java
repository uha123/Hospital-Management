//Doctor.java
package com.mindtree.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
//@Table(name="DOCTOR_DETAILS")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Doctor implements Serializable {

	@Id
	@SequenceGenerator(name="DOCTOR_SEQ",allocationSize = 1,initialValue = 1)
	@GeneratedValue(generator = "DOCTOR_SEQ",strategy = GenerationType.AUTO)
	@Column(name = "DOC_ID")
	private int id;

	@Column(name="DNAME",length = 25,nullable = false)
	private String name;
	
	@Column(name="DAGE",length = 2,nullable = false)
	private int age;
	
	@Column(name="DGEN",length=6,nullable = false)
	private String gender;
	
	@Column(name="DSPEC",length = 150,nullable = false)
	private String specialist;
	
	@Column(name="PATIENTS_COUNT")
	private int pCount;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getSpecialist() {
		return specialist;
	}

	public void setSpecialist(String specialist) {
		this.specialist = specialist;
	}

	public int getpCount() {
		return pCount;
	}

	public void setpCount(int pCount) {
		this.pCount = pCount;
	}
	
}
