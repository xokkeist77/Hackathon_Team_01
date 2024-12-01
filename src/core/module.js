export class Module {
  constructor(type, text, emoji) {
    if (!type) {
      throw new Error('Please specify "type" param')
    }
    if (!text) {
      throw new Error('Please specify "text" param')
    }
    this.type = type
    this.text = text
    this.emoji = emoji
  }

  trigger() {
    throw new Error(`Trigger method should be implemented in module "${this.type}"`)
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}${this.emoji}</li>`
  }
}