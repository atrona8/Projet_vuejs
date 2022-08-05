import { mount } from '@vue/test-utils'
import AccountCreationComponent from "../../src/components/AccountCreationComponent.vue";

test('renders a todo', () => {
  const wrapper = mount(AccountCreationComponent)

  const todo = wrapper.get('[data-test="todo"]')

  expect(todo.text()).toBe('Account Creation')
})