# [angular-example](https://angular.tw/start)

## environment

- [macOS 10.15.5](https://www.apple.com/tw/macos/catalina/)
- [WebStorm 2020.1.2](https://www.jetbrains.com/webstorm/)
- [nvm 0.35.3, node 12.18.1, npm 6.14.5](https://nodejs.org/en/)
- [Angular CLI 10.0.4](https://cli.angular.io/)

## [Angular CLI](https://cli.angular.io)
```shell
$ npm install -g @angular/cli

$ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 10.0.4
Node: 12.18.1
OS: darwin x64

Angular: 10.0.5
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
Ivy Workspace: Yes

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.1000.4
@angular-devkit/build-angular     0.1000.4
@angular-devkit/build-optimizer   0.1000.4
@angular-devkit/build-webpack     0.1000.4
@angular-devkit/core              10.0.4
@angular-devkit/schematics        10.0.4
@angular/cli                      10.0.4
@ngtools/webpack                  10.0.4
@schematics/angular               10.0.4
@schematics/update                0.1000.4
rxjs                              6.5.5
typescript                        3.9.7
webpack                           4.43.0
    
$ ng help
```

## init project
```shell
# 建立新專案
$ ng new [project-name]
# --strict 嚴格模式

# 切換到專案目錄
$ cd my-app

# 啟動開發伺服器
$ ng serve
# --open 自動開啟瀏覽器
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
