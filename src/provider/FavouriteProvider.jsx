/* eslint-disable no-unused-vars */
import { useLocalStorage } from "../Hooks";
import { FavouriteContext } from "../contex";

const FavouriteProvider = ({ children }) => {
  const [favourites, setfavourites] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    setfavourites([
      ...favourites, 
      {
      latitude: latitude,
      longitude: longitude,
      location: location,
    }
  ]);
  };

  const removeFromFavourites = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setfavourites(restFavourites);
  };

  return (
    <FavouriteContext.Provider value={{addToFavourites, removeFromFavourites, favourites }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
