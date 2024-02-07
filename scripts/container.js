 /// Agregar estilos con JavaScript
 const gridContainer = this.querySelector('.grid-container');
 gridContainer.style.top = 0;  
 gridContainer.style.gap = '.1rem';
 gridContainer.style.display = 'grid';
 gridContainer.style.height = '100%';
 gridContainer.style.width = 'auto';
 gridContainer.style.margin = '0';
 gridContainer.style.gridTemplateAreas =
   '"sidebar main" "footer footer "';