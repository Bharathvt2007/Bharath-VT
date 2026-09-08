export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  image?: string;
  tags: string[];
  isFeatured?: boolean;
  fullDetails?: {
    overview: string;
    keyComponents: string[];
    technicalHighlights: string[];
    challengesSolved: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: 'terminal' | 'database' | 'computer-science' | 'iot' | 'tools' | 'core';
  tags: string[];
}

export interface HighlightCard {
  title: string;
  description: string;
  iconName: 'ai' | 'programming' | 'database' | 'iot' | 'problem-solving';
  colorScheme: 'primary' | 'secondary' | 'tertiary' | 'dim';
}

export interface EducationInfo {
  degree: string;
  institution: string;
  location: string;
  currentSemester: string;
  coursework: string[];
}

export interface CertificationInfo {
  title: string;
  courseCode: string;
  provider: string;
  issueDate: string;
  credentialId?: string;
  skillsCovered: string[];
}
