package in.ilmtec.shelby.experience.domain.candidate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidateDAO extends JpaRepository<CandidateEntity, Long> {

}
