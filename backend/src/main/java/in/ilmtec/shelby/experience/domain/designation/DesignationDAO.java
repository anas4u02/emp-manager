package in.ilmtec.shelby.experience.domain.designation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DesignationDAO extends JpaRepository<DesignationEntity, Long> {

}
