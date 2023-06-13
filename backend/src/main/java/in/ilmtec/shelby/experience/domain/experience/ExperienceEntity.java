package in.ilmtec.shelby.experience.domain.experience;

import in.ilmtec.shelby.experience.domain.candidate.CandidateEntity;
import in.ilmtec.shelby.experience.domain.designation.DesignationEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Table(name = "experience")
public class ExperienceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String organisationName;

    private boolean isCurrent;

    private int sequence;

    @ManyToOne
    @JoinColumn(name = "ref_candidate_id")
    private CandidateEntity candidateEntity;

    @OneToOne
    @JoinColumn(name = "ref_designation_id")
    private DesignationEntity designationEntity;
}
