import CreateRecruitment from '@/features/Create-Recruitment/CreateRecruitment';
import { Item } from '@/app/shop/registration/recruitment/[id]/model/Type';

interface Props {
  noticeData: Item;
  shopId: string;
  noticeId: string | null;
}

const RegistRecruitmentPage = ({ noticeId, noticeData, shopId }: Props) => {
  return (
    <CreateRecruitment
      noticeId={noticeId}
      noticeData={noticeData}
      shopId={shopId}
    />
  );
};

export default RegistRecruitmentPage;
