import Homepage from "../Component/Page/Homepage";
import Layouts from "../Component/Template/Layouts";

export const routesConfig = [
    {
        element: <Layouts />,
        children: [
            {
                path: "/",
                element: <Homepage />
            }
        ]
    }
]