package in.ilmtec.shelby.experience.domain.designation;

import java.util.List;

public interface DesignationService {

    List<DesignationOutDto> findAll();

    DesignationOutDto findOne(Long id);

    DesignationOutDto create(DesignationInDto designationInDto);

    DesignationOutDto update(Long id, DesignationInDto designationInDto);

    void delete(Long id);
}
