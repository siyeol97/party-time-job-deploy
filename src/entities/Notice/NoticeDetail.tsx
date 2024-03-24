'use client';

import DetailPost from '../Post/DetailPost';
import { User } from '../Post/types.ts';
import useDetailNotice from './hooks/useDetailNotice.ts';
import useApplication from './hooks/useApplication.ts';
import useNoticeStatus from './hooks/useNoticeStatus.ts';
import NoticeDescription from './NoticeDescription.tsx';

/**
 * @param {Object} props - NoticeDetail 컴포넌트의 props
 * @param {string} props.shopId - router params에서 받은 가게 id
 * @param {string} props.noticeId - router params에서 받은 공고 id
 * @param {User} props.userInfo - router params에서 받은 유저 정보
 * @returns '/detail/[shopId]/[noticeId]' 에 랜더링 될 공고 상세 컴포넌트
 */
const NoticeDetail = ({
  shopId,
  noticeId,
  userInfo,
}: {
  shopId: string;
  noticeId: string;
  userInfo: User | undefined;
}) => {
  const detail = useDetailNotice(shopId, noticeId);
  const { isApplied, applicationId, token } = useApplication(shopId, noticeId);
  const { isOutDatedNotice, isClosed } = useNoticeStatus(shopId, noticeId);

  return (
    <section className='flex w-full items-center justify-center px-[12px] py-[40px] md:px-[32px] md:py-[60px]'>
      {detail && (
        <div className='flex w-full flex-col gap-4 lg:w-[964px]'>
          <div className='flex flex-col gap-2'>
            <span className='flex h-8 w-14 items-center justify-center rounded-lg bg-test-green text-sm font-bold text-black'>
              {detail.item.shop.item.category}
            </span>
            <span className='mb-2 text-4xl font-bold text-white'>
              {detail.item.shop.item.name}
            </span>
          </div>
          <div className='flex flex-col gap-3'>
            <DetailPost
              notice={detail}
              userInfo={userInfo}
              shopId={shopId}
              noticeId={noticeId}
              isApplied={isApplied}
              token={token}
              applicationId={applicationId}
              isOutDatedNotice={isOutDatedNotice}
              isClosed={isClosed}
            />
            <NoticeDescription detail={detail} />
          </div>
        </div>
      )}
    </section>
  );
};

export default NoticeDetail;
