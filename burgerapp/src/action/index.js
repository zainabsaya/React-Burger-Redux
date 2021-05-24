export function Add( value ) {
    console.log( value )
    switch ( value ) {

        case "lettuce":
            return { type: "Add_LETTUCE" }

        case "tomato":
            return { type: "Add_TOMATO" }

        case "cheese":
            return { type: "Add_CHEESE" }

        case "meat":
            return { type: "Add_MEAT" }

    }
}
export function Remove() {
    return {
        type: 'Remove_LETTUCE'

    }
}