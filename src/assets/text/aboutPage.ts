import type { TimelineProps } from '../../components';

export const headingText = 'About';
export const personalInfos = [
  { label: 'Name:', content: 'Jędrzej Ratajczak' },
  { label: 'Location:', content: 'Wroclaw, Poland' },
  { label: 'Languages:', content: 'Polish, English' },
  { label: 'Email:', content: 'jedrzej.ratajczak1@gmail.com' }
];
export const description = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde odit quia labore voluptas. Dolorum, aut autem! Quaerat, odit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum velit illo magnam molestias pariatur corrupti facere dolorem quibusdam ea explicabo aperiam ipsam odit, nesciunt maxime earum expedita corporis.',
  'Sint illum velit illo magnam molestias pariatur corrupti facere dolorem quibusdam ea explicabo aperiam ipsam odit, nesciunt maxime earum expedita corporis.'
];
export const featuredSkills = [
  {
    title: 'BSc in IT',
    subtitle: 'at WUST',
    date: '2018-2022',
    description:
      'I am a graduate of WUST, one of the best technical universities in Poland. My field of study was Computer Science at the Faculty of Information and Communication Technology.'
  },
  {
    title: 'Web dev mentor',
    subtitle: 'at CodersCamp',
    date: '2021-2022',
    description:
      'I was taking part in mentoring program by CodersCrew, where I was assigned to a group of 6 people to teach them basics of programming, popular web technologies and working in Scrum.'
  }
];
export const timeline: TimelineProps['timeline'] = [
  {
    title: 'MSc at WUST',
    time: '2022 - Present',
    type: 'education',
    description:
      'Currently, I study at WUST to obtain MSc degree in Applied Computer Science.'
  },
  {
    title: 'Web dev mentor',
    time: '2021 - 2022',
    type: 'job',
    description:
      'I was taking part in mentoring program by CodersCrew, where I was assigned to a group of 6 people to teach them basics of programming, popular web technologies (like Typescript, React, Node.js, Express), working with Git version system control along with GitHub and teamwork, using Scrum framework.'
  },
  {
    title: 'Mentee at WUST',
    time: '2020 - 2021',
    type: 'course',
    description:
      'I was a mentee at WUST mentoring program where I was working with experienced mentor to expand my knowlegde about React with Redux while building a cryptocurreny exchange website.'
  },
  {
    title: 'CodersCamp Bootcamp',
    time: '2020 - 2021',
    type: 'course',
    description:
      'I was taking part in a mentoring program by CodersCrew, where in a group of 6 people and a mentor we had to complete a few web projects working together as a team, using popular web technologies. After completition I was asked by organizers if I would like to become mentor myself.'
  },
  {
    title: 'Atos course',
    time: '2020',
    type: 'course',
    description:
      'Atos Poland Global Services organized 2 months of clean code course where I was working in .NET Core with Git version control system. I was assigned a task to add new features to already existing project, making sure to keep up with SOLID principles.'
  },
  {
    title: 'BSc at WUST',
    time: '2018 - 2022',
    type: 'education',
    description:
      'I am a graduate of WUST, one of the best technical universities in Poland. My field of study was Computer Science at the Faculty of Information and Communication Technology.'
  }
];
