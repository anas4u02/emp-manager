package in.ilmtec.shelby.experience.domain.experience;

import in.ilmtec.shelby.experience.domain.candidate.CandidateDAO;
import in.ilmtec.shelby.experience.domain.candidate.CandidateEntity;
import in.ilmtec.shelby.experience.domain.designation.DesignationDAO;
import in.ilmtec.shelby.experience.domain.designation.DesignationEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExperienceServiceImpl implements ExperienceService {

    private final ExperienceDAO experienceDAO;
    private final ExperienceMapper experienceMapper;
    private final CandidateDAO candidateDAO;
    private final DesignationDAO designationDAO;

    @Override
    public List<ExperienceOutDto> findAll() {
        List<ExperienceEntity> experienceEntities = experienceDAO.findAll();
        return experienceMapper.experienceEntitiesToOutDtos(experienceEntities);
    }

    @Override
    public ExperienceOutDto findOne(Long id) {
        ExperienceEntity experienceEntity = getExperienceEntity(id);
        return experienceMapper.EntityToOutDto(experienceEntity);
    }

    @Override
    public ExperienceOutDto create(ExperienceInDto experienceInDto) {
        ExperienceEntity experienceEntity = experienceMapper.DtoToEntity(experienceInDto);
        CandidateEntity candidateEntity = candidateDAO.getById(experienceInDto.getCandidateId());
        DesignationEntity designationEntity = designationDAO.getById(experienceInDto.getDesignationId());
        experienceEntity.setCandidateEntity(candidateEntity);
        experienceEntity.setDesignationEntity(designationEntity);
        experienceDAO.save(experienceEntity);
        return experienceMapper.EntityToOutDto(experienceEntity);
    }

    @Override
    public ExperienceOutDto update(Long id, ExperienceInDto experienceInDto) {
        ExperienceEntity experienceEntity = getExperienceEntity(id);
        experienceMapper.inDtoToExistingEntity(experienceInDto, experienceEntity);
        ExperienceEntity savedExperienceEntity = experienceDAO.save(experienceEntity);
        return experienceMapper.EntityToOutDto(savedExperienceEntity);
    }

    @Override
    public void delete(Long id) {
        ExperienceEntity experienceEntity = getExperienceEntity(id);
        experienceDAO.delete(experienceEntity);
    }

    private ExperienceEntity getExperienceEntity(Long id) {
        return experienceDAO.findById(id).
                orElseThrow(() -> new ExperienceNotFoundException("Experience by id: " + id + " not found!!"));
    }
}
