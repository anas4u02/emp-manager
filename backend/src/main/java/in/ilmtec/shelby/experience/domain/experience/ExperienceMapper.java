package in.ilmtec.shelby.experience.domain.experience;

import in.ilmtec.shelby.experience.domain.candidate.CandidateMapper;
import in.ilmtec.shelby.experience.domain.candidate.CandidateOutDto;
import in.ilmtec.shelby.experience.domain.designation.DesignationMapper;
import in.ilmtec.shelby.experience.domain.designation.DesignationOutDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ExperienceMapper {

    private final CandidateMapper candidateMapper;
    private final DesignationMapper designationMapper;

    public ExperienceOutDto EntityToOutDto(ExperienceEntity experienceEntity) {
        ExperienceOutDto experienceOutDto = new ExperienceOutDto();
        experienceOutDto.setId(experienceEntity.getId());
        experienceOutDto.setOrganisationName(experienceEntity.getOrganisationName());
        experienceOutDto.setCurrent(experienceEntity.isCurrent());
        setCandidateEntity(experienceEntity, experienceOutDto);
        setDesignationEntity(experienceEntity, experienceOutDto);
        return experienceOutDto;
    }

    private void setCandidateEntity(ExperienceEntity experienceEntity, ExperienceOutDto experienceOutDto) {
        CandidateOutDto candidateOutDto = candidateMapper.candidateEntityToOutDto(experienceEntity.getCandidateEntity());
        experienceOutDto.setCandidateOutDto(candidateOutDto);
    }

    private void setDesignationEntity(ExperienceEntity experienceEntity, ExperienceOutDto experienceOutDto) {
        DesignationOutDto designationOutDto = designationMapper.designationEntityToOutDto(experienceEntity.getDesignationEntity());
        experienceOutDto.setDesignationOutDto(designationOutDto);
    }

    public ExperienceEntity DtoToEntity(ExperienceInDto experienceInDto) {
        ExperienceEntity experienceEntity = new ExperienceEntity();
        experienceEntity.setOrganisationName(experienceInDto.getOrganisationName());
        experienceEntity.setCurrent(experienceInDto.isCurrent());
        experienceEntity.setSequence(experienceInDto.getSequence());
        return experienceEntity;
    }

    public List<ExperienceOutDto> experienceEntitiesToOutDtos(List<ExperienceEntity> experienceEntities) {
        return experienceEntities.stream().
                map(this::EntityToOutDto).
                toList();
    }

    public void inDtoToExistingEntity(ExperienceInDto experienceInDto, ExperienceEntity experienceEntity) {
        experienceEntity.setOrganisationName(experienceInDto.getOrganisationName());
        experienceEntity.setCurrent(experienceInDto.isCurrent());
        experienceEntity.setSequence(experienceInDto.getSequence());
    }
}
