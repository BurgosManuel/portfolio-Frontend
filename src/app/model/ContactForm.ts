export class ContactForm {
  nombre: string;
  email: string;
  comentario: string;
  _template: string;

  constructor(name: string, email: string, comment: string) {
    this.nombre = name;
    this.email = email;
    this.comentario = comment;
    this._template = 'table'
  }
}
