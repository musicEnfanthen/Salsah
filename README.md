# Salsah

```
The alpha of SALSAH version 2 has begun!
```

This is the repository for the [Knora](https://github.com/dhlab-basel/Knora) team's 
graphical user interface called SALSAH (System for Annotation and Linkage of Sources in Arts and Humanities).

It is developed by the [Digital Humanities Lab](http://www.dhlab.unibas.ch/) at the [University of Basel](https://www.unibas.ch/en.html), and is supported by the [Swiss Academy of Humanities and Social Sciences](http://www.sagw.ch/en/sagw.html).

Salsah is [free software](http://www.gnu.org/philosophy/free-sw.en.html), released under the [GNU Affero General Public License](http://www.gnu.org/licenses/agpl-3.0.en.html).

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Developer Environment

### Developer Install
Install [angular-cli](https://github.com/angular/angular-cli) first.

After cloning the Salsah code, you have to install the node package dependencies.

Run `npm install`

If there are some problems during the installation, try to install the following packages:
    
    npm install @types/node
    
    npm install webpack-dev-server


### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

The SALSAH structure contents directories for each module type.
 `components/`, `directives/`, `services/`, `pipes/` 
 
 The 'components' folder has some sub folders depending on the Salsah architecture definition. To create a new component, like the imageObject, you have to run the ng command as follow:
  
 `ng g component components/object/image-object`


### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Commit Message Schema

When writing commit messages, we stick to this schema:

```
type (scope): subject
body
```

Types:

- feature (new feature for the user)
- fix (bug fix for the user)
- docs (changes to the documentation)
- style (formatting, etc; no production code change)
- refactor (refactoring production code, eg. renaming a variable)
- test (adding missing tests, refactoring tests; no production code change)
- build (changes to node, node_modules, angular2, etc.; no production code changes)
- enhancement (residual category)

Example:

```
feature (resources route): add route for resource creation
- add path for multipart request
- adapt handling of resources responder

```
