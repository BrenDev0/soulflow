export interface Block {
    content: string;
}

export interface Workflow {
    name: string;
    steps: Block[],
    variables: any[]
}