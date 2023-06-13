package in.ilmtec.shelby.experience.domain.designation;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/designations")
@RequiredArgsConstructor
public class DesignationController {

    private final DesignationService designationService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<DesignationOutDto> findAll(){
        return designationService.findAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public DesignationOutDto findOne(@PathVariable("id")Long id){
        return designationService.findOne(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public DesignationOutDto create(@RequestBody DesignationInDto designationInDto){
        return designationService.create(designationInDto);
    }

    @PutMapping("/{id}")
    public DesignationOutDto update(@PathVariable("id")Long id, @RequestBody DesignationInDto designationInDto){
        return designationService.update(id, designationInDto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id")Long id){
        designationService.delete(id);
    }
}
