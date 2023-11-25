import React from 'react'
import { EnkaClient } from 'enka-network-api';
import Link from 'next/link';

const Player = async ({ params }: any) => {
    // Change the directory to store cache data.
    // Default directory is node_modules/enka-network-api/cache.
    const enka = new EnkaClient({ cacheDirectory: "./cache", showFetchCacheLog: false, defaultLanguage: "en" });
    enka.cachedAssetsManager.cacheDirectorySetup();
    enka.cachedAssetsManager.fetchAllContents();
    
    const renderCharaList = (): any => {
        try {
            return enka.fetchUser(params.id).then ((user: any) => {
                return <p>{user.characters[0].characterData.name.get()}</p>
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div>{params.id}</div>
            {/* {enka.fetchUser(params.id).then((user: any) => {
                return <h1 className='text-5xl text-center'>{user.nickname}</h1>
            })} */}
            {renderCharaList()}
            <Link href='/'>Homepage</Link>
        </div>
    )
}

export default Player;