import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import Genres from "./Components/Genres";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./Components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px",
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <Genres
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack paddingLeft={2} spacing={5} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            onSelectedSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
