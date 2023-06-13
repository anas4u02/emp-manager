package in.ilmtec.shelby.experience.domain.designation;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DesignationMapper {

    public DesignationOutDto designationEntityToOutDto(DesignationEntity designationEntity){
        DesignationOutDto designationOutDto = new DesignationOutDto();
        designationOutDto.setId(designationEntity.getId());
        designationOutDto.setTitle(designationEntity.getTitle());
        designationOutDto.setLocationType(designationEntity.getLocationType());
        designationOutDto.setEmploymentType(designationEntity.getEmploymentType());
        return designationOutDto;
    }

    public DesignationEntity designationDtoToEntity(DesignationInDto designationInDto){
        DesignationEntity designationEntity = new DesignationEntity();
        designationEntity.setTitle(designationInDto.getTitle());
        designationEntity.setLocationType(designationInDto.getLocationType());
        designationEntity.setEmploymentType(designationInDto.getEmploymentType());
        return designationEntity;
    }

    public List<DesignationOutDto> designationEntitiesToOutDtos(List<DesignationEntity> designationEntities){
        return designationEntities.stream().
                map(this::designationEntityToOutDto).
                toList();
    }

    public void inDtoToExistingEntity(DesignationInDto designationInDto, DesignationEntity designationEntity) {
        designationEntity.setTitle(designationInDto.getTitle());
        designationEntity.setLocationType(designationInDto.getLocationType());
        designationEntity.setEmploymentType(designationInDto.getEmploymentType());
    }
}
