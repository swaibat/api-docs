import Image from 'next/image'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoSocketIo from '@/images/logos/socket-io.svg'
import logoStripe from '@/images/logos/stripe.png'
import logoNodemailer from '@/images/logos/nodemailer.webp'
import logoFlutterwave from '@/images/logos/flutterwave.svg'
import cloudinary from '@/images/logos/cloudinary.webp'
import logoGoogleMaps from '@/images/logos/maps.png'
import logoGmail from '@/images/logos/gmail.png'

const libraries = [
  {
    href: '#',
    name: 'Socket.IO',
    description:
      'A library that enables real-time, bidirectional and event-based communication.',
    logo: logoSocketIo,
    styles: { width: 70, height: 70 },
  },
  {
    href: '#',
    name: 'Stripe',
    description:
      'A suite of APIs powering online payment processing and commerce solutions.',
    logo: logoStripe,
    styles: { width: 90, height: 70 },
  },
  {
    href: '#',
    name: 'Nodemailer',
    description: 'A module for Node.js applications to send emails easily.',
    logo: logoNodemailer,
    styles: { width: 70, height: 70 },
  },
  {
    href: '#',
    name: 'MongoDB',
    description:
      'A document-based database program that uses JSON-like documents.',
    logo: cloudinary,
    styles: { width: 90, height: 90 },
  },
  {
    href: '#',
    name: 'Flutterwave',
    description:
      'A payment technology company providing seamless and secure transactions.',
    logo: logoFlutterwave,
    styles: { width: 90, height: 80 },
  },
  {
    href: '#',
    name: 'Cloudinary',
    description:
      'A media management platform providing image and video optimization and transformation.',
    logo: cloudinary,
    styles: { width: 90, height: 90 },
  },
  {
    href: '#',
    name: 'Google Maps',
    description:
      'A mapping service that provides directions, location tracking, and geospatial data.',
    logo: logoGoogleMaps,
    styles: { width: 70, height: 90 },
  },
  {
    href: '#',
    name: 'Gmail',
    description:
      'A secure, smart, and easy-to-use email service developed by Google.',
    logo: logoGmail,
    styles: { width: 90, height: 90 },
  }
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
        Libraries Used
      </Heading>
      <div className="not-prose mt-4 space-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5">
        {libraries.map((library) => (
          <div
            key={library.name}
            className="flex items-center gap-6 p-4 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-sm w-full hover:shadow-md transition-shadow duration-300"
          >
            <Image
              src={library.logo}
              alt={library.name}
              width={library.styles.width}
              height={library.styles.height}
              unoptimized
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
