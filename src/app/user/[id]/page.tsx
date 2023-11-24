import React from 'react'
import { EnkaClient } from 'enka-network-api';

// Change the directory to store cache data.
// Default directory is node_modules/enka-network-api/cache.
const enka = new EnkaClient({ cacheDirectory: "./cache", showFetchCacheLog: false, defaultLanguage: "en" });

const Player = ({ params }: any) => {
    enka.cachedAssetsManager.cacheDirectorySetup();
    enka.cachedAssetsManager.fetchAllContents();

    const characters = enka.getAllCharacters();

    const renderCharaList = (): any => {
        return characters.map((c: any, i) => {
            return <p key={i}>{c.name.get()}</p>
        })
    }

    return (
        <div>
            <div>{params.id}</div>
            {renderCharaList()}
        </div>
    )
}

export default Player;