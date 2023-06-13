package in.ilmtec.shelby.experience.domain.candidate;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/candidates")
public class CandidateController {

    private final CandidateService candidateService;
    public CandidateController(CandidateServiceImpl candidateService){
        this.candidateService = candidateService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CandidateOutDto> findAll(){
        return candidateService.findAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CandidateOutDto findById(@PathVariable("id")Long id){
        return candidateService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CandidateOutDto add(@RequestBody CandidateInDto candidateInDto){
        return candidateService.add(candidateInDto);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CandidateOutDto update(@PathVariable("id")Long id, @RequestBody CandidateInDto candidateInDto){
        return candidateService.update(id, candidateInDto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void delete(@PathVariable("id")Long id){
        candidateService.delete(id);
    }
}
