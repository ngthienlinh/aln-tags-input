import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'aln-tags-input',
  styleUrl: 'aln-tags-input.css',
  shadow: true
})
export class AlnTagsInputComponent {
  
  /**
   * Internal prop. Render will be called whenever this state changed
   */
  @State() tag: string;
  
  @Prop() tags: string[] = [];

  handleChange(event) {
    this.tag = event.target.value;
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.tag && this.tags.indexOf(this.tag) == -1) {
      this.tags = [...this.tags, this.tag ]
      this.tag = ''
    }
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.tags.map(t => (
              <li>{t}</li>
            ))
          }
          <li></li>
        </ul>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" value={this.tag} onInput={(event) => this.handleChange(event)}  />
        </form>
      </div>
    )
  }
}
