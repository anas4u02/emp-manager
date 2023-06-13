package in.ilmtec.shelby.experience.domain.experience;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/experiences")
public class ExperienceController {

    private final ExperienceService experienceService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ExperienceOutDto> findAll(){
        return experienceService.findAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ExperienceOutDto findOne(@PathVariable("id")Long id){
        return experienceService.findOne(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ExperienceOutDto create(@RequestBody ExperienceInDto experienceInDto){
        return experienceService.create(experienceInDto);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ExperienceOutDto update(@PathVariable("id")Long id, @RequestBody ExperienceInDto experienceInDto){
        return experienceService.update(id,experienceInDto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void delete(@PathVariable("id")Long id){
        experienceService.delete(id);
    }
}
