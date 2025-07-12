export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'cybersecurity' | 'hardware' | 'web' | 'mechanical';
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface ThemeMode {
  isDark: boolean;
  isCreedMode: boolean;
  soundEnabled: boolean;
}