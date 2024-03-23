import Text from '@/shared/ui/Text';

const EmployerCardList = () => {
  return (
    <div className='mt-10 flex w-[900px] flex-col items-center justify-center gap-10'>
      <div className='flex flex-col items-center gap-10 lg:flex lg:flex-row'>
        <div className='flex h-80 w-[300px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 bg-test-black transition-transform duration-300 hover:-translate-y-2 hover:shadow-md hover:shadow-test-green lg:w-[450px]'>
          <div className='flex flex-col items-center gap-2 text-sm font-light lg:text-xl'>
            <Text as='span'>급하게 일손이 필요할 때</Text>
            <Text as='span'>
              <Text as='span' className='font-bold text-test-green'>
                PARTY TIME JOB
              </Text>
              이 해결사가 됩니다!
            </Text>
          </div>
        </div>
        <div className='flex h-80 w-[300px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 bg-test-black transition-transform duration-300 hover:-translate-y-2 hover:shadow-md hover:shadow-test-green lg:w-[450px]'>
          <div className='flex flex-col items-center gap-2 text-sm lg:text-xl'>
            <Text as='span'>실시간으로 알바생과 연결되어</Text>
            <Text as='span'>
              <Text as='span' className='font-bold text-test-green'>
                급한 일손
              </Text>
              을 즉시 해결하세요
            </Text>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-10 lg:flex lg:flex-row'>
        <div className='flex h-80 w-[300px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 bg-test-black transition-transform duration-300 hover:-translate-y-2 hover:shadow-md hover:shadow-test-green lg:w-[450px]'>
          <div className='flex flex-col items-center gap-2 text-sm lg:text-xl'>
            <Text as='span'>시급을 조절하여 최적의 알바생을 찾아보세요</Text>
            <Text as='span'>
              <Text as='span' className='font-bold text-test-green'>
                경쟁업체
              </Text>
              보다 한 발 앞서 나갈 수 있습니다.
            </Text>
          </div>
        </div>
        <div className='flex h-80 w-[300px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 bg-test-black transition-transform duration-300 hover:-translate-y-2 hover:shadow-md hover:shadow-test-green lg:w-[450px]'>
          <div className='flex flex-col items-center gap-2 text-sm lg:text-xl'>
            <Text as='span'>급할수록 든든한 파트너</Text>
            <Text as='span'>
              <Text as='span' className='font-bold text-test-green'>
                PARTY TIME JOB
              </Text>
              이 함께합니다.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerCardList;
