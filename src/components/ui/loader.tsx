import { TailSpin } from 'react-loader-spinner';

export default function Loader({ size = 20 }: { size?: number }) {
  return (
    <TailSpin
      visible={true}
      height={size}
      width={size}
      color="#000000"
      ariaLabel="tail-spin-loading"
      radius="10"
      strokeWidth="2"
    />
  );
}
