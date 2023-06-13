package in.ilmtec.shelby.experience.domain.experience;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ExperienceInDto {

    long candidateId;

    long designationId;

    String organisationName;

    boolean isCurrent;

    int sequence;

}
