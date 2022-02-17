import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log('debounce controller connected')
  }

  static targets = ['form']
  
  search() {
    console.log('searching')
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.formTarget.requestSubmit();
    }, 500);
  }
}
