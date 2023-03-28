const defaultState = {
    cash: 0
}

export type CashState = {
    cash: number
}

type Action = {
    type: string
    payload: number
}



export default (state: CashState = defaultState, action: Action): CashState => {
    switch (action.type) {
      case "ADD_CASH":
        return {
          ...state,
          cash: state.cash + action.payload
        }
  
      case "GET_CASH":
        return {
          ...state,
          cash: state.cash - action.payload
        }
  
  
      default: return state
    }
  }