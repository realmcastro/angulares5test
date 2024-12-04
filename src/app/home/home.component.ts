import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentVersion: string = ' ECMAScript 5';
  supportedVersions: string[] = ['Carregando...'];  // Inicializado com "Carregando..."

  ngOnInit() {
    //this.detectCurrentECMA();
    this.detectSupportedVersions();
  }

  // Função para detectar as versões ECMAScript suportadas pelo navegador
  detectSupportedVersions() {
    const versions = [
      { name: "ES5", test: () => typeof Array.isArray === "function" && typeof JSON === "object" },
      { name: "ES6 (ES2015)", test: () => {
          try {
            eval('let testLet = 1; const testConst = 2;');
            return true;
          } catch (e) {
            return false;
          }
        }
      },
      { name: "ES7 (ES2016)", test: () => typeof Array.prototype.includes === "function" },
      { name: "ES11 (ES2020)", test: () => typeof BigInt === "function" },
    ];

    // console.log(this.supportedVersions);

    this.supportedVersions = versions
      .filter(version => version.test())
      .map(version => version.name);
  }
}
