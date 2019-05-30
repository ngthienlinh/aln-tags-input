# Stencil Tags Input Component

This is tags input web component built using Stencil. It works in any major framework or with no framework at all.

## Using this component

### Ionic4 + angular
- Run `npm install aln-tags-input --save`
- Include the CUSTOM_ELEMENTS_SCHEMA in the modules that use the components
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```
- Call defineCustomElements(window) from main.ts (or some other appropriate place)
```javascript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineCustomElements } from 'test-components/dist/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements(window);
```
** Original doc: https://stenciljs.com/docs/angular **

### Script tag
- Put a script tag similar to this `<script src='https://unpkg.com/aln-tags-input@0.0.5/dist/aln-controls.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install aln-tags-input --save`
- Put a script tag similar to this `<script src='node_modules/aln-tags-input/dist/aln-controls.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install aln-tags-input --save`
- Add an import to the npm packages `import aln-tags-input;`
- Then you can use the element anywhere in your template, JSX, html etc