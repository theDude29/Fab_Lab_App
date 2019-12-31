const initialState = {connecte: false, pseudo: ""}

function compteReducer(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'CONNECTION':
        nextState = {...state, connecte: true, pseudo: action.value.pseudo}
        return nextState || state

    case 'DECONNECTION':
        nextState = {...state, connecte: false, pseudo: ""}
        return nextState || state

    default:
        return state
  }
}

export default compteReducer
