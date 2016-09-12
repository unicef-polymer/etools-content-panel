# \<etools-content-panel\>

A simple panel with heading to display content in an organized manner. 
You can chose to display or to not display the header and align the title: left, center and right, make it uppercase.
It also has a disabled state.

## Usage
```html
<etools-content-panel title="Panel title" title-style="align-center uppercase" no-header="false" is-disabled="false">
  Your content goes here...
</etools-content-panel>
```

Attributes:
* title: String, panel title text
* titleStyle: String, a combination between alignment classes: align-center and align-right and the uppercase class
* noHeader: Boolean, if true the panel header is not displayed
* isDisabled: Boolean, disabled state active/inactive

All attributes of the element are not required.


### Styling

You can use defined variables and mixins to change panel style.

Custom property | Description | Default
----------------|-------------|----------
`--panel-border-color` | Panel border color | `#dedede`
`--etools-content-panel-shadow-color` | CSS box-shadow color | `#333333`
`--etools-content-panel-title-color` | Title color | `#687254`
`--etools-panel-header-background` | Mixin applied to the header | `{}`
`--etools-content-panel-content-bg-color` | Content background color | `#ffffff`
`--etools-content-panel-disabled-color` | Content disabled text color | `#9b9b9b`


## Install
```bash
$ bower install --save etools-content-panel
```

## Preview element locally

Install needed dependencies by running: `$ bower install`.
Make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `$ polymer serve` to serve your element application locally.

## 

## Running Tests

```
$ polymer test
```
