package com.allanpessin.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.allanpessin.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
  
}
