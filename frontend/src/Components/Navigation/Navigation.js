
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { menuItems } from '../../utils/menuItems'
import { signout } from '../../utils/Icons'

export default function Navigation({active,setActive}) {

  return (
    <NavStyled>
        <div className='user-con'>
            <img src={avatar} alt=""/>
            <div className='text'>
                <h2>Mike</h2>
                <p>Your Money</p>
            </div>
        </div>
        <ul className='menu-items'>
            {menuItems.map((items)=>{
                return  <li
                key={items.id}
                onClick={()=>setActive(items.id)}
                className={active === items.id ? 'active':''}
                >
                    {items.icon}
                    <span>{items.title}</span>
                </li>
            })}
        </ul>
        <div className='bottom-nav'>
                <li>
                    {signout} Sign Out
                </li>
        </div>
    </NavStyled>
  )
}
  const NavStyled=styled.nav`
    margin-top:-14rem;
    padding: 1rem 1.5rem;
    width: 374px;
    height: 70%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            margin-top:-14.8rem;
            width: 4px;
            height: 1%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
  
  `;
