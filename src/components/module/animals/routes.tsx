import React from "react";
import { useRoutes } from "react-router-dom";
import Animals from "./Animals";
import CatsCreatAndUpdate from "./Cats/CatsCreatAndUpdate";
import CatsOverview from "./Cats/CatsOverview";
import DogsCreatAndUpdate from "./Dogs/DogsCreatAndUpdate";
import DogsOverview from "./Dogs/DogsOverview";
import MouseCreatAndUpdate from "./Mouse/MouseCreatAndUpdate";
import MouseOverView from "./Mouse/MouseOverView";


const routesAnimal = [
    {
        path: '/',
        element: <Animals />,
    },
    {
        path: `cat`,
        children: [
          { element: <CatsOverview />, index: true },
          {
            path: `CatsCreatAndUpdate`,
            element: <CatsCreatAndUpdate />,
          },
        ],
      },
      {
        path: `dog`,
        children: [{
          element: <DogsOverview />, index: true
        },
         {
            path: `DogsCreatAndUpdate`,
            element: <DogsCreatAndUpdate />,
          },
      ]
      },
      {
        path: `mouse`,

        children: [
          { element: <MouseOverView />, index: true },
          {
             path: `MouseCreatAndUpdate`,
            element: <MouseCreatAndUpdate />,
          },
        ],
      },
]

const RouteAnimalRender = () => useRoutes(routesAnimal)
export default RouteAnimalRender

