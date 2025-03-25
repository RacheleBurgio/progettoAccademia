package it.capstone.finalproject.locandine;

import it.capstone.finalproject.entities.Locandine;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/locandine")
@RequiredArgsConstructor
public class locandinaController {
    private final LocandineService locandineService;
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public LocandineResponse getLocandine() {
        return locandineService.getLocandine();
    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Locandine createLocandine(@RequestBody LocandineRequest locandineRequest) {
    try {
        return locandineService.createLocandine(locandineRequest);
    } catch (Exception e) {
        throw new RuntimeException("Error creating locandine", e);
    }
    }
}
