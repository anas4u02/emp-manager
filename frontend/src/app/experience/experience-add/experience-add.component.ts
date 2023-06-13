import {Component, OnInit} from '@angular/core';
import {ExperienceInDto, ExperienceOutDto} from "../common/experience.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExperienceService} from "../common/experience.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css']
})
export class ExperienceAddComponent implements OnInit {

  experienceInDto: ExperienceInDto = new ExperienceInDto();
  experienceForm?: FormGroup;

  constructor(private experienceService: ExperienceService, private router: Router) {
  }

  private formInputToInDto(experienceForm: FormGroup): ExperienceInDto {
    let experienceInDto = new ExperienceInDto();
    experienceInDto.candidateId = experienceForm.get('candidateId')?.value;
    experienceInDto.designationId = experienceForm.get('designationId')?.value;
    experienceInDto.organisationName = experienceForm.get('organisationName')?.value;
    experienceInDto.isCurrent = experienceForm.get('isCurrent')?.value;
    experienceInDto.sequence = experienceForm.get('sequence')?.value;
    return experienceInDto;
  }

  ngOnInit(): void {
    this.initialiseExperienceForm();
  }

  initialiseExperienceForm() {
    this.experienceForm = new FormGroup({
      candidateId: new FormControl("", Validators.required),
      designationId: new FormControl("", Validators.required),
      organisationName: new FormControl("", Validators.required),
      isCurrent: new FormControl("", Validators.required),
      sequence: new FormControl("", Validators.required)
    })
  }

  createExperience(experienceInDto: ExperienceInDto): void {
    this.experienceService.create(experienceInDto).subscribe(experienceInDto => {
      this.navigateToAllExperiences();
    })
  }

  onSubmit() {
    if (this.experienceForm) {
      this.experienceInDto = this.formInputToInDto(this.experienceForm);
      this.createExperience(this.experienceInDto);
    }
  }

  navigateToAllExperiences() {
    this.router.navigate(['/'])
  }
}
