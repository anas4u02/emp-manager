package in.ilmtec.shelby.experience.domain.candidate;

public class CandidateNotFoundException extends  RuntimeException{
    public CandidateNotFoundException(String message){
        super(message);
    }
}
