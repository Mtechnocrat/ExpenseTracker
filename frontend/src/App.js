import React, { useState, useMemo } from "react";
import styled from "styled-components";
import bg from "./img/bg.png";

import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";

import Navigation from "./Components/Navigation/Navigation.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Income from "./Components/Income/Income.js";
import Expenses from "./Components/Expenses/Expenses.js";
// import { dashboard } from "./utils/Icons.js";
import { useGlobalContext } from "./context/globalContext.js";

function App() {
  const [active, setActive] = useState(1);

  const global =useGlobalContext();
  console.log(global);
  
  const displayData=()=>{
    switch(active){
      case 1: 
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3:
        return <Income/>
      case 4:
        return <Expenses/>
      default:
        return <Dashboard/>
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);
  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  height: 140vh;
  background-image: url(${(props) => props.bg});
  position: relative;

  main{
    margin-top:-14rem;
    height:120vh;
    flex:1;
    background:rgba(252,242,249,0.78);
    border:3px solid #FFFFFF;
    backdrop-filter:blur(4.5px);
    border-radius:32px;
    overflow:auto;
    overflow-x:hidden;
    &::-webkit-scrollbar{
      width:0;
    }
  }
`;

//1:47:08 / 4:46:45

export default App;
