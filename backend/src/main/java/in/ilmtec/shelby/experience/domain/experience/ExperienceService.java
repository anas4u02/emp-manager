package in.ilmtec.shelby.experience.domain.experience;

import java.util.List;

public interface ExperienceService {

    List<ExperienceOutDto> findAll();

    ExperienceOutDto findOne(Long id);

    ExperienceOutDto create(ExperienceInDto experienceInDto);

    ExperienceOutDto update(Long id, ExperienceInDto experienceInDto);

    void delete(Long id);
}
