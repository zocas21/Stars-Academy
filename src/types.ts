export interface NavItem {
  label: string;
  href: string;
}

export interface SoftwareTool {
  id: string;
  name: string;
  category: string;
  iconBg: string;
  description: string;
  color: string;
  accentHex: string;
  keySkills: string[];
  shortcut: string;
}

export interface CourseTrack {
  id: string;
  title: string;
  software: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels' | 'Beginner to Pro';
  duration: string;
  tagline: string;
  description: string;
  color: string;
  accentHex: string;
  highlights: string[];
  weeklyBreakdown: {
    week: string;
    title: string;
    description: string;
  }[];
  projectDeliverable: string;
  rawAssetsIncluded: string;
}

export interface ShowcaseVideo {
  id: string;
  title: string;
  creator: string;
  role: string;
  thumbnail: string;
  youtubeId?: string;
  category: 'Commercial' | 'Motion Design' | 'Music Video' | 'Short-Form Viral' | 'Color Grade';
  duration: string;
  views?: string;
  description: string;
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  image: string;
  credits: string[];
  bio: string;
  socials: {
    instagram?: string;
    youtube?: string;
    telegram?: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  course: string;
  rating: number;
  quote: string;
  outcome: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  subtext: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  isHumanHandoff?: boolean;
}
