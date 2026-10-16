import { useEffect } from 'react'
import { profile } from '../data/profile'

const pageTitle = 'Nemuel Lim (Nem) | Nemuel Sumagui Lim — Nem Profile'
const pageDescription =
  'Official Nem Profile of Nemuel Lim (Nemuel Sumagui Lim), also known as Nem. Senior frontend and full-stack software engineer from Bacoor, Cavite, Philippines. Angular, React, TypeScript.'

export default function Seo() {
  useEffect(() => {
    document.title = pageTitle

    const image = `${profile.siteUrl}${profile.avatar}`
    const thumbnail = `${profile.siteUrl}${profile.thumbnail}`
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfilePage',
          '@id': `${profile.siteUrl}/#profile`,
          url: profile.siteUrl,
          name: pageTitle,
          description: pageDescription,
          inLanguage: 'en',
          image: thumbnail,
          thumbnailUrl: thumbnail,
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: thumbnail,
            contentUrl: thumbnail,
            caption: 'Nemuel Lim — Nem Profile',
          },
          mainEntity: { '@id': `${profile.siteUrl}/#person` },
        },
        {
          '@type': 'Person',
          '@id': `${profile.siteUrl}/#person`,
          name: profile.name,
          givenName: 'Nemuel',
          familyName: 'Lim',
          additionalName: 'Sumagui',
          alternateName: profile.aliases,
          jobTitle: profile.title,
          description: pageDescription,
          url: profile.siteUrl,
          image: image,
          email: `mailto:${profile.email}`,
          telephone: profile.phoneHref.replace('tel:', ''),
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bacoor',
            addressRegion: 'Cavite',
            addressCountry: 'PH',
          },
          sameAs: [profile.social.github, profile.social.linkedin],
        },
        {
          '@type': 'WebSite',
          '@id': `${profile.siteUrl}/#website`,
          url: profile.siteUrl,
          name: 'Nem Profile',
          alternateName: ['Nemuel Lim', 'Nemuel Sumagui Lim', 'Nem'],
          description: pageDescription,
          inLanguage: 'en',
          publisher: { '@id': `${profile.siteUrl}/#person` },
        },
      ],
    }

    let script = document.getElementById('person-schema')
    if (!script) {
      script = document.createElement('script')
      script.id = 'person-schema'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(jsonLd)
  }, [])

  return null
}

export { pageTitle, pageDescription }
