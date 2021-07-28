const getMenuFrontEnd = (role='USER_ROLE') => {

  const menu = [
    {
      titulo1: "#Dashboard",
      titulo: "Dashboard",
      icono: "mdi mdi-gauge",
      submenu: [
        { titulo: "Main", url: "/" },
        { titulo: "Gráficas", url: "grafica1" },
        { titulo: "rxjs", url: "rxjs" },
        { titulo: "Promesas", url: "promesas" },
        { titulo: "ProgressBar", url: "progress" },
        { titulo: "Perfil", url: "perfil" },
      ],
    },
    {
      titulo1: "#Mantenimiento",
      titulo: "Mantenimiento",
      icono: "mdi mdi-folder-lock-open",
      submenu: [
        // { titulo: "Usuarios", url: "usuarios" },
        { titulo: "Hospitales", url: "hospitales" },
        { titulo: "Medicos", url: "medicos" },
      ],
    },
  ];

  if(role==='ADMIN_ROLE'){
      //esto para agregarlo a la primera posicion del arreglo
      menu[1].submenu.unshift({ titulo: "Usuarios", url: "usuarios" })
  }
  return menu;
};


module.exports={
    getMenuFrontEnd 
}