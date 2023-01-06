import { AppState } from '@/store/state';
import { UiState } from '@/store/ui/state';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppService } from '@services/app.service';
import { Observable } from 'rxjs';

const BASE_CLASSES = 'main-sidebar elevation-4';
@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
  @HostBinding('class') classes: string = BASE_CLASSES;
  public ui: Observable<UiState>;
  public user;
  public menu = MENU;

  constructor(
    public appService: AppService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.ui = this.store.select('ui');
    this.ui.subscribe((state: UiState) => {
      this.classes = `${BASE_CLASSES} ${state.sidebarSkin}`;
    });
    this.user = this.appService.user;
  }
}

export const MENU = [
  {
    name: 'Dashboard',
    iconClasses: 'fas fa-tachometer-alt',
    path: ['/']
  },
  //NOTE - Menu de Cadastros
  {
    name: 'Cadastros',
    iconClasses: 'fas fa-folder',
    children: [
      {
        name: 'Clientes',
        iconClasses: 'fas fa-address-book',
        path: ['/clientes']
      },
      {
        name: 'Fornecedores',
        iconClasses: 'fas fa-truck',
        path: ['/sub-menu-2']
      },
      {
        name: 'Coloboradores',
        iconClasses: 'fas fa-user',
        path: ['/sub-menu-2']
      },
      {
        name: 'Transportadora',
        iconClasses: 'fas fa-dolly-flatbed',
        path: ['/sub-menu-2']
      },
      {
        name: 'Tabela de Preços',
        iconClasses: 'fas fa-money-check',
        path: ['/sub-menu-2']
      },
      {
        name: 'Forma de pagamento',
        iconClasses: 'fas fa-money-check-alt',
        path: ['/sub-menu-2']
      },
      {
        name: 'Ramo de Atividade',
        iconClasses: 'fas fa-hiking',
        path: ['/sub-menu-2']
      },
      {
        name: 'CFOP',
        iconClasses: 'fas fa-file',
        path: ['/sub-menu-2']
      },
      {
        name: 'Plano de Contas',
        iconClasses: 'fas fa-project-diagram',
        path: ['/sub-menu-2']
      },
      {
        name: 'Bancos',
        iconClasses: 'fas fa-university',
        path: ['/sub-menu-2']
      },
      {
        name: 'Conta Corrente',
        iconClasses: 'fas fa-file-invoice-dollar',
        path: ['/sub-menu-2']
      },
      {
        name: 'Conta Caixa',
        iconClasses: 'fas fa-piggy-bank',
        path: ['/sub-menu-2']
      }
    ]
  },
  //NOTE - Menu de Vendas
  {
    name: 'Venda',
    iconClasses: 'fas fa-shopping-cart',
    children: [
      {
        name: 'Pedidos',
        iconClasses: 'fas fa-cart-plus',
        path: ['/sub-menu-1']
      },
      {
        name: 'Venda Expressa',
        iconClasses: 'fas fa-truck',
        path: ['/sub-menu-2']
      },
      {
        name: 'Nf-e',
        iconClasses: 'fas fa-user',
        path: ['/sub-menu-2']
      },
    ]
  },
];
