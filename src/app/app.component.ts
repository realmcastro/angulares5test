import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Variáveis tipadas corretamente
  currentVersion: string = 'Carregando...';
  supportedVersions: string[] = ['Carregando...'];  // Inicializado com "Carregando..."

  ngOnInit() {
    this.detectCurrentECMA();
    this.detectSupportedVersions();
  }

  // Função para detectar a versão ECMAScript utilizada no projeto
  detectCurrentECMA() {
    try {
      // Tentando usar let e const, se o navegador não suportar, dará erro
      eval('let testLet = 1; const testConst = 2;');
      this.currentVersion = 'ES5';  // Se a execução for bem-sucedida, é ES6 ou superior
    } catch (e) {
      this.currentVersion = 'ES5 ou inferior';  // Caso contrário, é ES5 ou inferior
    }
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
