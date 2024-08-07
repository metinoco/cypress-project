# Implementación de Cypress desde cero

Este es un proyecto donde aplico el patrón de diseño Page Object Model (POM), ejecución de pruebas en paralelo, integración continua con AWS Codebuild y la generación de reportes de pruebas HTML con Allure reporter en un bucket de S3 de Amazon.



## Screenshots de reporte HTML en AWS

![Reporte Allure visión general](https://github.com/metinoco/cypress-project/blob/main/Media/reporter_1.png)
![Reporte Allure tests suite](https://github.com/metinoco/cypress-project/blob/main/Media/reporter_2.png)

Aquí puedes interactuar con el reporte HTML de Allure alojado en el bucket de S3.
[AWS S3 Allure reporter](https://reporte-pruebas-cy.s3.amazonaws.com/index.html) 

## ⚙️ Instalación del proyecto

Clonar el proyecto en local

```bash
  git init
  git clone https://github.com/metinoco/cypress-project.git
```

Ir al proyecto

```bash
  cd mi-proyecto
```

Instalar dependencias

```bash
  npm install
```

Instalar versión de Cypress del proyecto

```bash
  npm install --save-dev cypress@12.13.0
```

> [!WARNING]
> El paquete de Allure utilizado en este proyecto genera algunos problemas con las versiones nuevas de Cypress al crear el reporte HTML, para solucionarlo se debe instalar el siguiente paquete:
```bash
  npm i @mmisty/cypress-allure-adapter
```
Importar en el archivo e2e.js:

```bash
  import '@mmisty/cypress-allure-adapter/support';
```

Eliminar la línea de código del paquete anterior y configurar en el archivo cypress.config.js el nuevo paquete:

```bash
const { configureAllureAdapterPlugins } = requiere ('@mmisty/cypress-allure-adapter/plugins');

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      
      return config;
    },
    // ...
  }
});
```


## 🧞 Comandos

Todos los comandos se pueden correr desde la raíz del proyecto:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run ejecutar-pruebas`| Ejecutar los tests en modo headless              |
| `npm run generar-reporte` | Generar el reporte HTML de Allure en el directorio /allure-report         |
| `npm run abrir-report`    | Abrir el reporte de Allure en el navegador prederteminado     |
| `npm run test`            | Ejecutar los tests en modo headless, generar y abrir el reporte HTML en el navegador prederteminado. |
| `npm run cy:parallel` | Limpiar el reporte HTML, ejecutar los tests en paralelo y generar el reporte HTML                   |

## <img src='https://raw.githubusercontent.com/ShahriarShafin/ShahriarShafin/main/Assets/handshake.gif' width="45px"> Conectemos:
###

<div align="left">
  <a href="https://www.linkedin.com/in/metinoco" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo"  />
  </a>
  <a href="https://discordapp.com/users/monshy.tinoco" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Discord&logo=discord&label=&color=7289DA&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="discord logo"  />
  </a>
  <a href="https://t.me/metinoco" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Telegram&logo=telegram&label=&color=2CA5E0&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="telegram logo"  />
  </a>
</div>

###
