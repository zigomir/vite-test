import { shallowMount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'
import { test, ok } from 'zora'

test('should render msg prop', () => {
  const wrapper = shallowMount(HelloWorld, { props: { msg: 'test' } })
  ok(wrapper.html().includes('test'))
})

test('should increment count', async () => {
  const wrapper = shallowMount(HelloWorld)
  ok(wrapper.html().includes('count is: 0'))
  await wrapper.find('button').trigger('click')
  ok(wrapper.html().includes('count is: 1'))
})
