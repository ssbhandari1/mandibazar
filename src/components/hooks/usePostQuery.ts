
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AppDispatch } from '@/redux/store/store';
import { postThunk } from '@/redux/thunk';

interface PostQueryStateType {
	loading: boolean;
	error: string | null;
	data: any;
}

interface ExecuteParamsType {
	endpoint: string;
	payload: Record<string, any>
}

const usePostQuery = ():[PostQueryStateType, (params: ExecuteParamsType) => void] => {
  const dispatch = useDispatch<AppDispatch>();
  const [state, setState] = useState<PostQueryStateType>({
    loading: false,
    error: null,
    data: null,
  });

  const execute = async ({ endpoint, payload }: ExecuteParamsType) => {
    setState({ loading: true, error: null, data: null });

    try {
      const response = await dispatch(postThunk({ endpoint, payload })).unwrap();
      setState({ loading: false, error: null, data: [] });
    } catch (error) {
      setState({ loading: false,
                 error: error instanceof Error ? error.message : 'Something went wrong while attempting to post query',
                 data: null });
    }
  };

  return [state, execute];
};

export default usePostQuery;
