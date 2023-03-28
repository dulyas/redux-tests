import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import type { State } from './store';
import type { Customer } from './store/customerReducer'

const App = () => {


  
  const dispatch = useDispatch()
  const cash: number = useSelector((state: State) => state.cash.cash)
  const customers: Customer[]  = useSelector((state: State) => state.customer.customers)
 
  const addCash = (cash: number) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash: number) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name: string) => {
    const customer: Customer = {
        name,
        id: +Date.now()
    }
    dispatch({type: 'ADD_CUSTOMER', payload: customer})
  }

  const removeCustomer = (id: number) => {

    dispatch({type: 'REMOVE_CUSTOMER', payload: {id}})
  }


  return (
    <div className='app'>
      <div style={{fontSize: 30}}>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick={() => addCash(2)}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(2)}>
          Снять со счета
        </button>
        <button onClick={() => addCustomer(`${Math.random()}`)}>
          Добавить клиенты
        </button>
      </div>
      {customers?.length > 0 ? 
        <div>
            {customers.map(customer => 
                <div onClick={() => removeCustomer(customer.id)}>
                    {customer.name}
                </div>
            )}
        </div>
        : 
        <div style={{fontSize: 30}}>
            Клиенты отсутствуют
        </div>
      }
    </div>
  );
};

export default App;