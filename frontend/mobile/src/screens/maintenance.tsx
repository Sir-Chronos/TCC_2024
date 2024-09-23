import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export function MaintenanceScreen() {
  const [maintenanceType, setMaintenanceType] = useState("");
  const [responsibleTeam, setResponsibleTeam] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [status, setStatus] = useState("");
  const [usedMaterials, setUsedMaterials] = useState("");

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleSubmit = () => {
    // Função para cadastrar manutenção
    console.log({
      maintenanceType,
      responsibleTeam,
      date,
      status,
      usedMaterials,
    });
  };

  return (
    <ScrollView className="flex-1 p-5 bg-gray-100">
      <Text className="text-2xl font-bold mb-5">Register Maintenance</Text>

      {/* Campo: Tipo de Manutenção */}
      <Text className="text-lg mb-2">Maintenance Type:</Text>
      <TextInput
        className="border border-gray-300 p-3 rounded mb-5"
        placeholder="Enter the maintenance type"
        value={maintenanceType}
        onChangeText={setMaintenanceType}
      />

      {/* Campo: Equipe Responsável */}
      <Text className="text-lg mb-2">Responsible Team:</Text>
      <TextInput
        className="border border-gray-300 p-3 rounded mb-5"
        placeholder="Enter the responsible team"
        value={responsibleTeam}
        onChangeText={setResponsibleTeam}
      />

      {/* Campo: Data e Hora */}
      <Text className="text-lg mb-2">Date and Time:</Text>
      <TouchableOpacity
        className="border border-gray-300 p-3 rounded mb-5"
        onPress={() => setShowDatePicker(true)}
      >
        <Text>{date.toLocaleString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {/* Atualizar Manutenção: Status */}
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
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded"
        onPress={handleSubmit}
      >
        <Text className="text-white text-center">Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
