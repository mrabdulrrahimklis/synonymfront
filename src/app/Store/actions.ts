// action constants
export const ADD_SYNONYM = "[Add] ADD_SYNONYM";
export const ADD_WORD = "[Add] ADD_WORD";

// action creators
export class AddSynonym {
  readonly type = ADD_SYNONYM;
  constructor(private payload: any) {}
}

export class AddWord {
  readonly type = ADD_WORD;
  constructor(private payload: any) {}
}
