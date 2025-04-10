import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, BookOpenIcon, SparklesIcon, ChartBarIcon, FaceSmileIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Thought provoking journal prompts',
    description:
      'Guided questions designed to spark deep reflection, self-discovery, and emotional clarity — making it easier to express what truly matters.',
    icon: BookOpenIcon,
  },
  {
    name: 'Mood tracking',
    description:
      'Track how you feel daily with simple mood selections. Over time, patterns emerge that help you better understand your emotional landscape.',
    icon: FaceSmileIcon,
  },
  {
    name: 'Simple stats',
    description:
      'Gain quick insights into your journaling and emotional trends with easy-to-read stats on moods, entries, and activity.',
    icon: ChartBarIcon,
  },
  {
    name: 'AI powered insights',
    description:
      'Coming soon: personalized summaries and emotional patterns surfaced with the help of intelligent AI — turning your data into helpful stories.',
    icon: SparklesIcon,
  },
]

export default function Features() {
  return (
    <div id="features" className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
            What's in the app?
          </p>
          <p className="mt-6 text-lg/8 text-white">
            Research shows that regular journaling can help reduce stress and anxiety, improve emotional intelligence and self-awareness, strengthen mindfulness and cognitive processing, and enhance problem-solving and personal growth.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#2F52E0]">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
