import adultCommunity from './adult-community';
import youthOutreach from './youth-outreach';
import childrenMinistries from './children-ministries';
import communityDevelopmentOutreach from './community-development-outreach';
import educationMinistry from './education-ministry';
import businessForMission from './business-for-mission';
import nextGenCare from './next-gen-care';
import servingTeam from './serving-team';

export const ministries = [
  adultCommunity,
  youthOutreach,
  childrenMinistries,
  communityDevelopmentOutreach,
  educationMinistry,
  businessForMission,
  nextGenCare,
  servingTeam,
];

export const getMinistryBySlug = (slug) => ministries.find((m) => m.slug === slug);
