import React, { componet } from 'react';
import './Burgerstyle.css';

class Burger extends React.Component {
    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0,
    }
    addRemoveIngredient = ( action, ingredient ) => {
        let { lettuce, tomato, cheese, meat } = this.state;
        let statevalue;
        switch ( ingredient ) {
            case 'lettuce': {
                statevalue = lettuce
                break;
            }
            case 'tomato': {
                statevalue = tomato
                break;
            }
            case 'cheese': {
                statevalue = cheese
                break;
            }
            case 'meat': {
                statevalue = meat
                break;
            }
            default: break;
        }
        if ( action == "add" ) {
            statevalue = statevalue + 1;
        }
        else {
            statevalue = statevalue - 1;

        }
        this.setState( {
            [ ingredient ]: statevalue >= 0 ? statevalue : 0
        } )
    }

    burgerContent = () => {
        let { lettuce, tomato, cheese, meat } = this.state;
        let burger = []
        for ( let i = 0; i < lettuce; i++ ) {
            burger.push( <div key={burger.length} className="lettuceside"></div> )
        }
        for ( let i = 0; i < tomato; i++ ) {
            burger.push( <div key={burger.length} className="tomatoside"></div> )
        }
        for ( let i = 0; i < cheese; i++ ) {
            burger.push( <div key={burger.length} className="cheeseside"></div> )
        }
        for ( let i = 0; i < meat; i++ ) {
            burger.push( <div key={burger.length} className="meatside"></div> )
        }
        return burger;
    }
    render() {
        return (
            <>
                <div className="burgerIngredients">
                    <div className="topside"></div>
                    {this.burgerContent()}
                    <div className="bottomside"></div>
                </div>
                <div className="IngrediantBlock">
                    <p>lettuce</p>
                    <div className="IngrediantBtns">
                        <button className="IngrBtn" onClick={() => this.addRemoveIngredient( 'add', 'lettuce' )}>Add</button>
                        <button className="IngrBtn" onClick={() => this.addRemoveIngredient( 'remove', 'lettuce' )}>Remove</button>
                    </div>
                    <p>tomato</p>
                    <div className="IngrediantBtns">
                        <button className="IngrBtn" onClick={() => this.addRemoveIngredient( 'add', 'tomato' )}>Add</button>
                        <button className="IngrBtn" onClick={() => this.addRemoveIngredient( 'remove', 'tomato' )}>Remove</button>
                    </div>
                    <p>cheese</p>
                    <div className="IngrediantBtns">
                        <button className="IngrBtn" onClick={() => this.addRemoveIngredient( 'add', 'cheese' )}>Add</button>
                        <button className="IngrBtn" onClick={() => this.addRemoveIngredient( 'remove', 'cheese' )}>Remove</button>
                    </div>
                    <p>meat</p>
                    <div className="IngrediantBtns">
                        <button className="IngrBtn" onClick={() => this.addRemoveIngredient( 'add', 'meat' )}>Add</button>
                        <button className="IngrBtn" onClick={() => this.addRemoveIngredient( 'remove', 'meat' )}>Remove</button>
                    </div>



                </div>
            </>
        )
    }
}
export default Burger