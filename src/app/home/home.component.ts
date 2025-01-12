import { Component } from '@angular/core';
declare const particlesJS: any; // Declara a função global do Particles.js

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentVersion: string = ' ECMAScript 5';
  supportedVersions: string[] = ['Carregando...'];  // Inicializado com "Carregando..."

  ngOnInit() {
    this.loadParticles();

  }
  loadParticles(): void {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80 },
        size: { value: 4 },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00ff00",
        },
        color: { value: "#00ff00" },
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: {
            distance: 50, // Distância de afastamento
            duration: 0.4, // Duração do efeito
          },
        }
      },
    });
  }
}
