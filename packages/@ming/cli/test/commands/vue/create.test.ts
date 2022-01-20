import { expect, test } from '@oclif/test'

describe('vue', () => {
  test
    // .nock('https://github.com', (api) =>
    //   api
    //     .get('/@ming/template-vue3')
    //     // user is logged in, return their name
    //     .reply(200, { email: 'jade@example.com' })
    // )
    .stdout()
    .command(['vue:create', 'mini site', '--useTs'])
    .it('runs vue create cmd', (ctx) => {
      expect(ctx.stdout).to.contain(
        'mini site with Vue vue3 and use typescript'
      )
    })
})
