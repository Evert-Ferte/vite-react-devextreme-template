import Root from "../pages/root/root";
import Sample1Page from "../pages/sample1/sample-1";
import Sample2Page from "../pages/sample2/sample-2";

export const routes = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/sample-1",
                element: <Sample1Page />
            },
            {
                path: "/sample-2",
                element: <Sample2Page />
            }
        ]
    }
];