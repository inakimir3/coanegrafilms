export interface Project {
  id: string;
  title: string;
  video: string;
  link: string;
}

export const projects: Project[] = [
  { 
    id: '01', 
    title: 'Zalando', 
    video: '/videos/test1.mp4', 
    link: '/work/zalando' 
  },
  { 
    id: '02', 
    title: 'Vi de la Terra', 
    video: '/videos/test2.mp4', 
    link: '/work/vi-de-la-terra' 
  },
  { 
    id: '03', 
    title: 'Ahren', 
    video: '/videos/video-home.mp4', 
    link: '/work/ahren' 
  },
];