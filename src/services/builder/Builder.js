export class Builder {
  constructor(h) {
    this.h = h
    this.fields = []
  }

  setFields(fields) {
    this.fields.push(
      fields.map(f => {
        return this.formInput(
          this.h('input', {
            class: {
              input: true
            },
            domProps: {
              type: f.type || 'text',
              placeholder: f.placeholder,
              name: f.name,
              id: f.id || f.name
            }
          }),
          f
        )
      })
    )
  }

  setSubmit(text) {
    this.fields.push(
      this.formButton(
        this.h('button', {
          class: 'btn',
          domProps: {
            type: 'submit',
            value: text
          }
        }),
        { value: text }
      )
    )
  }
}
