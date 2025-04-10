import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

type FrequencyOption = {
  value: 'monthly' | 'annually';
  label: string;
  priceSuffix: string;
};

const frequencies: FrequencyOption[] = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]

const tiers = [
  {
    name: 'Free',
    id: 'tier-hobby',
    href: '#',
    price: { monthly: '$0', annually: '$0' },
    description: 'A minimalist journaling experience.',
    features: ['No account required', ' * Earn reward points and achievements', '* Localized journaling experience'],
    mostPopular: false,
  },
  {
    name: 'Registered',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$0', annually: '$0' },
    description: 'A limited journaling experience.',
    features: ['Account required', 'Earn reward points and achievements', '* Limited cloud backup'],
    mostPopular: false,
  },
  {
    name: 'Cloud',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$4.99', annually: '$49' },
    description: 'A cloud based journaling experience.',
    features: [
      'Daily entries are backed up to the cloud',
      'Access to all journal ideas and prompts',
      'Access to future color modes',
      'Earn reward points and achievements',
    ],
    mostPopular: true,
  },
  {
    name: 'AI',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '$TBD', annually: '$TBD' },
    description: 'An AI assisted journaling experience.',
    features: [
      'All features included in the Cloud experience',
      'Access to companion chatbot with token limit',
      'AI powered insights',
    ],
    mostPopular: false,
  },
  {
    name: 'AI+',
    id: 'tier-ultimate',
    href: '#',
    price: { monthly: '$TBD', annually: '$TBD' },
    description: 'The full Mindwell World journaling experience.',
    features: [
      'All features included in the AI experience',
      'Unlimited access to companion chatbot',
    ],
    mostPopular: false,
  },
]

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div id="subscriptions" className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
            Curate Your Experience
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-white sm:text-xl/8">
          Choose one that fits you the best.
        </p>

        <div className="mt-16 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-gray-200 ring-inset"
            >
              {frequencies.map((option) => (
                <Radio
                  key={option.value}
                  value={option}
                  className="cursor-pointer rounded-full px-2.5 py-1 text-white data-checked:bg-[#2F52E0] data-checked:text-white"
                >
                  {option.label}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:mx-0 xl:max-w-none">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-[#2F52E0]' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8',
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.mostPopular ? 'text-white' : 'text-white',
                  'text-lg/8 font-semibold',
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-sm/6 text-white">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-white">
                  {tier.price[frequency.value]}
                </span>
                <span className="text-sm/6 font-semibold text-white">{frequency.priceSuffix}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-[#2F52E0] text-white shadow-xs hover:bg-indigo-500'
                    : 'text-[#2F52E0] ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                )}
              >
                Buy plan
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-white">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#2F52E0]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
