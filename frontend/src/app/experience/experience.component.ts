import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExperienceOutDto} from "./common/experience.model";
import {Router} from "@angular/router";
import {ExperienceService} from "./common/experience.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceOutDtos: ExperienceOutDto[] = [];

  constructor(private experienceService: ExperienceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllExperiences()
  }

  getAllExperiences() {
    this.experienceService.findAll().subscribe(experienceOutDtos => {
      this.experienceOutDtos = experienceOutDtos;
    });
  }

  navigateToExperienceUpdate(experienceOutDto: ExperienceOutDto) {
    this.router.navigate(['/experience-update', experienceOutDto.id]);
  }

  experienceDelete(experienceOutDto: ExperienceOutDto) {
    if (experienceOutDto.id) {
      this.experienceService.delete(experienceOutDto.id).subscribe(experienceOutDtos => {
        this.getAllExperiences();
      })
    }
  }
}
