import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { equipesMockadas } from "../mocks/equipes_data";
import { MaquinasMockadas } from "../mocks/maquinas_data";

export function MaintenanceScreen() {
  const [maintenanceType, setMaintenanceType] = useState("");
  const [startDate, setStartDate] = useState(""); // Data de início
  const [status, setStatus] = useState("");
  const [usedMaterials, setUsedMaterials] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const [selectedMachine, setSelectedMachine] = useState<number | null>(null);
  const [isTeamDropdownVisible, setIsTeamDropdownVisible] = useState(false);
  const [isMachineDropdownVisible, setIsMachineDropdownVisible] = useState(false);

  // Filtrar equipes ativas
  const activeTeams = equipesMockadas.filter((equipe) => equipe.status === "ativo");

  const handleSubmit = () => {
    // Função para cadastrar manutenção
    console.log({
      maintenanceType,
      selectedTeam,
      selectedMachine,
      startDate, // Data de início incluída
      status,
      usedMaterials,
    });
  };

  return (
    <ScrollView className="p-5">
      {/* Cadastro de nova manutenção */}
      <Text className="text-2xl font-bold mb-5">Register New Maintenance</Text>

      {/* Campo: Tipo de Manutenção */}
      <Text className="text-lg mb-2">Maintenance Type:</Text>
      <TextInput
        className="border border-gray-300 p-3 rounded mb-5"
        placeholder="Enter the maintenance type"
        value={maintenanceType}
        onChangeText={setMaintenanceType}
      />

      {/* Campo: Data de Início */}
      <Text className="text-lg mb-2">Start Date:</Text>
      <TextInput
        className="border border-gray-300 p-3 rounded mb-5"
        placeholder="Enter the start date"
        value={startDate}
        onChangeText={setStartDate}
      />
            {/* Seletor de Equipes */}
            <Text className="text-lg mb-2">Select Responsible Team:</Text>
      <TouchableOpacity
        className="border border-gray-300 p-3 rounded mb-5"
        onPress={() => setIsTeamDropdownVisible(!isTeamDropdownVisible)}
      >
        <Text>{selectedTeam ? `Selected Team: ${selectedTeam}` : "Select a team"}</Text>
      </TouchableOpacity>
      {isTeamDropdownVisible && (
        <View style={{ maxHeight: 150 }}>
          <FlatList
            data={activeTeams}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="p-4 border-b border-gray-200"
                onPress={() => {
                  setSelectedTeam(item.id);
                  setIsTeamDropdownVisible(false); // Esconder lista após a seleção
                }}
              >
                <Text className="font-bold">Equipe {item.id}</Text>
                {item.integrantes.map((integrante, index) => (
                  <Text key={index}>
                    {integrante.nome} - {integrante.cargo}
                  </Text>
                ))}
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {/* Seletor de Máquinas */}
      <Text className="text-lg mb-2">Select Machine:</Text>
      <TouchableOpacity
        className="border border-gray-300 p-3 rounded mb-5"
        onPress={() => setIsMachineDropdownVisible(!isMachineDropdownVisible)}
      >
        <Text>{selectedMachine ? `Selected Machine: ${selectedMachine}` : "Select a machine"}</Text>
      </TouchableOpacity>
      {isMachineDropdownVisible && (
        <View style={{ maxHeight: 150 }}>
          <FlatList
            data={MaquinasMockadas}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="p-4 border-b border-gray-200"
                onPress={() => {
                  setSelectedMachine(item.id);
                  setIsMachineDropdownVisible(false); // Esconder lista após a seleção
                }}
              >
                <Text className="font-bold">
                  {item.nome} ({item.tipo})
                </Text>
                <Text>Local: {item.local}</Text>
                <Text>Status: {item.status}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      
      {/* Atualizar Manutenção Existente */}
      <Text className="text-2xl font-bold mb-5">Update Maintenance</Text>
      <Text className="text-lg mb-2">Maintenance Status:</Text>
      <TextInput
        className="border border-gray-300 p-3 rounded mb-5"
        placeholder="Enter the current status"
        value={status}
        onChangeText={setStatus}
      />



      {/* Atualizar Manutenção: Materiais Usados */}
      <Text className="text-lg mb-2">Used Materials:</Text>
      <TextInput
        className="border border-gray-300 p-3 rounded mb-5"
        placeholder="Enter the used materials"
        value={usedMaterials}
        onChangeText={setUsedMaterials}
      />



      {/* Botão de Submit */}
      <TouchableOpacity className="bg-blue-500 p-4 rounded m-5" onPress={handleSubmit}>
        <Text className="text-white text-center">Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
