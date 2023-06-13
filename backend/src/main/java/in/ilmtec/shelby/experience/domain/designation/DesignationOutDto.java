package in.ilmtec.shelby.experience.domain.designation;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DesignationOutDto {

    long id;

    String title;

    String locationType;

    String employmentType;
}
