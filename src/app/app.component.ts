// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {
//   profile,
//   aboutMe,
//   skillGroups,
//   experience,
//   projects,
//   openSource,
//   education,
// } from './data';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   profile = profile;
//   aboutMe = aboutMe;
//   skillGroups = skillGroups;
//   experience = experience;
//   projects = projects;
//   openSource = openSource;
//   education = education;

//   expandedIndex: number | null = 0;

//   toggleExperience(i: number) {
//     this.expandedIndex = this.expandedIndex === i ? null : i;
//   }

//   // Project details modal
//   selectedProject: (typeof projects)[number] | null = null;

//   openProject(p: (typeof projects)[number]) {
//     this.selectedProject = p;
//   }

//   closeProject() {
//     this.selectedProject = null;
//   }

//   currentYear = new Date().getFullYear();
// }





import { Component, afterNextRender } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  profile,
  aboutMe,
  skillGroups,
  experience,
  projects,
  openSource,
  education,
} from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  profile = profile;

  aboutMe = aboutMe;

  skillGroups = skillGroups;

  experience = experience;

  projects = projects;

  openSource = openSource;

  education = education;

  expandedIndex: number | null = 0;


  // ========================================
  // SCROLL REVEAL ANIMATION
  // ========================================

  constructor() {

    afterNextRender(() => {

      const elements = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-stagger'
      );

      const observer = new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add('is-visible');

              observer.unobserve(entry.target);

            }

          });

        },
        {
          threshold: 0.15,

          rootMargin: '0px 0px -60px 0px',
        }
      );

      elements.forEach((element) => {

        observer.observe(element);

      });

    });

  }


  // ========================================
  // EXPERIENCE
  // ========================================

  toggleExperience(i: number) {

    this.expandedIndex =
      this.expandedIndex === i ? null : i;

  }


  // ========================================
  // PROJECT DETAILS MODAL
  // ========================================

  selectedProject: (typeof projects)[number] | null = null;


  openProject(p: (typeof projects)[number]) {

    this.selectedProject = p;

  }


  closeProject() {

    this.selectedProject = null;

  }


  // ========================================
  // CURRENT YEAR
  // ========================================

  currentYear = new Date().getFullYear();

}