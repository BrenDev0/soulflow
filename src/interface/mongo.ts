export interface Block {
    type: string;  
    content: string;  
    
    action: 'set_variable' | 'api_call' | 'verify_value' | null; 
    
    params?: {  
      url?: string;
      method?: string;
      headers?: Record<string, string>;  
    };
  
    conditions?: {  
      field: string;
      operator: string;
      value: any;
    };
  
    variable?: string;  
    value?: any;  
  }
  

export interface Workflow {
    name: string;
    steps: Block[],
    variables: any[]
}