import { mjml2html } from './src/index'


console.log(mjml2html(`
  <mj-text>
    Hello World
  </mj-text>
`, { raw: true }))
