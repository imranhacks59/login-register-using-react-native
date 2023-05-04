

const initialState={
   userData:{}
}

const UserReducer=(state = initialState,action)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                userData:action.payload
            }
        default:
        return {...state}    
    }
}

export default UserReducer