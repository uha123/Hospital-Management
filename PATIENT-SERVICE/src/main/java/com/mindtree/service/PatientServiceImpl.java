package com.mindtree.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.mindtree.entity.Patient;
import com.mindtree.exception.PatientNotFoundException;
import com.mindtree.repo.IPatientRepo;

@Service
public class PatientServiceImpl implements PatientService {

	
	@Autowired
	private IPatientRepo patientRepo;
	
	@Autowired
	RestTemplate template;
	
	private static final String URL="http://localhost:7100/doctor/";

	
	@Override
	public Patient fetchAPatient(int patId) {
		// TODO Auto-generated method stub
		
    List<Patient> patienList=patientRepo.findAll();
		
      Patient pic=null;
		
		for(Patient piclist:patienList)
		{
			if(piclist.getId()==patId)
			{
				pic=piclist;
				return pic;
			}
			
		}
		
		throw new PatientNotFoundException("No Patient found with id : "+patId);
		
	}

	@Override
	public List<Patient> fetchAllPatients() {
		// TODO Auto-generated method stub
		return patientRepo.findAll();
	}

	@Override
	public Patient addPatient(Patient pat) {
		// TODO Auto-generated method stub
		Patient p=patientRepo.save(pat);
		String path=URL+"update/count/";
		if(template!=null)
			template.getForObject(path+pat.getVisitedDoc()+"/1", String.class);
		return p;	}


}
