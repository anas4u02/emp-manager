import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CandidateInDto} from "../common/candidate.model";
import {CandidateService} from "../common/candidate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-candidate-add',
  templateUrl: './candidate-add.component.html',
  styleUrls: ['./candidate-add.component.css']
})
export class CandidateAddComponent implements OnInit {

  candidateInDto: CandidateInDto = new CandidateInDto();
  candidateForm?: FormGroup;

  constructor(private candidateService: CandidateService, private router: Router) {
  }

  ngOnInit(): void {
    this.initialiseCandidateForm();
  }

  initialiseCandidateForm() {
    this.candidateForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      imageUrl: new FormControl("", Validators.required)
    })
  }

  onSubmit() {
    if (this.candidateForm) {
      this.candidateInDto = this.formInputToCandidateInDto(this.candidateForm);
      this.createCandidate(this.candidateInDto);
    }
  }

  private formInputToCandidateInDto(candidateForm: FormGroup): CandidateInDto {
    let candidateInDto = new CandidateInDto();
    candidateInDto.name = candidateForm.get('name')?.value;
    candidateInDto.email = candidateForm.get('email')?.value;
    candidateInDto.imageUrl = candidateForm.get('imageUrl')?.value;
    return candidateInDto;

  }

  createCandidate(candidateInDto: CandidateInDto): void {
    this.candidateService.create(candidateInDto).subscribe(candidateInDtos => {
      this.navigateToAllCandidates();
    });
  }

  navigateToAllCandidates() {
    this.router.navigate(['/'])
  }
}
