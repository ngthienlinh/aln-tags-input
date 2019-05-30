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

  @Prop() tagsBelow: boolean = false;

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

  removeTag(t) {
    if (t && this.tags.indexOf(t) > -1) {
      this.tags = this.tags.filter((item) => {
        return item !== t
      })
    }
  }

  render() {
    if (this.tagsBelow) {
      return (
        <div>
            <form onSubmit={(e) => this.handleSubmit(e)} class="tag-input">
              <input placeholder="tags" type="text" value={this.tag} onInput={(event) => this.handleChange(event)}  />
              <button type="submit" class="tag-btn-add">
                <ion-icon name="add" ></ion-icon>
              </button>
            </form>
          <div class="tag-list">
            {
              this.tags.map(t => (
                <div class="tag-outer">
                  <div class="tag-inner">
                    {t}
                    <a class="tag-btn-remove" onClick={() => this.removeTag(t)}>
                      <ion-icon name="close" ></ion-icon>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div class="tag-list">
            {
              this.tags.map(t => (
                <div class="tag-outer">
                  <div class="tag-inner">
                    {t}
                    <a class="tag-btn-remove" onClick={() => this.removeTag(t)}>
                      <ion-icon name="close" ></ion-icon>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
            <form onSubmit={(e) => this.handleSubmit(e)} class="tag-input">
              <input placeholder="tags" type="text" value={this.tag} onInput={(event) => this.handleChange(event)}  />
              <button type="submit" class="tag-btn-add">
                <ion-icon name="add" ></ion-icon>
              </button>
            </form>
        </div>
      )
    }
  }
}
