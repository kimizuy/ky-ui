import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('ky-button')
export class KyButton extends LitElement {
  static override styles = css`
    button {
      color: blue;
    }
  `

  override render() {
    return html`<button>
      <slot>fallback text</slot>
    </button>`
  }
}
