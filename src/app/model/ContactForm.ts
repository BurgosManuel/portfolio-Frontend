export class ContactForm {
  nombre: string;
  emisor: string;
  receptor_id: number;
  mensaje: string;

  constructor(nombre: string, emisor: string, mensaje: string){
      this.nombre = nombre;
      this.emisor = emisor;
      this.receptor_id = 1;
      this.mensaje = mensaje;
  }
}