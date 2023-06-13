package in.ilmtec.shelby.experience.domain.experience;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienceDAO extends JpaRepository<ExperienceEntity, Long> {
}
