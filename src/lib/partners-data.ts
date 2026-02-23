export interface Partner {
  id: string
  name: string
  description: string
  specializations: string[]
  internshipTracks?: string[]
  location?: string
  logo: string
  website?: string
  season: string
  active: boolean
}

/**
 * Dynamic partner list — partners change by season.
 * Add new partners here as partnerships are formed.
 */
export const partners: Partner[] = [
  {
    id: 'electronic-1-ltd',
    name: 'Electronic 1 LTD',
    description:
      'A leading company in computer electronics, hardware engineering, and networking. Electronic 1 LTD provides internship placements for participants in electronics, embedded systems, hardware, and infrastructure tracks.',
    specializations: [
      'Computer Electronics',
      'Hardware Engineering',
      'Networking & Network Security',
      'Embedded Systems',
      'IT Infrastructure',
    ],
    internshipTracks: [
      'Circuit Design & PCB Engineering',
      'Embedded Systems & IoT',
      'Computer Hardware & Troubleshooting',
      'Network Engineering & Administration',
      'IT Systems & Infrastructure',
    ],
    location: 'Kigali, Rwanda',
    logo: '/images/partners/electronic-1.png',
    website: '#',
    season: '2025–2026',
    active: true,
  },
]

/** Returns only active partners */
export function getActivePartners(): Partner[] {
  return partners.filter((p) => p.active)
}

/** Returns the current season label */
export function getCurrentSeason(): string {
  const active = getActivePartners()
  return active.length > 0 ? active[0].season : 'Current Season'
}
