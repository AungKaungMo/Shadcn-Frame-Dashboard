import ProtectedRoute from "@/components/custom/ProtectedRoute";
import MainLayout from "@/layout/mainLayout";
import { AllProduct, Dashboard, NewProduct, Order, RoleCreate, RoleEdit, RoleManagement, UserManagement, Location } from "@/page";
import LocationCreate from "@/page/Admin/Location/create";
import LocationEdit from "@/page/Admin/Location/edit";

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '',
            element: <Dashboard />
        },
        {
            path: '/products',
            children: [
                {
                    path: 'all',
                    element: <ProtectedRoute element={<AllProduct />} allowedRoles={['developer']} />
                },
                {
                    path: 'new',
                    element: <ProtectedRoute element={<NewProduct />} allowedRoles={['developer']} />
                }
            ]
        },
        {
            path: '/orders',
            element: <ProtectedRoute element={<Order />} allowedRoles={['developer']} /> 
        },

        //Location
        {
            path: '/location',
            element: <ProtectedRoute element={<Location />} allowedRoles={['developer']} />
        },  
        {
            path: '/location/new',
            element: <ProtectedRoute element={<LocationCreate />} allowedRoles={['developer']} />
        },  
        {
            path: '/location/:id',
            element: <ProtectedRoute element={<LocationEdit />} allowedRoles={['developer']} />
        },  
        {
            path: '/user-management',
            children: [
                {
                    path: 'role',
                    element: <ProtectedRoute element={<RoleManagement />} allowedRoles={['developer']} /> 
                },
                {
                    path: 'role/create',
                    element: <ProtectedRoute element={<RoleCreate />} allowedRoles={['developer']} /> 
                },
                {
                    path: 'role/edit/:id',
                    element: <ProtectedRoute element={<RoleEdit />} allowedRoles={['developer']} /> 
                },
                {
                    path: 'user',
                    element: <ProtectedRoute element={<UserManagement />} allowedRoles={['developer']} /> 
                }
            ]
        }
    ]
}

export default MainRoutes;