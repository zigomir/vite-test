 // this is now only available on
import { mount } from '@vue/test-utils/dist/vue-test-utils.esm-browser'
// import { mount } from '@vue/test-utils'
import { assert } from '@esm-bundle/chai'
import HelloWorld from '../src/components/HelloWorld.vue'

mocha.setup('bdd')

describe('HelloWorld', () => {
  it('should render msg prop 1', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Sleuth' } })
    assert(wrapper.html().includes('Sleuth'))
  })

  it('should increment count', async () => {
    const wrapper = mount(HelloWorld)
    assert(wrapper.html().includes('count is: 0'))
    await wrapper.find('button').trigger('click')
    assert(wrapper.html().includes('count is: 1'))
  })
})

const runner = mocha.run()
// check https://mochajs.org/api/runner for more events
runner.on('fail', () => console.log('fail'))
runner.on('pass', () => console.log('pass'))
runner.on('end', () => console.log('end'))
