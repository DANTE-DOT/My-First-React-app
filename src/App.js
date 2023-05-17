import React,{useState} from 'react';

import NewExpense from './component/NewExpense';
import Expenses from './component/Expenses';
import Header from './component/Header.'

const DUMMY_EXPENSES = [];
const App = () => {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES)
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses]});
};
  
  

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <Header />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;