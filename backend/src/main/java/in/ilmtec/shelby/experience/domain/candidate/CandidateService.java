package in.ilmtec.shelby.experience.domain.candidate;

import java.util.List;

public interface CandidateService {

    List<CandidateOutDto> findAll();

    CandidateOutDto findById(Long id);

    CandidateOutDto add(CandidateInDto candidateInDto);

    CandidateOutDto update(Long id, CandidateInDto candidateInDto);

    void delete(Long id);
}
