
export type Customer = {
    name: string,
    id: number
}

export type CustomerState = {
    customers: Customer[]
}

export type CustomerAction = {
    type: string
    payload: Customer
}

const defaultState = {
    customers: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'



export const addCustomerAction = (payload: Customer): CustomerAction => ({
  type: ADD_CUSTOMER,
  payload
})

export const removeCustomerAction = (payload: Customer): CustomerAction => ({
  type: REMOVE_CUSTOMER,
  payload
})


export default (state: CustomerState = defaultState, action: CustomerAction): CustomerState => {
    switch (action.type) {
      case ADD_CUSTOMER:
        return {
          ...state,
          customers: [...state.customers, action.payload]
        }
  
      case REMOVE_CUSTOMER:
        return {
          ...state,
          customers: state.customers.filter(customer => customer.id !== action.payload.id)
        }
  
  
      default: return state
    }
  }