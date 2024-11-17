import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import GestorUsuarios from "../models/gestorUsuario";

const gestorUsuarios = new GestorUsuarios();

export default function UserList() {
  const [usuarios, setUsuarios] = useState([]); // Estado para usuarios

  // Cargar los usuarios al iniciar
  useEffect(() => {
    async function loadUsuarios() {
      await gestorUsuarios.cargarUsuarios(); // Cargar los usuarios desde AsyncStorage
      setUsuarios(gestorUsuarios.ObtenerUsuarios()); // Actualizar el estado de usuarios
    }
    loadUsuarios();
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuarios</Text>
      {usuarios.length === 0 ? (
        <Text style={styles.noUsers}>No hay usuarios registrados.</Text>
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <Text>Usuario: {item.name}</Text>
              <Text>Email: {item.email}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  noUsers: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
  userItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
