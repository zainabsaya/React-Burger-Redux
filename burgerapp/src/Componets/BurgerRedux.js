import React, { componet } from 'react';
import './Burgerstyle.css';
import { useSelector, useDispatch } from "react-redux"
import { Add, Remove } from '../action/index'



const Burger = () => {
    const mystate = useSelector( ( state ) => state.AddTheLettuce )
    const tomato = useSelector( ( state ) => state.AddTheTomato );
    const meat = useSelector((state)=>state.AddTheMeat)
    const cheese = useSelector((state)=>state.AddTheCheese)
    const dispatch = useDispatch();


    const Burgercontent = () => {
        console.log( mystate )
        const lettuce = mystate;
        const tomatos = tomato;
        const meats = meat;
        const cheeses = cheese;
        let burger = []
        for ( let i = 0; i < lettuce; i++ ) {
            burger.push( <div key={burger.length} className="lettuceside"></div> )
        }

        for ( let i = 0; i < tomatos; i++ ) {
            burger.push( <div key={burger.length} className="tomatoside"></div> )
        }
        for ( let i = 0; i < meats; i++ ) {
            burger.push( <div key={burger.length} className="meatside"></div> )
        }
        for ( let i = 0; i < cheeses; i++ ) {
            burger.push( <div key={burger.length} className="cheeseside"></div> )
        }
        console.log( burger );
        return burger;
    }

    return (
        <>
            <div className="burgerIngredients">
                <div className="topside"></div>
                {
                    Burgercontent()
                }
                <div className="bottomside"></div>
            </div>
            <div className="IngrediantBlock">
                <p>lettuce {mystate}</p>
                <div className="IngrediantBtns">
                    <button className="IngrBtn" onClick={() => dispatch( Add( "lettuce" ) )}>Add</button>
                    <button className="IngrBtn" onClick={() => dispatch( Remove() )}>Remove</button>
                </div>
                <p>tomato</p>
                <div className="IngrediantBtns">
                    <button className="IngrBtn" onClick={() => dispatch( Add( "tomato" ) )}>Add</button>
                    <button className="IngrBtn" >Remove</button>
                </div>
                <p>cheese</p>
                <div className="IngrediantBtns">
                    <button className="IngrBtn" onClick={() => dispatch( Add( "cheese" ) )}>Add</button>
                    <button className="IngrBtn" >Remove</button>
                </div>
                <p>meat</p>
                <div className="IngrediantBtns">
                    <button className="IngrBtn" onClick={() => dispatch( Add( "meat" ) )} >Add</button>
                    <button className="IngrBtn">Remove</button>
                </div>



            </div>
        </>
    )
}
export default Burger