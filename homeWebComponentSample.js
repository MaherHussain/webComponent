class CustomCriteriaComponent extends HTMLElement {
    static get observedAttributes() {
        return ['prop']; // Add the prop attribute to the list of observed attributes
    }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this._props = this.getAttribute('props') // Initialize the property from the attribute

    this.container = document.createElement('div')
    this.container.classList.add('ucommerce-data-requested__container') // Adding a class for styling

    this.shadowRoot.appendChild(this.container)

    this.renderElements()
  }

  renderElements() {
    this.container.innerHTML = `
      <style>
        .ucommerce-data-requested__container {
            display: block;
            padding: 24px;
            margin-bottom: 24px;
            margin-top: 24px;
            border: 2px solid #e8e8ed;
            border-radius: 10px;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
        }
  
        .ucommerce-data-requested__container:hover {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
  
        h2 {
            color: #b4b4c6;
            text-align: center;
        }
  
        h5 {
            margin: 0;
            color: #5a7179
        }
  
        button {
              padding: 20px;
              font-size: 16px;
              font-weight: bold;
              border-radius: 10px;
              border: solid 1px #e8e8ed;
              color: #5a7179;
              cursor: pointer;
        }
  
        button:hover {
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        }
      </style>
      <div>
      <h5>Sample of custom web component from Ucommerce</h5>
          <h2>${this._props?.header || ''}</h2>
          
      </div>
  `
  }

  set props(value) {
    // Define a setter for the property
      console.log(value)
    this._props = value
    this.renderElements()
  }

  get props() {
    // Define a getter for the property
    return this._props
  }
}

customElements.define('custom-criteria-component', CustomCriteriaComponent)
