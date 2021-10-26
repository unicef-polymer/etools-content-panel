import {LitElement, html} from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import {elevationStyles} from './styles/elevation-styles';

/**
 * `etools-content-panel`
 * A simple panel with header to display a collapsible content.
 *
 * ### Styling
 *
 * You can use defined variables and css shadow parts to change panel style.
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--ecp-header-height` | Header height | `48px`
 * `--ecp-header-bg` | Header background color | `#0099ff`
 * `--ecp-header-color` | Header color | `#ffffff`
 * `etools-content-panel::part(ecp-header)` | CSS Shadow Part applied to header | `{}`
 * `etools-content-panel::part(ecp-toggle-btn)` | CSS Shadow Part applied to expand content button | `{}`
 * `etools-content-panel::part(ecp-header-title)` | CSS Shadow Part applied to the header title | `{}`
 * `etools-content-panel::part(ecp-header-btns-wrapper)`
 *        | CSS Shadow Part appplied to panel header right btns container
 *        | `{}`
 * `etools-content-panel::part(ecp-content)` | CSS Shadow Part applied to content | `{}`
 * `--ecp-content-bg-color` | Content Header color | `#ffffff`
 * `etools-content-panel::part(ecp-header):disabled` | CSS Shadow Part applied in disabled state | `{}`
 * `--ecp-content-padding` | CSS Shadow Part applied to content |  `8px 24px 16px 24px`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class EtoolsContentPanel extends LitElement {
  static get styles() {
    return [elevationStyles];
  }
  render() {
    // language=HTML
    return html`
      <style>
        :host {
          display: block;
        }

        *[hidden] {
          display: none !important;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          box-sizing: border-box;
          background-color: var(--ecp-header-bg, #0099ff);
          height: var(--ecp-header-height, 48px);
          padding: 4px 16px;
        }

        :host(:not([show-expand-btn])) .panel-header {
          padding: 4px 16px 4px 24px;
        }

        h2.title,
        .toggle-btn,
        .panel-btns-wrapper ::slotted(*) {
          color: var(--ecp-header-color, #ffffff);
        }

        .toggle-btn,
        .panel-btns-wrapper ::slotted(*) {
          opacity: 0.8;
        }

        h2.title {
          margin: auto;
          font-size: 21px;
          font-weight: bold;
          min-width: 0;
        }

        h2.title span {
          white-space: var(--ecp-title-white-space, nowrap);
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .content-wrapper {
          background-color: var(--ecp-content-bg-color, #ffffff);
          box-sizing: border-box;
          padding: var(--ecp-content-padding, 8px 24px 16px 24px);
        }

        :host([disabled]) .panel-header,
        :host([disabled]) ::slotted(*) {
          opacity: 0.5;
          @apply --ecp-disabled;
        }

        .flex-h {
          display: flex;
        }
      </style>

      <div class="elevation" elevation="${this.elevation}">
        <div class="panel-header" part="ecp-header" ?hidden="${this.noHeader}">
          <div class="flex-h">
            <paper-icon-button
              class="toggle-btn"
              part="ecp-toggle-btn"
              @click="${this._toggle}"
              .icon="${this._getExpandBtnIcon(this.open)}"
              ?hidden="${!this.showExpandBtn}"
              ?disabled="${this.disabled}"
            ></paper-icon-button>
            <h2 class="title" part="ecp-header-title">
              <span>${this.panelTitle}</span>
            </h2>
            <slot name="after-title"></slot>
          </div>

          <div class="panel-btns-wrapper" part="ecp-header-btns-wrapper">
            <slot name="panel-btns"></slot>
          </div>
        </div>
        <iron-collapse ?opened="${this.open}">
          <div class="content-wrapper" part="ecp-content">
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
        type: String
      },
      elevation: {
        type: Number
      },
      open: {
        type: Boolean
      },
      noHeader: {
        type: Boolean,
        reflect: true,
        attribute: 'no-header'
      },
      disabled: {
        type: Boolean
      },
      showExpandBtn: {
        type: Boolean,
        reflect: true,
        attribute: 'show-expand-btn'
      }
    };
  }
  constructor() {
    super();
    this.panelTitle = 'Panel Title';
    this.elevation = 1;
    this.open = true;
    this.noHeader = false;
    this.disabled = false;
    this.showExpandBtn = false;
  }

  _toggle() {
    this.open = !this.open;
  }

  _getExpandBtnIcon(open) {
    return open ? 'icons:expand-less' : 'icons:expand-more';
  }
}

window.customElements.define(EtoolsContentPanel.is, EtoolsContentPanel);
