import { CButton, CFormInput } from "@coreui/react-pro";
import  {  useState } from "react";
import { IUsers } from "../../../shared/model/users.model";
import "../../../assets/css/components.css"
import {  useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store"
// import  Management  from "./userManager.reducer"

// interface EditUserManagement{
//     addUser: IUsers|null,
//     users: IUsers[],
//     setUsers: (keys: IUsers[]) => void,
//     value: number,
//     newObj: IUsers,
//     setNewobj: (keys:IUsers) => void,
// }

const EditUserManagement = () => {
    // const {addUser, users, setUsers, value, newObj, setNewobj} = props
   
    const {edit} = useParams()
    const navigate = useNavigate()
    // const location = useLocation()
    const DATA = useSelector((state:RootState) => state.userManagement.users)
    
    const datafilter = DATA.find((ele) => ele.id === Number(edit))
    const newUser:IUsers = {
        id: DATA.length +1,
        first_name : "",
        last_name : "",
        email : "",
        gender : "",
        nationality : "",
        car_model_year : 0,
    }
    const [dataEdit, setDataEdit] = useState<IUsers>((datafilter)?(datafilter):newUser)

    
    
    // useEffect(() =>{
    //     (!addUser ) ? (setNewobj(newUser)) : (setNewobj(addUser))        
    //   },[addUser] )

   
    const data = useSelector((state:RootState) => state.userManagement.users) 
    const dispatch = useDispatch()
    // const [valueEdit, setValueEdit] = useState<>
    
    
 const buttonEditUser = () => () =>{
        // users.splice(index, 1, newObj)
        // setUsers(users)
        
        // dispatch(Management.edit(dataEdit))
        navigate('/table1')
    }


    return(
        <>
        
                <h1>{edit}</h1>
        <div className={`AddUserManagement d-flex justify-content-center align-items-center`}>
        <div className={`AddUsers p-3 m-2 `}>
        <div>
            <CFormInput 
                value={dataEdit.first_name}
                type="text"
                label="first name:"
                placeholder="first name"
                className="AddUsers-input"
                onChange={(e) => setDataEdit({...dataEdit, first_name: e.currentTarget.value})}
                />
                <CFormInput 
                value={dataEdit.last_name}
                type="text"
                label="last name:"
                placeholder="last name"
                className="AddUsers-input"
                onChange={(e) => setDataEdit({...dataEdit, last_name: e.currentTarget.value})}
                />
                <CFormInput 
                value={dataEdit.email}
                type="text"
                label="Email:"
                placeholder="Email"
                className="AddUsers-input"
                onChange={(e) => setDataEdit({...dataEdit, email: e.currentTarget.value})}
                />
                <CFormInput 
                value={dataEdit.gender}
                type="text"
                label="Gender:"
                placeholder="Gender"
                className="AddUsers-input"
                onChange={(e) => setDataEdit({...dataEdit, gender: e.currentTarget.value})}
                />
                <CFormInput 
                value={(dataEdit.car_model_year)?(dataEdit.car_model_year):("") }
                type="number"
                label="Year:"
                placeholder="Year"
                className="AddUsers-input"
                onChange={(e) => setDataEdit({...dataEdit, car_model_year: Number(e.currentTarget.value )})}
                />
                <CFormInput 
                value={dataEdit.nationality}
                type="text"
                label="nationality:"
                placeholder="nationality"
                className="AddUsers-input"
                onChange={(e) => setDataEdit({...dataEdit, nationality: e.currentTarget.value})}
                /> 
            </div>
            <div className="d-flex justify-content-around">
                <CButton onClick={buttonEditUser()}>Edit</CButton> 
                <CButton onClick={() => ( navigate('/table1'))}>Back</CButton> 
            </div>
              </div>
              </div>
              </>
    )
}

export default EditUserManagement

