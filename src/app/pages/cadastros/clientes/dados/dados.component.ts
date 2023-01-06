import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-clientes',
  standalone: true,
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})
export class DadosClientesComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }

}
