import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, Button } from "react-native";
import { MaquinasMockadas } from "../mocks/maquinas_data";
import { MateriaisMockados } from "../mocks/materiais_data";

// Função utilitária para formatar a data
const formatDate = (date: Date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export function InventoryScreen() {
  const [selectedMachine, setSelectedMachine] = useState<any>(null); // Estado para a máquina selecionada
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal

  // Função para abrir o modal com os detalhes da máquina
  const openModal = (machine: any) => {
    setSelectedMachine(machine);
    setModalVisible(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedMachine(null);
  };

  // Renderizar cada item da lista de materiais
  const renderMaterialItem = ({ item }: { item: { id: number; nome: string; tipo: string; qtd: number } }) => (
    <TouchableOpacity className="p-4 border-b border-gray-200">
      <Text className="font-bold">{item.nome} ({item.tipo})</Text>
      <Text>Quantidade disponível: {item.qtd}</Text>
    </TouchableOpacity>
  );

  // Renderizar cada item da lista de máquinas
  const renderMachineItem = ({ item }: { item: { id: number; nome: string; tipo: string; local: string; status: string; data_fabricacao: Date } }) => (
    <TouchableOpacity className="p-4 border-b border-gray-200" onPress={() => openModal(item)}>
      <Text className="font-bold">{item.nome} ({item.tipo})</Text>
      <Text>Local: {item.local}</Text>
      <Text>Status: {item.status}</Text>
      <Text>Data de fabricação: {formatDate(item.data_fabricacao)}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 p-5 bg-gray-100">
      {/* Lista de Materiais */}
      <Text className="text-xl font-bold mb-4">Materiais</Text>
      <FlatList
        data={MateriaisMockados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMaterialItem}
        className="mb-8"
      />

      {/* Lista de Máquinas */}
      <Text className="text-xl font-bold mb-4">Máquinas</Text>
      <FlatList
        data={MaquinasMockadas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMachineItem}
      />

      {/* Modal para detalhes da máquina */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="w-3/4 p-6 bg-white rounded-lg">
            {selectedMachine && (
              <>
                <Text className="text-xl font-bold mb-4">{selectedMachine.nome}</Text>
                <Text>Tipo: {selectedMachine.tipo}</Text>
                <Text>Local: {selectedMachine.local}</Text>
                <Text>Status: {selectedMachine.status}</Text>
                <Text>Data de Fabricação: {formatDate(selectedMachine.data_fabricacao)}</Text>
                <Button title="Fechar" onPress={closeModal} />
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}
