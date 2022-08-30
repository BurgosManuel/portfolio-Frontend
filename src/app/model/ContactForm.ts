export class ContactForm {
  nombre: string;
  emisor: string;
  receptor: string;
  mensaje: string;

  constructor(nombre: string, emisor: string, mensaje: string){
      this.nombre = nombre;
      this.emisor = emisor;
      this.receptor = '';
      this.mensaje = mensaje;
  }
}