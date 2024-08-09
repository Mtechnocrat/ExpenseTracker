import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

export default function Expenses() {
  const {addIncome,expenses,getExpenses,deleteExpense,totalExpenses}=useGlobalContext()
  
  useEffect(()=>{
    getExpenses()
  },[])
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h2>Expenses</h2>
        <h2 className='total-income'>Total Expenses : <span>${totalExpenses()}</span></h2>
        <div className='income-content'>
          <div className='form-container'>
            <ExpenseForm/>
          </div>
          <div className='incomes'>
            {expenses.map((income)=>{
              const {_id,title,amount,date,category,description,type}=income;
              return <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor="var(--color-green)"
                deleteItem={deleteExpense}
              />

            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  )
}

const ExpenseStyled=styled.div`
      display:flex;
      overflow:auto;
    .total-income{
      display:flex;
      justify-content:center;
      align-items:center;
      background: #FCF6F9;
      border:2px solid #FFFFFF;
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        margin: 0.3rem 0;
        font-size: 1.3rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
      display:flex;
      left-margin:-1rem;
      gap:2rem;

      .income{
        flex:1;
      }
    }

`;
