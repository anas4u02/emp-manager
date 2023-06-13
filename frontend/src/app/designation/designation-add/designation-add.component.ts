import {Component, OnInit} from '@angular/core';
import {DesignationInDto} from "../common/designation.model";
import {DesignationService} from "../common/designation.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-designation-add',
  templateUrl: './designation-add.component.html',
  styleUrls: ['./designation-add.component.css']
})
export class DesignationAddComponent implements OnInit {

  designationInDto: DesignationInDto = new DesignationInDto();
  designationForm?: FormGroup;

  constructor(private designationService: DesignationService, private router: Router) {
  }

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm() {
    this.designationForm = new FormGroup({
      title: new FormControl("", Validators.required),
      locationType: new FormControl("", Validators.required),
      employmentType: new FormControl("", Validators.required)
    })
  }

  onSubmit() {
    if (this.designationForm) {
      this.designationInDto = this.formInputToDesignationInDto(this.designationForm);
      this.createDesignation(this.designationInDto);
    }
  }

  private formInputToDesignationInDto(designationForm: FormGroup): DesignationInDto {
    let designationInDto = new DesignationInDto();
    designationInDto.title = designationForm.get('title')?.value;
    designationInDto.locationType = designationForm.get('locationType')?.value;
    designationInDto.employmentType = designationForm.get('employmentType')?.value;
    return designationInDto;
  }

  createDesignation(designationInDto: DesignationInDto): void {
    this.designationService.create(designationInDto).subscribe(designationInDtos => {
      this.navigateToDesignations();
    });
  }

  navigateToDesignations() {
    this.router.navigate(['/'])
  }
}
