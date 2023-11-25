import React from 'react'
import { EnkaClient } from 'enka-network-api';

const Player = async ({ params }: any) => {
    // Change the directory to store cache data.
    // Default directory is node_modules/enka-network-api/cache.
    const enka = new EnkaClient({ cacheDirectory: "./cache", showFetchCacheLog: false, defaultLanguage: "en" });
    enka.cachedAssetsManager.cacheDirectorySetup();
    enka.cachedAssetsManager.fetchAllContents();
    
    const renderCharaList = (): any => {
        // try {
        //     return enka.fetchUser(params.id).then ((user: any) => {
        //         return <p>{user.characters[0].characterData.name.get()}</p>
        //     })
        // } catch (error) {
        //     console.log(error);
        // }

        return enka.fetchUser(params.id).then ((user: any) => {
            return <p>{user.characters[0].characterData.name.get()}</p>
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