// import { Children } from "react";
import {  useRoutes } from "react-router-dom";
import Animals from "./components/module/animals/Animals";
import CatsCreatAndUpdate from "./components/module/animals/Cats/CatsCreatAndUpdate";
import CatsOverview from "./components/module/animals/Cats/CatsOverview";
import DogsCreatAndUpdate from "./components/module/animals/Dogs/DogsCreatAndUpdate";
import DogsOverview from "./components/module/animals/Dogs/DogsOverview";
import MouseCreatAndUpdate from "./components/module/animals/Mouse/MouseCreatAndUpdate";
import MouseOverView from "./components/module/animals/Mouse/MouseOverView";
import RouteAnimalRender from "./components/module/animals/routes";
// import { routesCatRender } from "./components/module/animals/Cats/routesCat";
// import { routesDogRender } from "./components/module/animals/Dogs/routesDog";
// import { routesMouseRender } from "./components/module/animals/Mouse/routesMouse";
// import { routesAnimalRender } from "./components/module/animals/routesAnimal";
import Calculator from "./components/module/Calculator/calculator";
import EmojiSearch from "./components/module/EmojiSearch/EmojiSearch";
import Beaches from "./components/module/SnapShot/Beaches";
import Birds from "./components/module/SnapShot/Birds";
import Foods from "./components/module/SnapShot/Foods";
import Moutain from "./components/module/SnapShot/Moutain";
// import { routesSnapShotRender } from "./components/module/SnapShot/routesSnapShot";
import SnapShot from "./components/module/SnapShot/Snapshot";
import UserCallApi from "./components/module/UserCallApi/UserCallApi";
import UserManagerRoutes from "./components/module/UserManagement/routes";
import NotFound from "./components/shared/ComponentNotFound";


const routes = [
        {
        path:'/animal/*',
        element:  <RouteAnimalRender/>,
        },
    
    {
        path: '/table1/*',
        element: <UserManagerRoutes />
    },
    {
        path: '/table2',
        element: <UserCallApi />
    },
    {
        path: '/snapshot',
        element: <SnapShot />,
        children: [
            {
              path: `moutains`,
              element: <Moutain />,
              index: true,
            },
            {
              path: `beaches`,
              element: <Beaches />,
            },
            {
              path: `birds`,
              element: <Birds />,
            },
            {
              path: `foods`,
              element: <Foods />,
            },
          ],
    },
    {
        path: '/emojiSearch',
        element: <EmojiSearch/>,
    },
    {
        path: `/calculator`,
        element: <Calculator />
      },
      {
        path:"*",
        element: <NotFound />
      }
]
const RouteRender = () => useRoutes(routes)
export default RouteRender