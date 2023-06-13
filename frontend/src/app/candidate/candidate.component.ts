import {Component, OnInit} from '@angular/core';
import {CandidateService} from "./common/candidate.service";
import {CandidateOutDto} from "./common/candidate.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidateOutDtos: CandidateOutDto[] = [];

  constructor(private candidateService: CandidateService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCandidates()
  }

  getAllCandidates() {
    this.candidateService.findAll().subscribe(candidateOutDtos => {
      this.candidateOutDtos = candidateOutDtos;
    });
  }

  navigateToCandidateUpdate(candidateOutDto: CandidateOutDto) {
    this.router.navigate(['/candidate-update', candidateOutDto.id]);
  }

  candidateDelete(candidateOutDto: CandidateOutDto) {
    if (candidateOutDto.id) {
      this.candidateService.delete(candidateOutDto.id).subscribe(candidateOutDtos => {
        this.getAllCandidates();
      })
    }
  }
}
