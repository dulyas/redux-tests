
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
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'


export const addCustomerAction = (payload: Customer): CustomerAction => ({
  type: ADD_CUSTOMER,
  payload
})

export const removeCustomerAction = (payload: Customer): CustomerAction => ({
  type: REMOVE_CUSTOMER,
  payload
})

export const addManyCustomersAction = (payload: Customer): CustomerAction => ({
  type: ADD_MANY_CUSTOMERS,
  payload
})

export default (state: CustomerState = defaultState, action: CustomerAction): CustomerState => {
    switch (action.type) {
      case ADD_MANY_CUSTOMERS:
        return {
          ...state,
          customers: [...state.customers, ...action.payload]
        }
  
      case REMOVE_CUSTOMER:
        return {
          ...state,
          customers: state.customers.filter(customer => customer.id !== action.payload.id)
        }
        
      case ADD_CUSTOMER: {
        return {
          ...state,
          customers: [...state.customers, action.payload]
        }
      }
  
      default: return state
    }
  }