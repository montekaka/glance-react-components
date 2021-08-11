import React from "react";
import { useAtom } from "jotai";
import {Volume1, Volume2, VolumeX} from 'react-feather'
import { playerSkinAtom, playerAtom, updatePlayerAtom} from './jotai'
import VolumeBars from './VolumeBars'

const VolumeControls = () => {
  const [playerSkin] = useAtom(playerSkinAtom);
  const [playerState] = useAtom(playerAtom);
  const [, updatePlayerState] = useAtom(updatePlayerAtom)
  
  const handleVolumeChange = (binIndex) => {
    updatePlayerState({volume: binIndex / 10});
  }

  const increaseVolumeClicked = () => {
    if(playerState.volume < 1) {
      updatePlayerState({volume: (playerState.volume * 10 + 1) / 10})
    } else {
      updatePlayerState({volume: 1})
    }
  }

  const decreaseVolumeClicked = () => {
    if(playerState.volume <= 0.1 ) {
      updatePlayerState({volume: 0})
    } else {
      updatePlayerState({volume: (playerState.volume * 10 - 1) / 10});
    }
  }  

  return (
    <div className="volume-controls">      
      <div onClick={decreaseVolumeClicked} style={{
        cursor: 'pointer',
        display: 'flex',
        height: "24px",
        alignContent: 'center',        
      }}>
        {
          playerState.volume > 0 ? <Volume1 style={{color: playerSkin.primaryTextColor}}/> : <VolumeX style={{color: playerSkin.primaryTextColor}}/>
        }
      </div>
      <VolumeBars volume={playerState.volume} volumBinClicked={handleVolumeChange}/>
      <div onClick={increaseVolumeClicked} style={{
        cursor: 'pointer',
        display: 'flex',
        height: "24px",
        alignContent: 'center',        
      }}><Volume2 style={{color: playerSkin.primaryTextColor}}/></div>
      {/* <span className={`volume-control fe fe-volume-${volume > 0 ? "1" : "x"}`} onClick={handleVolumeChange}/>
      <VolumeBars volume={volume} volumBinClicked={handleVolumeChange}/>
      <span className="volume-control fe fe-volume-2" onClick={handleVolumeChange}/> */}
    </div>    
  )
}

export default VolumeControls;