export interface Item {
  id: number;
  title: string;
  date: string;
  place: string;
  description: string;
}

// Esta interfaz nos sirve para brindarle estructura al objeto que retornemos a través del servicio.
export interface SectionItem {
    description: string;
  }