import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DadosClientesComponent } from '../dados/dados.component';

@Component({
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaClienteComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  async addCliente() {
    await this.modalService.open(DadosClientesComponent, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: false,
      size: 'xl'
    }).result.then((result) => {
      this.closeResult = `closed with ${result}`
    },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    )

    console.log(this.closeResult)
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
