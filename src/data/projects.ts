

 const rawProjects = [
  { 
    title: 'Vi de la Terra', 
    video: '/videos/test1.mp4', 
    link: '/work/videlaterra', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cover: '/images/projects/videlaterra/videlaterra05.webp',
    gallery: [
      '/images/projects/videlaterra/videlaterra01.webp',
      '/images/projects/videlaterra/videlaterra02.webp',
      '/images/projects/videlaterra/videlaterra03.webp',
      '/images/projects/videlaterra/videlaterra04.webp',
      '/images/projects/videlaterra/videlaterra05.webp',
      '/images/projects/videlaterra/videlaterra01.webp',
      '/images/projects/videlaterra/videlaterra02.webp',
      '/images/projects/videlaterra/videlaterra03.webp',
      '/images/projects/videlaterra/videlaterra04.webp',
      '/images/projects/videlaterra/videlaterra05.webp',
      '/images/projects/videlaterra/videlaterra01.webp',
      '/images/projects/videlaterra/videlaterra02.webp',
      '/images/projects/videlaterra/videlaterra03.webp',
      '/images/projects/videlaterra/videlaterra04.webp',
      '/images/projects/videlaterra/videlaterra05.webp',
    ]
  },
  { 
    title: 'Zalando', 
    video: '/videos/test2.mp4', 
    link: '/work/zalando',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cover: '/images/projects/videlaterra/videlaterra01.webp',
  },
  { 
    title: 'Ahren', 
    video: '/videos/video-home.mp4', 
    link: '/work/ahren',
    cover: '/images/projects/videlaterra/videlaterra03.webp',
  },
  { 
    title: 'Zalando2', 
    video: '/videos/test1.mp4', 
    link: '/work/zalando2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cover: '/images/projects/videlaterra/videlaterra02.webp',
  },
  { 
    title: 'Vi de la Terra2', 
    video: '/videos/test2.mp4', 
    link: '/work/vi-de-la-terra2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cover: '/images/projects/videlaterra/videlaterra05.webp',

  },
  { 
    title: 'Ahren2', 
    video: '/videos/video-home.mp4', 
    link: '/work/ahren2',
    cover: '/images/projects/videlaterra/videlaterra04.webp',
  },
];

export const projects = rawProjects.map((project, index) => ({
  ...project,
  id: (index + 1).toString().padStart(2, '0')
}));