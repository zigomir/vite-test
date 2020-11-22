import { shallowMount } from '../test/test.js'
import App from './App.vue'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

test('should render vue logo', () => {
  const wrapper = shallowMount(App)
  assert.ok(wrapper.html().includes('logo.png'))
})

test.run()
