// Definir una función para saludar
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "! Bienvenido.");
  }
  
  // Definir un objeto para manejar las tareas
  const gestorTareas = {
    tareas: [],
    
    // Método para agregar una tarea
    agregarTarea: function(tarea) {
      this.tareas.push(tarea);
      console.log("Tarea agregada:", tarea);
    },
    
    // Método para mostrar todas las tareas
    mostrarTareas: function() {
      console.log("Tareas:");
      this.tareas.forEach(function(tarea, indice) {
        console.log(indice + 1 + ". " + tarea);
      });
    },
    
    // Método para completar una tarea
    completarTarea: function(indice) {
      if (indice >= 0 && indice < this.tareas.length) {
        this.tareas.splice(indice, 1);
        console.log("Tarea completada.");
      } else {
        console.log("Índice de tarea no válido.");
      }
    }
  };
  
  // Llamar a la función con un nombre específico
  saludar("Juan");
  
  // Agregar algunas tareas
  gestorTareas.agregarTarea("Hacer la compra");
  gestorTareas.agregarTarea("Llamar al cliente");
  
  // Mostrar todas las tareas
  gestorTareas.mostrarTareas();
  
  // Completar una tarea
  gestorTareas.completarTarea(0);
  
  // Mostrar todas las tareas después de completar una
  gestorTareas.mostrarTareas();
  