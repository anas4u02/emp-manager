package in.ilmtec.shelby.experience.domain.candidate;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class CandidateServiceImpl implements CandidateService {

    private final CandidateDAO candidateDAO;
    private final CandidateMapper candidateMapper;

    @Override
    public List<CandidateOutDto> findAll() {
        List<CandidateEntity> candidateEntities = candidateDAO.findAll();
        return candidateMapper.candidateEntitiesToOutDtos(candidateEntities);
    }

    @Override
    public CandidateOutDto findById(Long id) {
        CandidateEntity candidateEntity = getCandidateEntity(id);
        return candidateMapper.candidateEntityToOutDto(candidateEntity);
    }

    @Override
    public CandidateOutDto add(CandidateInDto candidateInDto) {
        CandidateEntity candidateEntity = candidateMapper.candidateDtoToEntity(candidateInDto);
        candidateDAO.save(candidateEntity);
        CandidateOutDto candidateOutDto = candidateMapper.candidateEntityToOutDto(candidateEntity);
        return candidateOutDto;
    }

    @Override
    public CandidateOutDto update(Long id, CandidateInDto candidateInDto) {
        CandidateEntity candidateEntity = getCandidateEntity(id);
        candidateMapper.inDtoToExistingEntity(candidateInDto, candidateEntity);
        CandidateEntity saveCandidateEntity = candidateDAO.save(candidateEntity);
        return candidateMapper.candidateEntityToOutDto(saveCandidateEntity);
    }

    @Override
    public void delete(Long id) {
        CandidateEntity candidateEntity = getCandidateEntity(id);
        candidateDAO.delete(candidateEntity);
    }

    private CandidateEntity getCandidateEntity(Long id) {
        CandidateEntity candidateEntity = candidateDAO.findById(id).
                orElseThrow(() -> new CandidateNotFoundException("Candidate by id " + id + " was not found!"));
        return candidateEntity;
    }
}
