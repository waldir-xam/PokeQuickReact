import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [adminTitle, setAdminTitle] = useState("Pokemon");
  const [authentication, setAuthentication] = useState({
    isAuthenticated: false,
    isLoading: false,
    isError: false,
    errorMessage: "",
    successMessage: "",
    user: {},
  });
  const [pokemonList, setPokemonList] = useState({
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
    successMessage: "",
    products: [],
  });
  const [pokemonFiltered, setPokemonFiltered] = useState([]);

  useEffect(() => {
    setPokemonFiltered(pokemonList.pokemon);
  }, [pokemonList.pokemon]);

  const handlePokemonList = (key, value) => {
    setPokemonList({
      ...pokemonList,
      [key]: value,
    });
  };

  return (
    <AdminContext.Provider
      value={{
        adminTitle,
        setAdminTitle,
        pokemonList,
        handlePokemonList,
        pokemonFiltered,
        setPokemonFiltered,
        authentication,
        setAuthentication,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
