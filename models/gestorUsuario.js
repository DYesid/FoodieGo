import Persona from './Persona';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class GestorUsuarios {
  constructor() {
    this.usuarios = [];
    this.cargarUsuarios(); 
  }

  // Cargar los usuarios desde AsyncStorage
  async cargarUsuarios() {
    try {
      const usuariosGuardados = await AsyncStorage.getItem('usuarios');
      if (usuariosGuardados) {
        this.usuarios = JSON.parse(usuariosGuardados);
      }
    } catch (error) {
      console.error("Error al cargar los usuarios:", error);
    }
  }

  // Guardar los usuarios en AsyncStorage
  async guardarUsuarios() {
    try {
      await AsyncStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    } catch (error) {
      console.error("Error al guardar los usuarios:", error);
    }
  }

  // Agregar un nuevo usuario
  async NuevoUsuario(name, email, password) {
    const nuevoUsuario = new Persona(name, email, password);
    this.usuarios.push(nuevoUsuario); 
    await this.guardarUsuarios(); 
  }

  // Verificar si un usuario existe con email y contraseña
  VerficarUsuario(email, password) {
    const usuarioEncontrado = this.usuarios.find(usuario => usuario.email === email && usuario.password === password);
    return usuarioEncontrado ? true : false;
  }

  VerficarEmail(email) {
    const emailEncontrado = this.usuarios.find(usuario => usuario.email === email);
    return emailEncontrado ? true : false;
  }

  // Obtener los usuarios
  ObtenerUsuarios() {
    return this.usuarios;
  }

  // Borrar los usuarios
  async borrarUsuarios() {
    try {
      this.usuarios = []; // Vaciar la lista de usuarios
      await AsyncStorage.removeItem('usuarios'); // Eliminar la lista de AsyncStorage
    } catch (error) {
      console.error("Error al borrar los usuarios", error);
    }
  }
}
