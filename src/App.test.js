import { shallowMount } from '@vue/test-utils/dist/vue-test-utils.esm-browser' // available since 2.0.0-beta.9 (https://github.com/vuejs/vue-test-utils-next/pull/235)
import App from './App.vue'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

test('should render vue logo', () => {
  const wrapper = shallowMount(App)
  assert.ok(wrapper.html().includes('logo.png'))
})

test.run()
