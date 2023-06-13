import {Component, OnInit} from '@angular/core';
import {ExperienceInDto, ExperienceOutDto} from "../common/experience.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExperienceService} from "../common/experience.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-experience-update',
  templateUrl: './experience-update.component.html',
  styleUrls: ['./experience-update.component.css']
})
export class ExperienceUpdateComponent implements OnInit {

  experienceId?: number;
  experienceOutDto?: ExperienceOutDto;
  experienceForm?: FormGroup;
  isFieldDisabled = false;

  constructor(private experienceService: ExperienceService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initialiseForm();
    this.setId();
    this.setExperience();
  }

  initialiseForm() {
    this.experienceForm = new FormGroup({
      candidateId: new FormControl({disabled: true}),
      designationId: new FormControl({disabled: true}),
      organisationName: new FormControl("", Validators.required),
      isCurrent: new FormControl("", Validators.required),
      sequence: new FormControl("", Validators.required)
    })
  }

  setId() {
    this.experienceId = this.route.snapshot.params['id'];
  }

  setExperience() {
    if (this.experienceId) {
      this.experienceService.findById(this.experienceId).subscribe(experienceOutDto => {
        this.experienceOutDto = experienceOutDto;
        this.experienceForm?.controls['candidateId'].setValue(this.experienceOutDto.candidateOutDto?.name);
        this.experienceForm?.controls['designationId'].setValue(this.experienceOutDto.designationOutDto?.title);
        this.experienceForm?.controls['organisationName'].setValue(this.experienceOutDto.organisationName);
        this.experienceForm?.controls['isCurrent'].setValue(this.experienceOutDto.isCurrent);
        this.experienceForm?.controls['sequence'].setValue(this.experienceOutDto.sequence);
      })
    }
  }

  navigateToAllExperiences() {
    this.router.navigate(['/']);
  }

  mapFromFormValueToInDto(): ExperienceInDto {
    let experienceInDto = new ExperienceInDto();
    experienceInDto.organisationName = this.experienceForm?.get('organisationName')?.value;
    experienceInDto.isCurrent = this.experienceForm?.get('organisationName')?.value;
    experienceInDto.sequence = this.experienceForm?.get('sequence')?.value;
    return experienceInDto;
  }

  getFormValues(): ExperienceOutDto {
    let experienceOutDto = new ExperienceOutDto();
    experienceOutDto.organisationName = this.experienceForm?.get('organisationName')?.value;
    experienceOutDto.isCurrent = this.experienceForm?.get('isCurrent')?.value;
    experienceOutDto.sequence = this.experienceForm?.get('sequence')?.value;
    return experienceOutDto;
  }

  onSubmit(): void {
    this.experienceOutDto = this.getFormValues();
    if (this.experienceId) {
      this.experienceService.update(this.experienceId, this.mapFromFormValueToInDto()).subscribe(experienceOutDto => {
        this.navigateToAllExperiences();
      })
    }
  }
}
