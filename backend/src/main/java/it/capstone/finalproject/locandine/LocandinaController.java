package it.capstone.finalproject.locandine;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/locandine")
@RequiredArgsConstructor
public class LocandinaController {
    private final LocandineService locandineService;

    @GetMapping
    public List<LocandineResponse> getAllLocandine() {
        return locandineService.getAllLocandine();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public LocandineResponse createLocandine(@RequestBody LocandineRequest locandineRequest) {
        return locandineService.createLocandina(locandineRequest);
    }
}


