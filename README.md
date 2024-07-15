# Implementación de Cypress desde cero

Este es un proyecto donde aplico el patrón de diseño Page Object Model (POM), ejecución de pruebas en paralelo, integración continua con AWS Codebuild y la generación de reportes de pruebas HTML con Allure reporter en un bucket de S3 de Amazon.



## Screenshots de reporte HTML en AWS

![Reporte Allure visión general](https://github.com/metinoco/cypress-project/blob/main/Media/reporter_1.png)
![Reporte Allure tests suite](https://github.com/metinoco/cypress-project/blob/main/Media/reporter_2.png)

## Instalación del proyecto

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

## 🧞 Comandos

Todos los comandos se pueden correr desde la raíz del proyecto:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run ejecutar-pruebas`| Ejecutar los tests en modo headless              |
| `npm run generar-reporte` | Generar el reporte HTML de Allure en el directorio /allure-report         |
| `npm run abrir-report`    | Abrir el reporte de Allure en el navegador prederteminado     |
| `npm run test`            | Ejecutar los tests en modo headless, generar y abrir el reporte HTML en el navegador prederteminado. |
| `npm run cy:parallel` | Limpiar el reporte HTML, ejecutar los tests en paralelo y generar el reporte HTML                   |