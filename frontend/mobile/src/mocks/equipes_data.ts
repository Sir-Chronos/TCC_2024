// equipe.ts
export interface Integrante {
    nome: string;
    cargo: string;
}

export interface Equipe {
    id: number;
    integrantes: Integrante[];
    status: string;
}

export const equipesMockadas: Equipe[] = [
    {
        id: 1,
        integrantes: [
            { nome: "João Silva", cargo: "Desenvolvedor" },
            { nome: "Maria Souza", cargo: "Designer" },
        ],
        status: "ativo",
    },
    {
        id: 2,
        integrantes: [
            { nome: "Carlos Pereira", cargo: "Gerente de Projetos" },
            { nome: "Ana Martins", cargo: "Desenvolvedora" },
        ],
        status: "inativo",
    },
    {
        id: 3,
        integrantes: [
            { nome: "Bruno Costa", cargo: "Analista de Dados" },
            { nome: "Fernanda Lima", cargo: "Desenvolvedora" },
        ],
        status: "ativo",
    },
];
