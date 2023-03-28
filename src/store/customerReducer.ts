
export type Customer = {
    name: string,
    id: number
}

export type CustomerState = {
    customers: Customer[]
}

type Action = {
    type: string
    payload: Customer
}

const defaultState = {
    customers: []
}




export default (state: CustomerState = defaultState, action: Action): CustomerState => {
    switch (action.type) {
      case "ADD_CUSTOMER":
        return {
          ...state,
          customers: [...state.customers, action.payload]
        }
  
      case "REMOVE_CUSTOMER":
        return {
          ...state,
          customers: state.customers.filter(customer => customer.id !== action.payload.id)
        }
  
  
      default: return state
    }
  }