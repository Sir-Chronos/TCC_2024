export interface Materiais {
    id: number;
    nome: string;
    tipo: string;
    qtd: number;  // Quantidade disponível
}

export const MateriaisMockados: Materiais[] = [
    {
        id: 1,
        nome: "Cimento",
        tipo: "Construção",
        qtd: 100,
    },
    {
        id: 2,
        nome: "Tijolo",
        tipo: "Construção",
        qtd: 5000,
    },
    {
        id: 3,
        nome: "Madeira",
        tipo: "Estrutural",
        qtd: 300,
    },
    {
        id: 4,
        nome: "Tubo de PVC",
        tipo: "Hidráulico",
        qtd: 120,
    },
];
