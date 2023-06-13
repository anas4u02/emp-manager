import {CandidateOutDto} from "../../candidate/common/candidate.model";
import {DesignationOutDto} from "../../designation/common/designation.model";

export class ExperienceInDto {
  candidateId?: number;
  designationId?: number;
  organisationName?: string;
  isCurrent?: boolean;
  sequence?: number;
}

export class ExperienceOutDto {
  id?: number;
  candidateOutDto?: CandidateOutDto;
  designationOutDto?: DesignationOutDto;
  organisationName?: string;
  isCurrent?: boolean;
  sequence?: number;
}
