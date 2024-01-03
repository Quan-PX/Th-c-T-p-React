import { CButton, CFormInput, CNavLink } from "@coreui/react-pro";
import React, { useEffect, useRef, useState } from "react";
import "../../../assets/css/components.css";
import "../../../shared/model/users.model";
import { IUsers } from "../../../shared/model/users.model";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Management from "./userManager.reducer";
import type { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";

const AddUserManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users: data } = useSelector(
    (state: RootState) => state.userManagement
  );
  // const {setButton} = useSelector((state:RootState) => state.userManagement)
  const { edit } = useParams();
  const location = useLocation();
  const [showButton, setShowButton] = useState<boolean>(true);
  const index = useRef<number>(0);

  const [newObjData, setNewObjData] = useState<IUsers>({
    id: data.length + 1,
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    nationality: "",
    car_model_year: 0,
  });

  const buttonAddUser = () => () => {
    const newData: IUsers[] = [...data];
    newData.unshift(newObjData);
    console.log(newData);

    dispatch(Management.add(newData));
    navigate("/table1");
  };

  const buttonEditUser = () => () => {
    const newData: IUsers[] = [...data];

    // console.log(Number(setIndexEdit), 'setindex');
    console.log(index.current, "Ref");

    newData.splice(index.current, 1, newObjData);
    dispatch(Management.edit(newData));
    navigate("/table1");
  };

  useEffect(() => {
  //   location.pathname.search("edit") === -1
  //     ? setShowButton(true)
  //     : setShowButton(false);
    setShowButton(location.pathname.includes("edit"));
  }, [location]);

  useEffect(() => {
    if (edit) {
      const idEditUser = data.find((ele) => ele.id === Number(edit));
      setNewObjData(idEditUser || newObjData);
      const indexObj = data.indexOf(idEditUser || newObjData);
      index.current = indexObj;
    } else {
      navigate(`/table1/add`);
    }
  }, [edit]);

  return (
    <div className={`d-flex justify-content-center align-items-center`}>
      <div className={`AddUsers p-3 m-2 `}>
        <div>
          <CFormInput
            value={newObjData.first_name}
            type="text"
            label="first name:"
            placeholder="first name"
            className="AddUsers-input"
            onChange={(e) =>
              setNewObjData({
                ...newObjData,
                first_name: e.currentTarget.value,
              })
            }
          />
          <CFormInput
            value={newObjData.last_name}
            type="text"
            label="last name:"
            placeholder="last name"
            className="AddUsers-input"
            onChange={(e) =>
              setNewObjData({ ...newObjData, last_name: e.currentTarget.value })
            }
          />
          <CFormInput
            value={newObjData.email}
            type="text"
            label="Email:"
            placeholder="Email"
            className="AddUsers-input"
            onChange={(e) =>
              setNewObjData({ ...newObjData, email: e.currentTarget.value })
            }
          />
          <CFormInput
            value={newObjData.gender}
            type="text"
            label="Gender:"
            placeholder="Gender"
            className="AddUsers-input"
            onChange={(e) =>
              setNewObjData({ ...newObjData, gender: e.currentTarget.value })
            }
          />
          <CFormInput
            value={newObjData.car_model_year ? newObjData.car_model_year : ""}
            type="number"
            label="Year:"
            placeholder="Year"
            className="AddUsers-input"
            onChange={(e) =>
              setNewObjData({
                ...newObjData,
                car_model_year: Number(e.currentTarget.value),
              })
            }
          />
          <CFormInput
            value={newObjData.nationality}
            type="text"
            label="nationality:"
            placeholder="nationality"
            className="AddUsers-input"
            onChange={(e) =>
              setNewObjData({
                ...newObjData,
                nationality: e.currentTarget.value,
              })
            }
          />
        </div>
        <div className="d-flex justify-content-around">
          {showButton ? 
          (
            <>
              <CButton
                // className={`${setButton ? `d-block` : "d-none"}`}
                onClick={buttonEditUser()}
              >
                Edit
              </CButton>
            </>
          ):
          (
            <>
              <CButton
                // className={`${setButton ? `d-none` : "d-block"}`}
                onClick={buttonAddUser()}
              >
                Add
              </CButton>
            </>
          ) }
          <Link to={`/table1`}>
            <CButton>Back</CButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddUserManagement;
