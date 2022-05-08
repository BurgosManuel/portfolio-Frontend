export interface ProfessionalItem {
  id: number;
  title: string;
  date: string;
  place: string;
  description: string;
}

export interface SkillItem {
  id: number;
  skill: string;
  icon: string;
  lvl: string;
  progress: string;
}

// Esta interfaz nos sirve para brindarle estructura al objeto que retornemos a través del servicio.
export interface SectionItem {
  description: string;
}
