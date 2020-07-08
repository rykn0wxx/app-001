export class Director {
  makeSignInForm(builder) {
    builder.setFields([
      {
        name: 'Email',
        id: 'email',
        type: 'email'
      },
      {
        name: 'Password',
        id: 'password',
        type: 'password'
      }
    ])
    builder.setSubmit('Sign In')
  }
}
