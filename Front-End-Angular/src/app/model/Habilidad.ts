export class Habilidad {
  id: number;
  persona_id: number;
  nombre: string;
  tipo: string;
  nivel: string;
  progreso: number;
  icono: string;

  constructor(
    id: number,
    persona_id: number,
    nombre: string,
    tipo: string,
    nivel: string,
    progreso: number,
    icono: string
  ) {
    this.id = id;
    this.persona_id = persona_id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.nivel = nivel;
    this.progreso = progreso;
    this.icono = icono;
  }
}
