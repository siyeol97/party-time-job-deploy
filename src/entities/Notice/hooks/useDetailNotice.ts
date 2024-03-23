import { useEffect, useState } from 'react';
import { Notice } from '@/entities/Post/types';
import { getMethod } from '@/shared/api/RequestMethod';

const useDetailNotice = (shopId: string, noticeId: string) => {
  const [detail, setDetail] = useState<Notice>();

  const getData = async () => {
    const data = await getMethod<Notice>(
      `/shops/${shopId}/notices/${noticeId}`,
    );
    setDetail(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return detail;
};
export default useDetailNotice;
