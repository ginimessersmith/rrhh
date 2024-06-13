export interface RequestInterface {
  id:              string;
  emailPostulant:  string;
  namePostulant:   string;
  curriculumVitae: string;
  validation?:      Validation;
}

export interface Validation {
  id?:                 string;
  score?:              number;
  success_percentage?: number;
  opinion?:            string;
}
