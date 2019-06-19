# Stencil Tags Input Component

This is tags input web component built using Stencil. It works in any major framework or with no framework at all.

![Sample](https://github.com/ngthienlinh/aln-tags-input/raw/master/assets/sample.png "Sample usages")

## Install this component

### Ionic4 + angular
1. Run `npm install aln-tags-input --save`
2. Include the CUSTOM_ELEMENTS_SCHEMA in the modules that use the components
```ts
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
3. Call defineCustomElements(window) from main.ts (or some other appropriate place)
```ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineCustomElements } from 'aln-tags-input/dist/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements(window);
```
*Reference Stencil doc for more framework integration: https://stenciljs.com/docs/overview*

### Script tag
1. Put a script tag similar to this `<script src='https://unpkg.com/aln-tags-input@latest/dist/aln-controls.js'></script>` in the head of your index.html
2. Then you can use the element anywhere in your template, JSX, html etc

## Using this component
### Ionic4 + angular
Access it using ViewChild or ViewChildren
```ts
import {Component, ElementRef, ViewChild} from '@angular/core';
import 'aln-tags-input'

@Component({
  selector: 'app-test',
  template: '<div><aln-tags-input #tagsInput ></aln-tags-input><button (click)="clearTags()">Remove all tags</button></div>'
})
export class TestPage implements OnInit {

  @ViewChild('tagsInput') tagsInputComponent: ElementRef<HTMLAlnTagsInputElement>;
  
  async clearTags() {
    // Access component property
    console.log(this.tagsInputComponent.nativeElement.tags)
    // Call component method
    await this.tagsInputComponent.nativeElement.clear();
  }
}
```

### Pure html + javascript
Add the tag `<aln-tags-input>` to your html page. We style the component using css4 variables.
Access it via javascript.
```html
...
<style>
  .default-style {
    --tag-bg: green;
    --tag-color: white;
    --tag-border-radius: 5px;
    --tag-input-width: 100px;
    --tag-input-display: inline;
    --tag-padding: 5px 8px;
    --tag-btn-icon-size: 16px;
    --tag-btn-icon-remove-color: white;
    --tag-btn-icon-add-color: black;
  }

  .display-block {
    --tag-input-width: calc(100% - 30px);;
    --tag-input-display: block;
  }
</style>
...
<h4>default</h4>
<aln-tags-input tags-below="false" class="default-style" ></aln-tags-input>
<h4>readonly</h4>
<aln-tags-input id="readonly" tags-below="false" class="default-style" readonly="true"></aln-tags-input>
<h4>block input</h4>
<aln-tags-input name="preset" tags-below="true" class="display-block" hide-input="false"></aln-tags-input>
<h4>show tags only</h4>
<aln-tags-input name="preset" tags-below="true" class="display-block" hide-input="true"></aln-tags-input>
<h4>show tags only + readonly</h4>
<aln-tags-input name="preset" tags-below="true" class="display-block" hide-input="true" readonly="true"></aln-tags-input>

<script>
  const tagReadonly = document.getElementById('readonly')
  tagReadonly.tags = ['this', 'is', 'readonly']

  const tagsInputElems = document.getElementsByName('preset')
  tagsInputElems.forEach(e => {
    e.tags = ['this', 'is', 'a', 'test']
  })
</script>

```

### Property
- tags: array of tags
- tags-below: show tags below input
- readonly: set to true for readonly input
- hide-input: hide input field
### Method
- clear(): remove all tags