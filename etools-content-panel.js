import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/paper-styles/element-styles/paper-material-styles.js';
import '@polymer/paper-icon-button/paper-icon-button.js';

/**
 * `etools-content-panel`
 * A simple panel with header to display a collapsible content.
 *
 * ### Styling
 *
 * You can use defined variables and mixins to change panel style.
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--ecp-header-height` | Header height | `48px`
 * `--ecp-header-bg` | Header background color | `#0099ff`
 * `--epc-header-color` | Header color | `#ffffff`
 * `--epc-header` | Mixin applied to header | `{}`
 * `--ecp-toggle-btn` | Mixin applied to expand content button | `{}`
 * `--ecp-header-title` | Mixin applied to the header title | `{}`
 * `--ecp-header-btns-wrapper` | Mixin appplied to panel header right btns container | `{}`
 * `--ecp-content` | Mixin applied to content | `{}`
 * `--ecp-content-bg-color` | Content Header color | `#ffffff`
 * `--ecp-disabled` | Mixin applied in disabled state | `{}`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class EtoolsContentPanel extends PolymerElement {
  static get template() {
    // language=HTML
    return html`
      <style include="paper-material-styles">
        :host {
          display: block;
        }

        *[hidden] {
          display: none !important;
        }

        .panel-header {
          @apply --layout-horizontal;
          @apply --layout-center;
          @apply --layout-justified;
          @apply --layout-wrap;
          box-sizing: border-box;
          background-color: var(--ecp-header-bg, #0099ff);
          height: var(--ecp-header-height, 48px);
          padding: 4px 16px;
          @apply --epc-header;
        }

        :host(:not([show-expand-btn])) .panel-header {
          padding: 4px 16px 4px 24px;
        }

        h2.title,
        .toggle-btn,
        .panel-btns-wrapper ::slotted(*) {
          color: var(--epc-header-color, #ffffff);
        }

        .toggle-btn,
        .panel-btns-wrapper ::slotted(*) {
          opacity: 0.8;
        }

        .toggle-btn {
          @apply --ecp-toggle-btn;
        }

        h2.title {
          @apply --layout;
          @apply --layout-flex;
          text-align: center;
          margin: 0;
          padding: 8px 0;
          font-size: 21px;
          font-weight: bold;
          min-width: 0;
          @apply --ecp-header-title;
        }

        h2.title span {
          display: inline-block;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .panel-btns-wrapper ::slotted(*) {
          @apply --ecp-header-btns-wrapper;
        }

        .content-wrapper {
          background-color: var(--ecp-content-bg-color, #ffffff);
          box-sizing: border-box;
          padding: 8px 24px 16px 24px;
          @apply --ecp-content;
        }

        :host([disabled]) .panel-header,
        :host([disabled]) ::slotted(*) {
          opacity: 0.5;
          @apply --ecp-disabled;
        }

      </style>

      <div class="paper-material" elevation\$="[[elevation]]">
        <div class="panel-header" hidden\$="[[noHeader]]">

          <paper-icon-button class="toggle-btn" on-click="_toggle" icon="[[_getExpandBtnIcon(open)]]"
                             hidden\$="[[!showExpandBtn]]" disabled\$="[[disabled]]"></paper-icon-button>

          <h2 class="title"><span>[[panelTitle]]</span></h2>

          <div class="panel-btns-wrapper">
            <slot name="panel-btns"></slot>
          </div>

        </div>
        <iron-collapse opened="{{open}}">
          <div class="content-wrapper">
            <slot></slot>
          </div>
        </iron-collapse>
      </div>
    `;
  }

  static get is() {
    return 'etools-content-panel';
  }

  static get properties() {
    return {
      panelTitle: {
        type: String,
        value: 'Panel title'
      },
      elevation: {
        type: Number,
        value: 1
      },
      open: {
        type: Boolean,
        value: true,
        notify: true
      },
      noHeader: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      showExpandBtn: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }

  _toggle() {
    this.set('open', !this.open);
  }

  _getExpandBtnIcon(open) {
    return open ? 'icons:expand-less' : 'icons:expand-more';
  }
}

window.customElements.define(EtoolsContentPanel.is, EtoolsContentPanel);
