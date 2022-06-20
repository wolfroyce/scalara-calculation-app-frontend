# CalculationApp Frontend

Entwickleraufgabe

Was brauche ich um die Applikation zu starten?

- Java
- npm (package manager)
- angular cli
- IDE, um Java Applikation (Backend) zu starten

Um die Anwendung zu starten führe folgende Schritte aus:

1. Checke sowohl den master Branch des
   backend-repos (https://github.com/wolfroyce/scalara-calculation-app-backend/tree/master) als auch des
   frontend-repos (https://github.com/wolfroyce/scalara-calculation-app-frontend/tree/master)
   aus
2. Starte zuerst das Backend (Über eine beliebige IDE)
3. Starte das Frontend
  - Öffne eine beliebige CLI und navigiere in das Folder "calculationapp-frontend"
  - Führe dort "ng serve" aus um das Frontend zu starten
4. Öffne http://localhost:4200/home (möglicherweise läuft das Frontend auf einem anderen Port. Für diesen Fall ändere
   bitten der Port in der URL. Standardmäßig sollte es jedoch der Port: 4200 für Angular sein)

Um eine neue Rechenregel hinzuzufügen, sind folgende Schritte notwendig:

1. Beispiel Rechenregel aus "exampleRule.json" in "calculationRules.json" nach der letzten Rechenregel einfügen
2. Neue Rechenregel mit fortlaufender ID (siehe ID der letzten Regel in "calculationRules.json") versehen und
   Attribute (name, description, inputs, calculationRule, variables und ruleAsCode) auf neue Rechenregel anpassen.
3. ruleAsCode muss nach den Standards der "net.objecthunter.exp4j" library eingefügt werden. Für weitere Infos
   siehe: https://www.objecthunter.net/exp4j/
4. "calculationRules.json" speichern

Um eine Rechenregel anzupassen sind folgende Schritte notwendig:

1. Zu bearbeitende Rechenregel in "calculationRules.json" suchen und nach Belieben anpassen (json Format ist hierbei zu
   beachten)
2. Falls "ruleAsCode" angepasst werden soll, muss diese nach den Standards der "net.objecthunter.exp4j" library
   angepasst werden. Für weitere Infos siehe: https://www.objecthunter.net/exp4j/
3. "calculationRules.json" speichern

Um eine Rechenregel zu löschen sind folgende Schritte notwendig:

1. "calculationRules.json" öffnen und Rechenregel aus "calculationRule"-Array entfernen.
2. "calculationRules.json" speichern

## Standard README.md Text following...
# CalculationappFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
