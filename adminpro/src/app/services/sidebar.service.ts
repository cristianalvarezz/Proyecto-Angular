import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {  
      titulo1: '#Dashboard',
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Gráficas', url: 'grafica1' },
        { titulo: 'rxjs', url: 'rxjs' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Perfil', url: 'perfil' },
      ]
    },
    {
      titulo1: '#Mantenimiento',
      titulo: 'Mantenimiento',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: 'usuarios' },
        { titulo: 'Hospitales', url: 'hospitales' },
        { titulo: 'Medicos', url: 'medicos' }, 
      ]
    },
  ];

  constructor() { }
}

