import { BoxProps, Flex, useDisclosure } from "@chakra-ui/react";
import { ChangeEvent, MouseEvent, useMemo, useState } from "react";
import { Gameweek } from "@open-fpl/data/features/AppData/appDataTypes";
import { hydrateClientData } from "@open-fpl/app/features/PlayerData/playerData";
import { Player } from "@open-fpl/data/features/AppData/playerDataTypes";
import ComparePlayersModal from "@open-fpl/app/features/PlayersExplorer/ComparePlayersModal";
import PlayersExplorerGridOrChart from "@open-fpl/app/features/PlayersExplorer/PlayersExplorerGridOrChart";
import PlayersExplorerTable from "@open-fpl/app/features/PlayersExplorer/PlayersExplorerTable";
import PlayersExplorerToolbar from "@open-fpl/app/features/PlayersExplorer/PlayersExplorerToolbar";
import { DisplayOptions } from "@open-fpl/app/features/PlayersExplorer/playersExplorerTypes";
import { displayOptions } from "@open-fpl/app/features/PlayersExplorer/playersToolbarOptions";
import { useSettings } from "@open-fpl/app/features/Settings/SettingsContext";

const PlayersExplorer = ({
  players: remotePlayers,
  gameweeks,
  ...props
}: BoxProps & {
  players: Player[];
  gameweeks: Gameweek[];
}) => {
  const {
    playersExplorerDisplayOption,
    setPlayersExplorerDisplayOption,
    starredPlayers,
    setStarredPlayers,
  } = useSettings();

  const players = useMemo(
    () =>
      starredPlayers
        ? hydrateClientData(remotePlayers, starredPlayers, [])
        : remotePlayers,
    [remotePlayers, starredPlayers]
  );

  const [displayedPlayers, setDisplayedPlayers] = useState(players);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDisplayChange = (option: DisplayOptions) => {
    setPlayersExplorerDisplayOption(option);
  };

  const display = playersExplorerDisplayOption ?? displayOptions[0].value;

  const handleStarClick = (
    e: MouseEvent<HTMLButtonElement>,
    player: Player
  ) => {
    if (starredPlayers) {
      if (starredPlayers.some((p) => p === player.id)) {
        setStarredPlayers(starredPlayers.filter((p) => p !== player.id));
      } else {
        setStarredPlayers([...starredPlayers, player.id]);
      }
    }
  };

  const handleSelectChange = (
    e: ChangeEvent<HTMLInputElement>,
    player: Player
  ) => {
    if (e.target.checked) {
      if (!selectedPlayers.some((p) => p.id === player.id)) {
        setSelectedPlayers([...selectedPlayers, player]);
      }
    } else {
      setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id));
    }
  };

  const handleResetClick = () => setSelectedPlayers([]);

  return (
    <>
      <ComparePlayersModal
        isOpen={isOpen}
        onClose={onClose}
        players={selectedPlayers}
      />
      <Flex direction="column" overflow="hidden" height="100%" {...props}>
        <PlayersExplorerToolbar
          borderBottomWidth={1}
          players={players}
          onResults={setDisplayedPlayers}
          display={display}
          onDisplayChange={handleDisplayChange}
          showCompareButton={selectedPlayers.length > 0}
          onCompareClick={onOpen}
          onResetClick={handleResetClick}
          disabledSorting={display === "table"}
          sortingTooltipLabel={
            display === "table"
              ? "The data is sorted by the table's header row"
              : undefined
          }
        />
        {display === "table" ? (
          <PlayersExplorerTable
            displayedPlayers={displayedPlayers}
            gameweeks={gameweeks}
            selectedPlayers={selectedPlayers}
            onSelectChange={handleSelectChange}
            onStarClick={handleStarClick}
          />
        ) : (
          <PlayersExplorerGridOrChart
            displayedPlayers={displayedPlayers}
            display={display}
            gameweeks={gameweeks}
            selectedPlayers={selectedPlayers}
            onSelectChange={handleSelectChange}
            onStarClick={handleStarClick}
          />
        )}
      </Flex>
    </>
  );
};

export default PlayersExplorer;
