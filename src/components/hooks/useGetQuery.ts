import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { AppDispatch, RootState } from '@/redux/store/store';
import { getThunk } from '@/redux/thunk';

interface GetQueryResultType<T> {
	loading: boolean;
	data: any ;
	error: string | null;
}

const useGetQuery = <T>(endpoint: string, sliceName?: keyof RootState): GetQueryResultType<T> => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector((state: RootState) => state[sliceName]);
console.log('useGetQuery@@@',{data})
  useEffect(() => {
    if (isEmpty(data)) {
      dispatch(getThunk({endpoint}) as any);
    }
  }, []);

  return {
    loading,
    data: data || null,
    error,
  };
};

export default useGetQuery;
