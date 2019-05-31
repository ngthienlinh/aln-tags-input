import { Component, Prop, h, State, Method } from '@stencil/core';

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

  @Method()
  async clear() {
    // return Promise.resolve(42);
    this.tags = []
  }

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
                <a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="tag-btn-icon"><path d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"></path></svg>
                </a>
              </button>
            </form>
          <div class="tag-list">
            {
              this.tags.map(t => (
                <div class="tag-outer">
                  <div class="tag-inner">
                    {t}
                    <a class="tag-btn-remove" onClick={() => this.removeTag(t)}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="tag-btn-icon"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg>
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="tag-btn-icon"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
            <form onSubmit={(e) => this.handleSubmit(e)} class="tag-input">
              <input placeholder="tags" type="text" value={this.tag} onInput={(event) => this.handleChange(event)}  />
              <button type="submit" class="tag-btn-add">
                <a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="tag-btn-icon"><path d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"></path></svg>
                </a>
              </button>
            </form>
        </div>
      )
    }
  }
}
