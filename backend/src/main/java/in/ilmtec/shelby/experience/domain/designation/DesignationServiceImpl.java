package in.ilmtec.shelby.experience.domain.designation;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class DesignationServiceImpl implements DesignationService{

    DesignationDAO designationDAO;
    DesignationMapper designationMapper;

    @Override
    public List<DesignationOutDto> findAll() {
        List<DesignationEntity> designationEntities = designationDAO.findAll();
        return designationMapper.designationEntitiesToOutDtos(designationEntities);
    }

    @Override
    public DesignationOutDto findOne(Long id) {
        DesignationEntity designationEntity = getDesignationEntity(id);
        return designationMapper.designationEntityToOutDto(designationEntity);
    }

    @Override
    public DesignationOutDto create(DesignationInDto designationInDto) {
        DesignationEntity designationEntity = designationMapper.designationDtoToEntity(designationInDto);
        DesignationEntity savedDesignationEntity = designationDAO.save(designationEntity);
        return designationMapper.designationEntityToOutDto(savedDesignationEntity);
    }

    @Override
    public DesignationOutDto update(Long id, DesignationInDto designationInDto) {
        DesignationEntity designationEntity = getDesignationEntity(id);
        designationMapper.inDtoToExistingEntity(designationInDto,designationEntity);
        DesignationEntity savedDesignationEntity = designationDAO.save(designationEntity);
        return designationMapper.designationEntityToOutDto(savedDesignationEntity);
    }

    @Override
    public void delete(Long id) {
        DesignationEntity designationEntity = getDesignationEntity(id);
        designationDAO.delete(designationEntity);
    }

    private DesignationEntity getDesignationEntity (Long id) {
        DesignationEntity designationEntity = designationDAO.findById(id).
                orElseThrow(() -> new DesignationNotFoundException("Designation by id " + id + " was not found!"));
        return designationEntity;
    }
}
