import { Grid } from 'react-loader-spinner';
import React, { useState, useEffect } from 'react';
import css from './Loader.module.css';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoading ? (
    <div className={css.loaderWrapper}>
      <Grid
        className={css.loader}
        height="80"
        width="80"
        color="#3f51b5"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  ) : null;
};

export default Loader;
