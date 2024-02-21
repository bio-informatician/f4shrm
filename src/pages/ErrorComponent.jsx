import { Image } from 'antd';
import errorLogo from '../assets/404.jpg';

const ErrorComponent = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-center bg-white">
      <Image
        src={errorLogo}
        preview={false}
        width={700}
        height={600}
        style={{
          borderRadius: '10px',
        }}
      />
    </div>
  );
};

export default ErrorComponent;
