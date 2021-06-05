import { shallowMount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'
import { test } from 'zora'

test('should render msg prop', ({ok}) => {
  const wrapper = shallowMount(HelloWorld, { props: { msg: 'test' } })
  ok(wrapper.html().includes('test'))
})

test('should increment count', async ({ok}) => {
  const wrapper = shallowMount(HelloWorld)
  ok(wrapper.html().includes('count is: 0'))
  await wrapper.find('button').trigger('click')
  ok(wrapper.html().includes('count is: 1'))
})
