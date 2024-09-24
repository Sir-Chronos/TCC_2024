export interface Maquina {
    id: number;
    nome: string;
    tipo: string;
    local: string;
    status: string;  // operante, inoperante, em manutenção
    data_fabricacao: Date;
  }
  
  export const MaquinasMockadas: Maquina[] = [
    {
      id: 1,
      nome: "Escavadeira",
      tipo: "Pesada",
      local: "Obra A",
      status: "operante",
      data_fabricacao: new Date("2015-04-10"),
    },
    {
      id: 2,
      nome: "Betoneira",
      tipo: "Leve",
      local: "Obra B",
      status: "em manutenção",
      data_fabricacao: new Date("2018-09-15"),
    },
    {
      id: 3,
      nome: "Guindaste",
      tipo: "Pesada",
      local: "Obra C",
      status: "inoperante",
      data_fabricacao: new Date("2010-06-22"),
    },
    {
      id: 4,
      nome: "Compactadora",
      tipo: "Leve",
      local: "Obra D",
      status: "operante",
      data_fabricacao: new Date("2020-01-30"),
    },
  ];
  