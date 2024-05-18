import ChatBoxInput from './ChatBoxInput.vue'

export default {
  title: 'Components/Chat/Input',
  component: ChatBoxInput,
  argTypes: {
    color: { control: 'color' },
    bgColor: { control: 'color' }
  }
}

const Template = (args) => ({
  components: { ChatBoxInput },
  setup: () => ({ args }),
  template: '<ChatBoxInput v-bind="args"/>'
})

export const Example = Template.bind({})
Example.args = {
  placeholder: 'Write here'
}