# \<etools-content-panel\>

A simple panel with header to display a collapsible content.
The header can also have buttons on the right side on the title (slotted content `slot="panel-btns""`,
check first usage example).

![alt tag](https://raw.githubusercontent.com/unicef-polymer/etools-content-panel/HEAD/etools-content-panel-demo.png)

## Usage
```html
<etools-content-panel panel-title="Panel title" show-expand-btn>
  <div slot="panel-btns">
    <paper-icon-button icon="add-circle"></paper-icon-button>
    <paper-icon-button icon="create"></paper-icon-button>
    <paper-icon-button icon="polymer"></paper-icon-button>
  </div>
  <div>Your content goes here...</div>
</etools-content-panel>

<etools-content-panel panel-title="Panel title" no-header elevation="2">
  <div>Only content, no header...</div>
</etools-content-panel>

<etools-content-panel panel-title="Panel title" elevation="3" disabled show-expand-btn>
  <div>Disabled state...</div>
</etools-content-panel>

<etools-content-panel panel-title="Panel title" elevation="4">
  <div>No content expand or collapse button</div>
</etools-content-panel>

<etools-content-panel panel-title="Panel title" title-style="align-center" elevation="5">
  <div>Panel elevation increased to maximum value</div>
</etools-content-panel>
```

Attributes:
* elevation - Number Default: 1
* disabled - Boolean, Default: false
* noHeader - Boolean, Default: false
* open - Boolean, Default: true - notifies
* showExpandBtn - Boolean, Default: false
* panelTitle - String, Default: Panel title

## Styling

You can use defined variables and mixins to change panel style.

Custom property | Description | Default
----------------|-------------|----------
`--ecp-header-height` | Header height | `48px`
`--ecp-header-bg` | Header background color | `#0099ff`
`--epc-header-color` | Header color | `#ffffff`
`--epc-header` | Mixin applied to header | `{}`
`--ecp-toggle-btn` | Mixin applied to expand content button | `{}`
`--ecp-header-title` | Mixin applied to the header title | `{}`
`--ecp-header-btns-wrapper` | Mixin appplied to panel header right btns container | `{}`
`--ecp-content` | Mixin applied to content | `{}`
`--ecp-content-bg-color` | Content Header color | `#ffffff`
`--ecp-disabled` | Mixin applied in disabled state | `{}`


## Install
```bash
$ npm i --save @unicef-polymer/etools-content-panel
```

## Linting the code

Install local npm packages (run `npm install`)
Then just run the linting task

```bash
$ npm run lint
```

## Preview element locally
Install needed dependencies by running: `$ npm install`.
Make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `$ polymer serve` to serve your element application locally.

## Running Tests
TODO: improve and add more tests
```
$ polymer test
```
