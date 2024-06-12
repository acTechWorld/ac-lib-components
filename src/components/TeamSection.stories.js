import TeamSection from './TeamSection.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/Team Section',
  component: TeamSection,
  args: { onClickMember: fn() }
}

const Template = (args) => ({
  components: { TeamSection },
  setup: () => ({ args }),
  template: '<TeamSection v-bind="args"/>'
})

export const Default = Template.bind({})
Default.args = {
  title: 'Meet our team',
  subtitle:
    'Our philosophy --- hire a team of diverse, passionate people and foster a culture that empowers you to do your best work',
  teamMembers: [
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859440.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Amélie Laurent',
      description: 'Founder & CEO'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Marco Kelly',
      description: 'Developper'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859440.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Amélie Laurent',
      description: 'Founder & CEO'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Marco Kelly',
      description: 'Developper'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859440.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Amélie Laurent',
      description: 'Founder & CEO'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Marco Kelly',
      description: 'Developper'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859440.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Amélie Laurent',
      description: 'Founder & CEO'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Marco Kelly',
      description: 'Developper'
    }
  ]
}
