import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

export default function Income() {
  const {addIncome,incomes,getIncomes,deleteIncome}=useGlobalContext()
  
  useEffect(()=>{
    getIncomes()
  },[])
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className='income-content'>
          <div className='form-container'>
            <Form/>
          </div>
          <div className='incomes'>
            {incomes.map((income)=>{
              const {_id,title,amount,date,category,description}=income;
              return <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount} date={date}
                category={category}
                indicatorColor="var(--color-green)"
                deleteItem={deleteIncome}
              />

            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled=styled.div`
      display:flex;
      overflow:auto;

    .income-content{
      display:flex;
      left-margin:-1rem;
      gap:2rem;

      .income{
        flex:1;
      }
    }

`;
