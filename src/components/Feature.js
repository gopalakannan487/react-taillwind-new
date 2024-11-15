import { Carousel } from "@material-tailwind/react";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import res from '../files/resume.pdf';
 

const features = [
  {
    name: 'Resume',
    description:
      '',
     
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Frameworks',
    description:
      'Utilizing modern frameworks like React, Codeigniter 3  to build dynamic applications.',
    icon: LockClosedIcon,
  },
  {
    name: 'Performance Optimization',
    description:
      'Ensuring fast load times and smooth interactions for an optimal user experience.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Accessibility',
    description:
      'Committing to inclusive design practices that make our websites usable for everyone.',
    icon: FingerPrintIcon,
  },
]

function Feature() {
  return (
    <section id="about">
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frontend Development Manager
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          At eNova Software and Hardware Solutions, we are passionate about crafting exceptional digital experiences. As a dedicated front-end development team, we specialize in transforming ideas into intuitive and visually stunning web applications.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
            {feature.name === 'Resume' ? (
              <a href={res} download className="text-indigo-600 hover:underline">
                Download Resume
              </a>
            ) : (
              feature.description
            )}
          </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>


 

    </section>
  )
}
export default Feature;