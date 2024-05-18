class CustomCriteriaComponent extends HTMLElement {
    static get observedAttributes() {
        return ['prop']; // Add the prop attribute to the list of observed attributes
    }

    constructor () {
        super()
        this.attachShadow({ mode: 'open' })

        this._prop = this.getAttribute('prop') // Initialize the property from the attribute

        this.container = document.createElement('div')

        this.shadowRoot.appendChild(this.container)
        this.renderElements()
    }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'header') {
      this.render();
    }
  }
  
  connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('input').addEventListener('input', this.handleInputChange);
        this.shadowRoot.querySelector('select').addEventListener('change', this.handleDropdownChange);
      }

  disconnectedCallback() {
        this.shadowRoot.querySelector('input').removeEventListener('input', this.handleInputChange);
        this.shadowRoot.querySelector('select').removeEventListener('change', this.handleDropdownChange);
      }

  handleInputChange(event) {
        console.log('Input changed:', event.target.value);
      }

  handleDropdownChange(event) {
        console.log('Dropdown changed:', event.target.value);
      }

    renderElements() {
        this.container.innerHTML = `
          <style>
            .container {
              border: 1px solid #ccc;
              padding: 16px;
              max-width: 300px;
              margin: auto;
            }
            .header {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 16px;
            }
            .form-group {
              margin-bottom: 16px;
            }
            input, select {
              width: 100%;
              padding: 8px;
              margin-top: 4px;
              box-sizing: border-box;
            }
          </style>
          <div class="container">
            <div class="header">${this._props?.header || ''}</div>
            <div class="form-group">
              <label for="inputField">My custome critria input:</label>
              <input type="text" id="inputField" />
            </div>
            <div class="form-group">
              <label for="dropdown">My custome critria Dropdown:</label>
              <select id="dropdown">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        `;
    }

    set prop(value) { // Define a setter for the property
        console.log(value)
        this._prop = value
        this.renderElements()
    }

    get prop() { // Define a getter for the property
        return this._prop
    }
}

customElements.define('custom-criteria-component', CustomCriteriaComponent)
