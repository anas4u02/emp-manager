import {Component, OnInit} from '@angular/core';
import {DesignationInDto, DesignationOutDto} from "../common/designation.model";
import {DesignationService} from "../common/designation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-designation-update',
  templateUrl: './designation-update.component.html',
  styleUrls: ['./designation-update.component.css']
})
export class DesignationUpdateComponent implements OnInit {

  designationId?: number;
  designationOutDto?: DesignationOutDto;
  designationForm?: FormGroup;

  constructor(private designationService: DesignationService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initialiseForm();
    this.setId();
    this.setDesignation();
  }

  initialiseForm() {
    this.designationForm = new FormGroup({
      title: new FormControl("", Validators.required),
      locationType: new FormControl("", Validators.required),
      employmentType: new FormControl("", Validators.required)
    })
  }

  onSubmit(): void {
    this.designationOutDto = this.getFormValues();
    if (this.designationId) {
      this.designationService.update(this.designationId, this.mapFromFormValueToInDto()).subscribe(designationOutDto => {
        this.navigateToAllDesignations();
      })
    }
  }

  setId() {
    this.designationId = this.route.snapshot.params['id'];
  }

  setDesignation() {
    if (this.designationId) {
      this.designationService.findById(this.designationId).subscribe(designationOutDto => {
        this.designationOutDto = designationOutDto;
        this.designationForm?.controls['title'].setValue(this.designationOutDto.title);
        this.designationForm?.controls['locationType'].setValue(this.designationOutDto.locationType);
        this.designationForm?.controls['employmentType'].setValue(this.designationOutDto.employmentType);
      })
    }
  }

  navigateToAllDesignations() {
    this.router.navigate(['/']);
  }

  mapFromFormValueToInDto(): DesignationInDto {
    let designationInDto = new DesignationInDto();
    designationInDto.title = this.designationForm?.get('title')?.value;
    designationInDto.locationType = this.designationForm?.get('locationType')?.value;
    designationInDto.employmentType = this.designationForm?.get('employmentType')?.value;
    return designationInDto;
  }

  getFormValues(): DesignationOutDto {
    let designationOutDto = new DesignationOutDto();
    designationOutDto.title = this.designationForm?.get('title')?.value;
    designationOutDto.locationType = this.designationForm?.get('locationType')?.value;
    designationOutDto.employmentType = this.designationForm?.get('employmentType')?.value;
    return designationOutDto;
  }
}
