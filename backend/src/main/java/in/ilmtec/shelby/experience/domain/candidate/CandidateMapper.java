package in.ilmtec.shelby.experience.domain.candidate;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CandidateMapper {
    public CandidateEntity candidateDtoToEntity(CandidateInDto candidateInDto) {
        CandidateEntity candidateEntity = new CandidateEntity();
        candidateEntity.setName(candidateInDto.getName());
        candidateEntity.setEmail(candidateInDto.getEmail());
        candidateEntity.setImageUrl(candidateInDto.getImageUrl());
        return candidateEntity;
    }

    public CandidateOutDto candidateEntityToOutDto(CandidateEntity candidateEntity) {
        CandidateOutDto candidateOutDto = new CandidateOutDto();
        candidateOutDto.setId(candidateEntity.getId());
        candidateOutDto.setName(candidateEntity.getName());
        candidateOutDto.setEmail(candidateEntity.getEmail());
        candidateOutDto.setImageUrl(candidateEntity.getImageUrl());
        return candidateOutDto;
    }

    public List<CandidateOutDto> candidateEntitiesToOutDtos(List<CandidateEntity> candidateEntities) {
        return candidateEntities.stream().
                map(this::candidateEntityToOutDto).
                toList();
    }

    public void inDtoToExistingEntity(CandidateInDto candidateInDto, CandidateEntity candidateEntity) {
        candidateEntity.setName(candidateInDto.getName());
        candidateEntity.setEmail(candidateInDto.getEmail());
        candidateEntity.setImageUrl(candidateInDto.getImageUrl());
    }
}
