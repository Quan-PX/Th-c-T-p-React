
import "../../assets/css/components.css";

import RouteRender from "../../routes";

const TheContent = () => {
  // const element = useRoutes([
  //   {
  //     path: `/animal`,
    //   children: [
    //     { element: <Animals />, index: true },
    //     {
    //       path: `cat`,
    //       children: [
    //         { element: <CatsOverview />, index: true },
    //         {
    //           path: `CatsCreatAndUpdate`,
    //           element: <CatsCreatAndUpdate />,
    //         },
    //       ],
    //     },
    //     {
    //       path: `dog`,
    //       children: [{
    //         element: <DogsOverview />, index: true
    //       },
    //        {
    //           path: `DogsCreatAndUpdate`,
    //           element: <DogsCreatAndUpdate />,
    //         },
    //     ]
    //     },
    //     {
    //       path: `mouse`,

    //       children: [
    //         { element: <MouseOverView />, index: true },
    //         {
    //            path: `MouseCreatAndUpdate`,
    //           element: <MouseCreatAndUpdate />,
    //         },
    //       ],
    //     },
    //   ],
    // },
  //   {
  //     path: `/table1`,
  //     children: [{
  //        element:
  //       <UserManagement
  //       />, index: true
  //     },
  //   {
  //     path: `add`,
  //     element: (
  //       <AddUserManagement
  //       />
  //     ),
  //   },
  //   {
  //     // path: "edit",

  //         path:"edit/:edit",
  //         element:
  //       <AddUserManagement
  //       />,

  //   },
  //   ]
  //   },
  //   {
  //     path: `/table2`,
  //     element: <UserCallApi />,
  //   },
  //   {
  //     path: `/snapshot`,
  //     element: <SnapShot />,
  //     children: [
  //       {
  //         path: `moutains`,
  //         element: <Moutain />,
  //          index: true,
  //       },
  //       {
  //         path: `beaches`,
  //         element: <Beaches />
  //       },
  //       {
  //         path: `birds`,
  //         element: <Birds />
  //       },
  //       {
  //         path: `foods`,
  //         element: <Foods />
  //       }
  //     ]
  //   },
  //   {
  //     path: `emojiSearch`,
  //     element: <EmojiSearch />
  //   },
  //   {
  //     path: `calculator`,
  //     element: <Calculator />
  //   },
  //   {
  //     path:"*",
  //     element: <NotFound />
  //   }
  // ]);

  return <RouteRender />;
  
};

export default TheContent;
