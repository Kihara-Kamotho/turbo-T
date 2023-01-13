import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["clicked"] 

  greet(){
    console.log('hello world')

    const el = this.clickedTarget
    const btnn = el.value
    console.log(`${btnn}`)
  }
}
