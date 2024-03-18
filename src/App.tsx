import { Box, Flex, Grid, GridItem,  Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";



export interface GameQuery {
  genre: Genre | null,
  platform : Platform | null, 
  sortOrder : string;
  searchText : string;
}

 
function App() {
 
  const [gameQuery , setGameQuery] = useState<GameQuery>({}as GameQuery)
 
 
  return (
    <Grid
  
      templateAreas={ {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
       
      }}
      templateColumns={{
        base:`1fr`,
        lg: '200px 1fr'     
      }}
      >   
    
      <GridItem area="nav"  >
          <NavBar onSearch = {(searchText)=> setGameQuery({...gameQuery,searchText})} />
      </GridItem>  
 
      <Show above="lg">  <GridItem area="aside" paddingX={5}  >
          <GenereList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery( {...gameQuery,genre})}/>
        </GridItem>  </Show>
     
     
      <GridItem area="main"  >
     
   

      <Box padding={2}>
      <GameHeading  gameQuery={gameQuery}/>
     <Flex    marginBottom={1}  >
        <Box marginRight={5}>
            <PlatformSelector  selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery, platform})}/>
        </Box>
        <SortSelector  sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery,sortOrder})}/>
      </Flex>
      </Box>
         <GameGrid gameQuery={gameQuery}  />
        </GridItem>  
    </Grid>
  );
}

export default App;

 

//  Deploying to vercel


//  vit > deplyiing on a static site

// so we want to create repo on github whenever we push code there ,
// vercel grabs and push it to the production


//  use this lines from github to push existing repos to new project
// git remote add origin https://github.com/Nikhilnick9922/game-hub.git
// git branch -M main
// git push -u origin main


//  push the files to new repo name game-hub

// we need to instal vercel cli for deploying our application

// sudo npm i -g vercel 

//  run vercel to deploy to vercel 

// and login with vercel and follow default settings


//  to connect with github , login with github  -> connect with git repos - select and connect