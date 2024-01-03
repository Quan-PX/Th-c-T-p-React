import { useRoutes } from "react-router-dom";
import NotFound from "../../shared/ComponentNotFound";
import AddUserManagement from "./AddUserManagement";
// import UserManagerRoutes from "../UserManagement/UserManagement/";
import UserManagement from "./UserManagement";

const routesUserManager = [
  {
    path: `/`,
    element: <UserManagement />,
  },
  {
    path: `add`,
    element: <AddUserManagement />,
  },
  {
    path: "edit/:edit",
    element: <AddUserManagement />,
  },
  {
    path:"*",
    element: <NotFound />
  }
];
const UserManagerRoutes = () => useRoutes(routesUserManager);
export default UserManagerRoutes
