import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface Props {
  allowed?: string[];
  authenticated?: boolean;
}

const AuthGuardUser: FC<Props> = ({ allowed, authenticated }) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthGuardUser;
