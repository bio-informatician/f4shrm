import { Link } from 'react-router-dom';

const LogOut = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-y-4">
      <h1> LogOut Page</h1>
      <Link to={'/'} style={{ color: 'green' }}>
        <h1>HomePage</h1>
      </Link>
    </div>
  );
};

export default LogOut;
