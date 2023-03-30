import { addManyCustomersAction } from './../store/customerReducer';
import type { Customer } from './../store/customerReducer';
export const fetchCustomers = ():Function => {
    return (dispatch: any):void => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyCustomersAction(json)))
    }
}