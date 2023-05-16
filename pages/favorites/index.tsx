import { Layout } from "@/components/layouts";
import { FavoritePokemons } from "@/components/pokemon";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const FavoritesPage: NextPage = () => {
  const [favoritesPokemons, setfavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritesPokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
