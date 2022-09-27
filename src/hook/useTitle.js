import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `محمد ذوالقدر | ${title}`;
  });
};

export default useTitle;
