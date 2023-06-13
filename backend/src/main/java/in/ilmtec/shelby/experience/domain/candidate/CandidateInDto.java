package in.ilmtec.shelby.experience.domain.candidate;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CandidateInDto {
    private String name;
    private String email;
    private String imageUrl;
}
