import { lazy } from "react";

export default [
    {
        path: "dashboard",
        component: lazy(() => import("../components/Dashboard")),
        exact: true,
    },
    {
        path: "contact",
        component: lazy(() => import("../components/Site/Screens/Home")),
        exact: true,
    },
    {
        path: "contact/:id",
        component: lazy(() => import("../components/Admin/Contact/Contact")),
        exact: true,
    },
    {
        path: "category",
        component: lazy(() =>
            import("../components/Admin/Category/CategoryList")
        ),
        exact: true,
    },
    {
        path: "category/create",
        component: lazy(() =>
            import("../components/Admin/Category/CategoryCreate")
        ),
        exact: true,
    },
    {
        path: "category/:id",
        component: lazy(() => import("../components/Admin/Category/Category")),
        exact: true,
    },
    {
        path: "category/:id/edit",
        component: lazy(() =>
            import("../components/Admin/Category/CategoryEdit")
        ),
        exact: true,
    },
    {
        path: "permission",
        component: lazy(() =>
            import("../components/Admin/Permission/PermissionUserList")
        ),
        exact: true,
    },
    {
        path: "permission/:id",
        component: lazy(() =>
            import("../components/Admin/Permission/PermissionDetail")
        ),
        exact: true,
    },
];
