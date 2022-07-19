import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthGithubContext } from '../contexts/authGithub';

export const PrivateRoutes = () => {
    const { signed } = useContext(AuthGithubContext)

    return signed ? <Outlet /> : <Navigate to="/" />
}