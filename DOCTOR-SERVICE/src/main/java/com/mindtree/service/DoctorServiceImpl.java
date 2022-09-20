//DoctorServiceImpl.java
package com.mindtree.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindtree.Exception.DoctorNotFoundException;
import com.mindtree.entity.Doctor;

import com.mindtree.repo.IDoctorRepo;

@Service
public class DoctorServiceImpl implements DoctorService {

	@Autowired
	IDoctorRepo docRepo;
	
	@Override
	public List<Doctor> fetchAllDoctors() {
		return docRepo.findAll();
	}

	@Override
	public Doctor fetchADoctor(int docId) {
		
    Optional<Doctor> d=docRepo.findById(docId);
		
		if(d.isPresent())
		{
			Doctor dr=d.get();
			
			return dr;
		}
		
		throw new DoctorNotFoundException("No Doctor found with id : "+docId);
		
	}

	@Override
	public Doctor addDoctor(Doctor doc) {
		return docRepo.save(doc);
	}

	@Override
	public void setDocPatientCount(String name, int count) {
		// TODO Auto-generated method stub
		
		Doctor doc =  docRepo.findByName(name);
		
		if(doc!=null) {
			int pcount = doc.getpCount();  //ec = 2
			
			if(count>0) {
				pcount+=count; //ec=3
				doc.setpCount(pcount);
				docRepo.save(doc);
			}
		}
		
	}

	@Override
	public List<String> getDocName() {
		// TODO Auto-generated method stub
		List<Doctor> drList=docRepo.findAll();
		
		List<String> name=new ArrayList();
		
		for(Doctor dr:drList)
		{
			name.add(dr.getName());
		}
		
		return name;
		
		 
	}

}
