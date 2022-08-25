import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css'],
})
export class DeleteButtonComponent {
  @Output() deleteBtnEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() modalTarget: any;
  isUserLogged: boolean = false;
  constructor(private userStatus: UserService) {}


  swalModal() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Swal.fire({
      title: 'Eliminar elemento',
      text:'Esta acción no se puede revertir, ¿continuar?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      confirmButtonColor: '#ac3434',
      cancelButtonText: `Cancelar`,
      position: 'top'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.onDelete();
        Toast.fire({title: 'Elemento eliminado exitosamente.', icon: 'success'});
      }
    });
  }

  onDelete() {
    this.deleteBtnEvent.emit();
  }

  ngOnInit() {
    this.userStatus
      .getUserStatus()
      .subscribe((value) => (this.isUserLogged = value));
  }
}
