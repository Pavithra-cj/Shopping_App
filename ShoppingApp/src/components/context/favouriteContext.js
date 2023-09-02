import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
} from 'react';

const favouriteContext = createContext(null);

export const useFavouriteContext = () => {
  const context = useContext(favouriteContext);

  if (context === undefined) {
    throw new Error(
      'FavouriteContext should be within FavouriteContextProvider',
    );
  }

  return context;
};

const FavouriteContextProvider = ({children}) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavouriteHandler = useCallback(
    item => {
      const oldFavourites = [...favourites];

      const newFavourites = oldFavourites.concat(item);

      setFavourites(newFavourites);
    },
    [favourites],
  );

  const value = useMemo(
    () => ({
      favourites,
      addToFavouriteHandler,
    }),
    [favourites, addToFavouriteHandler],
  );

  return (
    <favouriteContext.Provider value={{value}}>
      {children}
    </favouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
