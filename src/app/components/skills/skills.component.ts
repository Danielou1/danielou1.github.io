import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Language, LanguageService } from '../../language.service';
import { SceneControlService } from '../../scene-control.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy {

  currentLanguage: Language = 'de';
  private langSub!: Subscription;

  skillsData = {
    de: {
      title: 'Technische Fähigkeiten',
      categories: [
        {
          name: 'Programmiersprachen',
          skills: [
            { name: 'C/C++', level: 90, description: 'Umfassende Erfahrung in Systemprogrammierung und Embedded-Anwendungen.' },
            { name: 'Java', level: 85, description: 'Entwicklung von Backend-Diensten und Desktop-Anwendungen.' },
            { name: 'Python', level: 70, description: 'Erfahrung in Skripting, Automatisierung und Datenanalyse.' },
            { name: 'SQL', level: 65, description: 'Solide Kenntnisse in Datenbankabfragen und -management.' }
          ]
        },
        {
          name: 'Webentwicklung & Frameworks',
          skills: [
            { name: 'Angular', level: 85, description: 'Entwicklung komplexer Single-Page-Anwendungen und interaktiver UIs.' },
            { name: 'TypeScript', level: 88, description: 'Typsichere und skalierbare Anwendungsentwicklung.' },
            { name: 'JavaScript', level: 90, description: 'Fundierte Kenntnisse in modernem JavaScript (ES6+).' },
            { name: '.NET', level: 70, description: 'Erfahrung in der Entwicklung von Web-APIs und serverseitiger Logik.' },
          ]
        },
        {
          name: 'Tools & Technologien',
          skills: [
            { name: 'Git & GitHub', level: 90, description: 'Effiziente Versionskontrolle und kollaborative Entwicklung.' },
            { name: 'Docker', level: 75, description: 'Containerisierung von Anwendungen für konsistente Umgebungen.' },
            { name: 'Netlify & Vercel', level: 80, description: 'Deployment und Hosting von Webanwendungen.'},
            { name: 'Matlab/Simulink', level: 70, description: 'Modellierung und Simulation von Systemen.' },
            { name: 'SPS (PLC)', level: 60, description: 'Grundlagen der speicherprogrammierbaren Steuerungen.' }
          ]
        }
      ]
    },
    en: {
      title: 'Technical Skills',
      categories: [
        {
          name: 'Programming Languages',
          skills: [
            { name: 'C/C++', level: 90, description: 'Extensive experience in system programming and embedded applications.' },
            { name: 'Java', level: 85, description: 'Development of backend services and desktop applications.' },
            { name: 'Python', level: 70, description: 'Experience in scripting, automation, and data analysis.' },
            { name: 'SQL', level: 65, description: 'Solid knowledge in database querying and management.' }
          ]
        },
        {
          name: 'Web Development & Frameworks',
          skills: [
            { name: 'Angular', level: 85, description: 'Development of complex single-page applications and interactive UIs.' },
            { name: 'TypeScript', level: 88, description: 'Type-safe and scalable application development.' },
            { name: 'JavaScript', level: 90, description: 'In-depth knowledge of modern JavaScript (ES6+).' },
            { name: '.NET', level: 70, description: 'Experience in developing web APIs and server-side logic.' },
          ]
        },
        {
          name: 'Tools & Technologies',
          skills: [
            { name: 'Git & GitHub', level: 90, description: 'Efficient version control and collaborative development.' },
            { name: 'Docker', level: 75, description: 'Containerization of applications for consistent environments.' },
            { name: 'Netlify & Vercel', level: 80, description: 'Deployment and hosting of web applications.'},
            { name: 'Matlab/Simulink', level: 70, description: 'System modeling and simulation.' },
            { name: 'SPS (PLC)', level: 60, description: 'Fundamentals of programmable logic controllers.' }
          ]
        }
      ]
    }
  };

  constructor(public languageService: LanguageService, private sceneControlService: SceneControlService) {}

  ngOnInit(): void {
    this.langSub = this.languageService.language$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  goBack(): void {
    this.sceneControlService.requestCameraReset();
  }
}