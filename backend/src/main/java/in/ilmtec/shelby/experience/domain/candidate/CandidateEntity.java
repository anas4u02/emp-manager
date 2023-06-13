package in.ilmtec.shelby.experience.domain.candidate;

import in.ilmtec.shelby.experience.domain.experience.ExperienceEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "candidate")
public class CandidateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;

    private String name;

    private String email;

    private String imageUrl;

    @OneToMany(cascade = CascadeType.ALL)
    private List<ExperienceEntity> experienceEntities = new ArrayList<>();
}
