package in.ilmtec.shelby.experience.domain.experience;

import in.ilmtec.shelby.experience.domain.candidate.CandidateOutDto;
import in.ilmtec.shelby.experience.domain.designation.DesignationOutDto;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ExperienceOutDto {

    long id;

    String organisationName;

    boolean isCurrent;

    int sequence;

    CandidateOutDto candidateOutDto;

    DesignationOutDto designationOutDto;
}
