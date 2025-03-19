export interface Block {
    step: number;
    content: string;
}

export interface Workflow {
    name: string;
    steps: Block[]
}