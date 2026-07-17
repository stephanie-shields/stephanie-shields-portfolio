export interface Project {
  id: string
  title: string
  link: string
  badges: string[]
  text?: string
  image?: string
  imageAlt?: string
  cardBg: string
  badgeBorder: string
}

export const projects: Project[] = [
  {
    id: 'usaspending-gov',
    title: 'USAspending.gov',
    link: '/work/usaspending-gov-project',
    badges: ['Leadership', 'Design', 'Development'],
    text: 'The official open data source of federal spending information',
    cardBg: '#e3f5e1',
    badgeBorder: '#21c834',
  },
  {
    id: 'bgv',
    title: 'Black Girl Ventures',
    link: '/work/bgv-project',
    badges: ['Leadership', 'Design', 'Development'],
    text: 'A non-profit dedicated to creating access to capital for Black and Brown women entrepreneurs',
    cardBg: '#fbdcff',
    badgeBorder: '#be32d0',
  },
  {
    id: 'recreation-gov',
    title: 'Recreation.gov',
    link: '/work/recreation-gov-project',
    badges: ['Design', 'Development'],
    text: "The government's centralized travel planning and reservation system",
    cardBg: '#d4e5ff',
    badgeBorder: '#0050d8',
  },
  {
    id: 'regulations-gov',
    title: 'Regulations.gov',
    link: '/work/regulations-gov-project',
    badges: ['Design', 'Development'],
    cardBg: '#e3f5e1',
    badgeBorder: '#21c834',
  },
  {
    id: 'myeverify-gov',
    title: 'myEverify.gov',
    link: '/work/myeverify-gov-project',
    badges: ['Design', 'Development'],
    cardBg: '#fbdcff',
    badgeBorder: '#be32d0',
  },
]
