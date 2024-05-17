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

    renderElements() {
        this.container.innerHTML = `<div style="padding: 24px; border: 9px solid blue;">
                                        <h2>${this._props?.header || ''}</h2>
                                        <input type="text" />
                                        <p>page is: ${this._props?.entityGuid ? this._props.entityGuid : 'Not Available'}</p>
                                    </div>`
    }

    set prop(value) { // Define a setter for the property
        this._prop = value
        this.renderElements()
    }

    get prop() { // Define a getter for the property
        return this._prop
    }
}

customElements.define('custom-criteria-component', CustomCriteriaComponent)
