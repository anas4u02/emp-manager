package in.ilmtec.shelby.experience.domain.candidate;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CandidateOutDto {

    long id;

    String name;

    String email;

    String imageUrl;
}
