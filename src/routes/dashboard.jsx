// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";

// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import ManagePromo from "views/ManagePromo/ManagePromo.jsx";
import ManageUser from "views/ManageUser/ManageUser.jsx";
import ManagePromoUser from "views/ManagePromoUser/ManagePromoUser.jsx";
//import ManageUserContainer from "../containers/ManageUserContainer";
import ManageSupplier from "views/ManageSupplier/ManageSupplier.jsx";
//import HistoryTransaction from "views/HistoryTransaction/HistoryTransaction.jsx";
import HistoryTransactionList from "../containers/HistoryTransactionListContainer.jsx";
const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/manage-user",
    sidebarName: "Manage User",
    navbarName: "Manage User",
    icon: Person,
    component: ManageUser
  },
  {
    path: "/manage-promo",
    sidebarName: "Manage Promo",
    navbarName: "Manage Promo",
    icon: "content_paste",
    component: ManagePromo
  },
  {
    path: "/manage-promo-user",
    sidebarName: "Manage Promo User",
    navbarName: "Manage Promo User",
    icon: "content_paste",
    component: ManagePromoUser
  },
  {
    path: "/manage-supplier",
    sidebarName: "Manage Supplier",
    navbarName: "Manage Supplier",
    icon: "content_paste",
    component: ManageSupplier
  },
  {
    path: "/history-transaction",
    sidebarName: "History Transaction",
    navbarName: "History Transaction",
    icon: LibraryBooks,
    component: HistoryTransactionList
  },

  { redirect: true, path: "/", to: "/manage-user", navbarName: "Redirect" }
];

export default dashboardRoutes;
