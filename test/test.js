import { mount } from '@vue/test-utils/dist/vue-test-utils.esm-browser' // available since 2.0.0-beta.9 (https://github.com/vuejs/vue-test-utils-next/pull/235)
import HelloWorld from '../src/components/HelloWorld.vue'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

test('should render msg prop 1', () => {
  const wrapper = mount(HelloWorld, { props: { msg: 'test' } })
  assert.ok(wrapper.html().includes('test'))
})

test('should increment count', async () => {
  const wrapper = mount(HelloWorld)
  assert.ok(wrapper.html().includes('count is: 0'))
  await wrapper.find('button').trigger('click')
  assert.ok(wrapper.html().includes('count is: 1'))
})

test.run()
