import { mount } from '../../../test.js'
import HelloWorld from './HelloWorld.vue'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

test('should render msg prop', () => {
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
