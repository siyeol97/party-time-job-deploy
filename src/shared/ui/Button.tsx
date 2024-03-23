/**
 *
 * @param {string} text 버튼에 들어갈 텍스트
 * @param {'button' | 'submit'} type 버튼 타입(기본값은 button)
 * @param {boolean} confirm 확인을 위한 버튼
 * @param {'large' | 'medium' | 'mediumSmall' | 'small'} size 버튼 크기
 * @param {'active' | 'inactive'} status 버튼 활성화 상태 표시
 * @param {function} onClick 버튼 클릭 이벤트 핸들러
 * @param {function} onSubmit 버튼 제출 이벤트 핸들러
 * @returns 공통 버튼 컴포넌트
 */

export interface ButtonInterface {
  text: string;
  type?: 'button' | 'submit';
  confirm?: boolean;
  size: 'large' | 'medium' | 'mediumSmall' | 'small';
  status: 'active' | 'inactive';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  text,
  type = 'button',
  confirm,
  size,
  status,
  onClick,
  onSubmit,
}: ButtonInterface) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      className={`${size} ${status} ${confirm ? 'confirm' : ''} rounded-md border shadow-sm shadow-test-green transition-all duration-300 hover:bg-test-green hover:font-bold hover:text-black`}
    >
      {text}
    </button>
  );
};

export default Button;
