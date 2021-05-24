import AddTheLettuce,{AddTheTomato,AddTheCheese,AddTheMeat} from './add'
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    AddTheLettuce,
    AddTheTomato,
    AddTheMeat,
    AddTheCheese
})
export default rootReducer;