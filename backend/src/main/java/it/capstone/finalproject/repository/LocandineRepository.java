package it.capstone.finalproject.repository;


import it.capstone.finalproject.entities.Locandine;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LocandineRepository extends JpaRepository<it.capstone.finalproject.entities.Locandine, Long> {
    public Optional<Locandine> findById(Long id);
}
