package com.godmomentsbackend.services;

import com.godmomentsbackend.repositories.FAQRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FAQService {
    private final FAQRepository repository;

    @Autowired
    public FAQService(FAQRepository repository) {
        this.repository = repository;

	}
public String getFAQ() {
	// TODO Auto-generated method stub
	return null;
}
public FAQRepository getRepository() {
	return repository;
}
}