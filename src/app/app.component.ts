import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentVersion: string = 'Carregando...';
  supportedVersions: string[] = ['Carregando...'];

  ngOnInit() {
    this.detectCurrentECMA();
    this.detectSupportedVersions();
  }

  // Detectar a versão ECMAScript utilizada no projeto
  detectCurrentECMA() {
    this.currentVersion = typeof let !== 'undefined' && typeof const !== 'undefined' ? 'ES6 ou superior' : 'ES5 ou inferior';
  }

  // Detectar as versões ECMAScript suportadas pelo navegador
  detectSupportedVersions() {
    const versions = [
      { name: "ES5", test: () => typeof Array.isArray === "function" && typeof JSON === "object" },
      { name: "ES6 (ES2015)", test: () => typeof let !== 'undefined' },
      { name: "ES7 (ES2016)", test: () => typeof Array.prototype.includes === "function" },
      { name: "ES11 (ES2020)", test: () => typeof BigInt === "function" },
    ];

    this.supportedVersions = versions.filter(version => version.test()).map(version => version.name);
  }
}
