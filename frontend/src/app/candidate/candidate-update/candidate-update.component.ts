import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CandidateInDto, CandidateOutDto} from "../common/candidate.model";
import {CandidateService} from "../common/candidate.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-candidate-update',
  templateUrl: './candidate-update.component.html',
  styleUrls: ['./candidate-update.component.css']
})
export class CandidateUpdateComponent implements OnInit {

  candidateId?: number;
  candidateOutDto?: CandidateOutDto;
  candidateForm?: FormGroup;

  constructor(private candidateService: CandidateService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initialiseForm();
    this.setId();
    this.setCandidate();
  }

  initialiseForm() {
    this.candidateForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      imageUrl: new FormControl("", Validators.required)
    })
  }

  onSubmit(): void {
    this.candidateOutDto = this.getFormValues();
    if (this.candidateId) {
      this.candidateService.update(this.candidateId, this.mapFromFormValueToInDto()).subscribe(candidateOutDto => {
        this.navigateToAllCandidates();
      })
    }
  }

  setId() {
    this.candidateId = this.route.snapshot.params['id'];
  }

  setCandidate() {
    if (this.candidateId) {
      this.candidateService.findById(this.candidateId).subscribe(candidateOutDto => {
        this.candidateOutDto = candidateOutDto;
        this.candidateForm?.controls['name'].setValue(this.candidateOutDto.name);
        this.candidateForm?.controls['email'].setValue(this.candidateOutDto.email);
        this.candidateForm?.controls['imageUrl'].setValue(this.candidateOutDto.imageUrl);
      })
    }
  }

  navigateToAllCandidates() {
    this.router.navigate(['/']);
  }

  mapFromFormValueToInDto(): CandidateInDto {
    let candidateInDto = new CandidateInDto();
    candidateInDto.name = this.candidateForm?.get('name')?.value;
    candidateInDto.email = this.candidateForm?.get('email')?.value;
    candidateInDto.imageUrl = this.candidateForm?.get('imageUrl')?.value;
    return candidateInDto;
  }

  getFormValues(): CandidateOutDto {
    let candidateOutDto = new CandidateOutDto();
    candidateOutDto.name = this.candidateForm?.get('name')?.value;
    candidateOutDto.email = this.candidateForm?.get('email')?.value;
    candidateOutDto.imageUrl = this.candidateForm?.get('imageUrl')?.value;
    return candidateOutDto;
  }
}
