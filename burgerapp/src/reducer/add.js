const initialstate =0;
 const AddTheLettuce =(state = initialstate,action)=>{
    switch(action.type){
        case "Add_LETTUCE": return state + 1;
        case "Remove_LETTUCE": return state - 1;
        default:return state;
    }
} 
 const AddTheTomato = (state = initialstate,action)=>{
     console.log(action.type);
    switch(action.type){
        case "Add_TOMATO": return state + 1;
        // case "Remove_ToMATO": return state - 1;
        default:return state;
    }
} 
const AddTheCheese = (state = initialstate,action)=>{
    console.log(action.type);
   switch(action.type){
       case "Add_CHEESE": return state + 1;
       // case "Remove_ToMATO": return state - 1;
       default:return state;
   }
} 
const AddTheMeat = (state = initialstate,action)=>{
    console.log(action.type);
   switch(action.type){
       case "Add_MEAT": return state + 1;
       // case "Remove_ToMATO": return state - 1;
       default:return state;
   }
} 
export default AddTheLettuce
export {AddTheTomato,AddTheCheese,AddTheMeat}