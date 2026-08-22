import bibleImg from '../assets/images/bible-study.jpg';
import eveningClassImg from '../assets/images/Ministry/evening-class/evening-class.jpg';
import saturdayServiceImg from '../assets/images/Ministry/saturday/saturday-service.jpg';

export const ministries = [
  {
    slug: 'adult-community',
    image: 'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/Adult%20Community/sunday/2-Sunday%20Service%2021-06-2026.jpg',
    badge: 'Adult Community',
    title: 'Adult Community',
    desc: "Men's Group Fellowship (Fridays, 2–4 pm), Women's Group (Saturdays, 2–4 pm), and Sunday Church Service (9:30–11:30 am).",
    programs: [
      { name: "Men's Group Fellowship", schedule: 'Every Friday afternoon, 2–4 pm' },
      { name: 'Women\'s Group', schedule: 'Every Saturday afternoon, 2–4 pm' },
      { name: 'Church Service', schedule: 'Every Sunday morning, 9:30–11:30 am' },
    ],
  },
  {
    slug: 'youth-outreach',
    image: 'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/creative-class/Creative%20class%20Party%20-16.jpg',
    badge: 'Youth Outreach',
    title: 'Youth Outreach',
    desc: 'Creative Class (Thursdays, 6–8 pm), Youth Soccer (Fridays, 6–8 pm), and Youth Service (Saturday nights, 6–8 pm).',
    programs: [
      { name: 'Creative Class', schedule: 'Every Thursday evening, 6–8 pm' },
      { name: 'Youth Soccer', schedule: 'Fridays, 6–8 pm' },
      { name: 'Youth Service', schedule: 'Every Saturday night, 6–8 pm' },
    ],
  },
  {
    slug: 'children-ministries',
    image: 'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/soccer/48FFCC%20Kid%20Soccer24,07,26.jpg',
    badge: 'Children',
    title: 'Children Ministries',
    desc: "Thursday Bible Class, Kid Soccer, Sunday School, and Special Love — discipleship and care for children throughout the week.",
    programs: [
      { name: 'Thursday Bible Class', schedule: 'Every Thursday evening, 5:30–6:30 pm' },
      { name: 'Kid Soccer', schedule: 'Fridays, 5:30–7:00 pm' },
      { name: 'Sunday School', schedule: 'Every Sunday morning, 8:00–9:30 am' },
      { name: 'Special Love', schedule: 'Monday–Friday, 5:30–6:30 pm' },
    ],
  },
  {
    slug: 'community-development-outreach',
    image: 'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/OutReach/56-Sunday%20Service%2008-03-2026.jpg',
    badge: 'Outreach',
    title: 'Community Development & Outreach',
    desc: 'Church partnerships and leader training, clean water and sanitation projects, and mercy outreaches to vulnerable communities.',
    programs: [
      { name: 'Church Partnerships & Training', schedule: 'Collaborating with local churches in Phnom Penh and the provinces to equip leaders and strengthen churches.' },
      { name: 'Water & Sanitation', schedule: 'Providing clean water wells and hygienic toilets to improve health in rural communities.' },
      { name: 'Mercy Outreaches', schedule: 'Bringing direct relief, food, and hope to highly vulnerable areas, including dump hill communities, refugees, and homeless people.' },
    ],
  },
  {
    slug: 'education-ministry',
    image: eveningClassImg,
    badge: 'Education',
    title: 'Education Ministry',
    desc: 'English classes and computer classes held Monday–Wednesday evenings, equipping students with practical skills.',
    programs: [
      { name: 'English Classes', schedule: 'Monday–Wednesday, 5:30–6:30 pm and 6:30–8:00 pm' },
      { name: 'Computer Classes', schedule: 'Monday–Wednesday, 5:30–6:30 pm, 6:30–8:00 pm, and 8:00–9:00 pm' },
    ],
  },
  {
    slug: 'business-for-mission',
    image: bibleImg,
    badge: 'Business',
    title: 'Business for Mission',
    desc: 'Miracle Café — a ministry-run business that funds and supports mission work.',
    programs: [
      { name: 'Miracle Café', schedule: 'A ministry-run business that supports and funds mission work.' },
    ],
  },
  {
    slug: 'next-gen-care',
    image: 'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Worship.jpg',
    badge: 'Next Gen Care',
    title: 'Next Gen Care & Sponsorship & Scholarship',
    desc: 'Student Dormitory, School Pack Project, Children Sponsorship Project, and University Scholarship Project.',
    programs: [
      { name: 'Student Dormitory', schedule: 'Safe housing and support for students away from home.' },
      { name: 'School Pack Project', schedule: 'Providing school supplies to students in need.' },
      { name: 'Children Sponsorship Project', schedule: 'Connecting sponsors with children to support their growth and education.' },
      { name: 'University Scholarship Project', schedule: 'Scholarship support for university students.' },
    ],
  },
  {
    slug: 'serving-team',
    image: saturdayServiceImg,
    badge: 'Serving Team',
    title: 'Serving Team',
    desc: 'Worship Team, Media & Tech Team, Usher & Hospitality Team, and YSPT.',
    programs: [
      { name: 'Worship Team', schedule: 'Leading the church in worship through music.' },
      { name: 'Media & Tech Team', schedule: 'Photography, videography, sound, and technical production.' },
      { name: 'Usher & Hospitality Team', schedule: 'Welcoming and caring for guests and members.' },
      { name: 'YSPT', schedule: 'Youth serving and partnership team.' },
    ],
  },
];

export const getMinistryBySlug = (slug) => ministries.find((m) => m.slug === slug);
