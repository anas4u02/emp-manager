package in.ilmtec.shelby.experience.domain.designation;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DesignationInDto {
    private String title;
    private String locationType;
    private String employmentType;
}
