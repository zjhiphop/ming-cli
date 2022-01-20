import { expect, test } from '@oclif/test'

describe('vue', () => {
  test
    .stdout()
    .command(['vue'])
    .it('runs vue cmd', (ctx) => {
      expect(ctx.stdout).to.contain('Vue project Manager')
    })
})
