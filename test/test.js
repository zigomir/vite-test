// this is now only available on: https://github.com/vuejs/vue-test-utils-next/pull/235
import { mount } from '@vue/test-utils/dist/vue-test-utils.esm-browser'
import HelloWorld from '../src/components/HelloWorld.vue'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

test('should render msg prop 1', () => {
  const wrapper = mount(HelloWorld, { props: { msg: 'Sleuth' } })
  assert.ok(wrapper.html().includes('Sleuth'))
})

test('should increment count', async () => {
  const wrapper = mount(HelloWorld)
  assert.ok(wrapper.html().includes('count is: 0'))
  await wrapper.find('button').trigger('click')
  assert.ok(wrapper.html().includes('count is: 1'))
})

test.run()
