export interface Resume {
  basics: Basics;
  summary: string;
  competencies: Competency[];
  experience: Job[];
  education: Education[];
  honors: string[];
}

export interface Basics {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedIn: string;
  photo?: string;
  website?: string;
  location: Location;
}

export interface Location {
  //address: string;
  city: string;
  //region: string;
  //postalCode: string;
  state: string;
  //country: string;
}

export interface Competency {
  domain: string;
  skills: string[];
}

export interface Job {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  summary: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  area: string;
  degree: string;
  startDate?: string;
  endDate: string | null;
  gpa?: string;
}