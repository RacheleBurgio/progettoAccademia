package it.capstone.finalproject.locandine;

import it.capstone.finalproject.entities.Locandine;
import it.capstone.finalproject.repository.LocandineRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LocandineService {
    private final LocandineRepository locandineRepository;
    public LocandineResponse getLocandine() {
        Optional<Locandine> locandine = locandineRepository.findById(1L);
        return new LocandineResponse(locandine.get().getImmagineurl());
    }

    public Locandine createLocandine(LocandineRequest locandineRequest) {
        Locandine locandine = Locandine.builder()
                .immagineurl(locandineRequest.getImmagineurl())
                .build();
        return locandineRepository.save(locandine);
    }
}
