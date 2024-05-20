import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import PricingSection from './PricingSection.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck)

describe('when component is mounted', () => {
  const topSection = {
    title: 'Top Section Title',
    subTitle: 'Top Section Subtitle',
    ctaButtons: [
      { name: 'Button1', label: 'Button1' },
      { name: 'Button2', label: 'Button2' }
    ],
    bgColor: '#FFFFFF',
    color: '#000000',
    themeColor: 'light'
  }

  const bottomSection = {
    bgColor: '#F0F0F0',
    themeColor: 'light',
    pricings: [
      {
        type: 'Basic',
        amount: 10,
        currency: '$',
        frequency: 'month',
        description: 'Basic Plan Description',
        ctaButtons: [{ name: 'Sign Up', label: 'Sign Up' }],
        features: ['Feature 1', 'Feature 2'],
        bgColor: '#FFFFFF',
        color: '#000000',
        themeColor: 'light'
      },
      {
        type: 'Pro',
        amount: 20,
        currency: '$',
        frequency: 'month',
        description: 'Pro Plan Description',
        ctaButtons: [{ name: 'Get Started', label: 'Get Started' }],
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        bgColor: '#FFFFFF',
        color: '#000000',
        themeColor: 'light'
      },
      {
        amount: 5,
        frequency: 'year',
        ctaButtons: [{ name: 'Subscribe', label: 'Subscribe' }],
        features: [],
        bgColor: '#FFFFFF',
        color: '#000000',
        themeColor: 'light'
      }
    ]
  }

  const props = {
    topSection: topSection,
    bottomSection: bottomSection
  }
  const wrapper = mount(PricingSection, {
    props: props
  })

  test('component should be mounted', () => {
    expect(PricingSection).toBeTruthy()
    expect(wrapper.find('[data-test="pricingSection"]').exists()).toBeTruthy()
  })

  test('emits clickTopSectionCtaButton event when CTA button is clicked', async () => {
    await wrapper
      .findComponent('[data-test="pricingSection-ctaSection"]')
      .vm.$emit('clickCtaButton', 'Button1')
    expect(wrapper.emitted().clickTopSectionCtaButton[0]).toEqual(['Button1'])
  })

  test('emits clickPricing event when pricing card is clicked', async () => {
    const pricingCards = wrapper.findAll('[data-test="pricingSection-pricing"]')
    await pricingCards[0].trigger('click')
    expect(wrapper.emitted().clickPricing[0]).toEqual([bottomSection.pricings[0]])
  })

  test('emits clickPricingCtaButton event when pricing CTA button is clicked', async () => {
    const ctaButton = wrapper.findComponent('[data-test="pricingSection-pricing-ctaButton"')
    await ctaButton.vm.$emit('click', 'Sign Up')
    expect(wrapper.emitted().clickPricingCtaButton[0]).toEqual([
      { pricing: bottomSection.pricings[0], buttonName: 'Sign Up' }
    ])
  })

  test('renders the correct pricing content', () => {
    bottomSection.pricings.forEach((pricing, idx) => {
      const card = wrapper.findAll('[data-test="pricingSection-pricing"]')[idx]

      // Check pricing type
      if (pricing.type) {
        expect(card.find('[data-test="pricingSection-pricing-type"]').text()).toBe(pricing.type)
      } else {
        expect(card.find('[data-test="pricingSection-pricing-type"]').exists()).toBe(false)
      }

      // Check pricing amount
      expect(card.find('[data-test="pricingSection-pricing-amount"]').text()).toBe(
        `${pricing.amount}${pricing.currency || '$'}/${pricing.frequency || 'year'}`
      )

      // Check pricing description
      if (pricing.description) {
        expect(card.find('[data-test="pricingSection-pricing-description"]').text()).toBe(
          pricing.description
        )
      } else {
        expect(card.find('[data-test="pricingSection-pricing-description"]').exists()).toBe(false)
      }

      pricing.features.forEach((feature, featureIdx) => {
        expect(
          card.findAll('[data-test="pricingSection-pricing-feature"]')[featureIdx].text()
        ).toBe(feature)
      })
    })
  })
})
