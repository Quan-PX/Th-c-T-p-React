import { CButton, CContainer, CNavLink, CSmartTable } from "@coreui/react-pro";
import { useEffect, useRef, useState } from "react";
import { IUsers } from "../../../shared/model/users.model";
import SearchComponent from "../../shared/SearchComponent/SearchComponent";
import "../../../assets/css/components.css";
import { Link } from "react-router-dom";
// import EmojiSearch from "../EmojiSearch/EmojiSearch";
// import MOCKDATA from "../../../assets/json/MOCK_DATA.json"
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import Management from "./userManager.reducer";
// import MOCKDATA from '../../../assets/json/MOCK_DATA.json'

interface UserManagement {
  users: IUsers[];
  setUsers: (keys: IUsers[]) => void;
  setAddUser: (keys: IUsers | null) => void;
  setValue: (keys: number) => void;
  showTableAdd: boolean;
}

const UserManagement = () => {
  // const [userSearch, setUserSearch] = useState<string>("");

  const { users } = useSelector((state: RootState) => state.userManagement);
  const dispatch = useDispatch();
  // const editRef = useRef();
  const column = [
    {
      key: "id",
      _style: { width: "10%" },
      _props: { color: "primary", className: "fw-semibold" },
    },
    {
      key: "first_name",
      _style: { width: "15%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "last_name",
      _style: { width: "15%" },
      _props: { color: "primary", className: "fw-semibold" },
    },

    {
      key: "email",
      _style: { width: "15%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "gender",
      _style: { width: "15%" },
      _props: { color: "primary", className: "fw-semibold" },
    },
    {
      label: "Year",
      key: "car_model_year",
      _style: { width: "15%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "nationality",
      _style: { width: "15%" },
      _props: { color: "primary", className: "fw-semibold" },
    },
    {
      key: "buttonEdit",
      label: "Edit",
      filter: false,
      sorter: false,
      _style: { width: "15%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "Delete",
      label: "Delete",
      filter: false,
      sorter: false,
      _style: { width: "5%" },
      _props: { color: "primary", className: "fw-semibold" },
    },
  ];

  const findUser = (keyword: string) => {
    if (keyword) {
      const newArray = users.filter(
        (ele) =>
          ele.last_name.toLowerCase().search(keyword.trim().toLowerCase()) !==
          -1
      );
      dispatch(Management.found(newArray));
    } else {
      dispatch(Management.reset());
    }
  };

  const btnDelete = (index: number) => () =>{
      const newUsersDeleted = [...users]
      newUsersDeleted.splice(index, 1)
      console.log(newUsersDeleted);
      dispatch(Management.delete(newUsersDeleted))
  }

  return (
    <div>
      <div className={`d-flex justify-content-center }`}>
        <SearchComponent setUserSearch={findUser} />
        <Link to="add" className="d-flex align-items-center w-10">
          <CButton
            className="h-70"
          >
            Add
          </CButton>
        </Link>
      </div>

      <CContainer
        className={`list-users d-flex align-items-center flex-column justify-content-center`}
      >
        <CSmartTable
          key={`${JSON.stringify(users)}`}
          items={users}
          columns={column}
          columnFilter
          columnSorter
          pagination
          itemsPerPage={15}
          scopedColumns={{
            buttonEdit: (items: IUsers, value: number) => {
              return (
                <td className="py-2" key={value}>
                  <Link to={`edit/${items.id}`}>
                    <CButton
                      color="primary" shape="rounded-pill"
                      variant="outline"
                      size="sm"
                    >
                      Edit
                    </CButton>
                  </Link>
                </td>
              );
            },
            Delete: (items: IUsers, index: number) =>{
              return (
                <td className="py-2" key={index}>
                  <CButton
                    color="dark"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={btnDelete(index)}
                  >
                    Delete
                  </CButton>
              </td>
              )
            }
          }}
          selectable
          tableHeadProps={{
            color: "danger",
          }}
          tableProps={{
            striped: true,
            hover: true,
          }}
        />
      </CContainer>
    </div>
  );
};
export default UserManagement;
