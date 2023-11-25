import Furina from '@/components/furina'
import SearchBtn from '@/components/searchBtn'
import Link from 'next/link'

import { EnkaClient } from 'enka-network-api';

// Change the directory to store cache data.
// Default directory is node_modules/enka-network-api/cache.

// vvv Uncommenting these lines produces a JSON error, since the fetch will continue running while users move to other pages. vvv
// const enka = new EnkaClient({ cacheDirectory: "./cache", showFetchCacheLog: false, defaultLanguage: "en" });
// enka.cachedAssetsManager.cacheDirectorySetup();
// enka.cachedAssetsManager.fetchAllContents();

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
                <h1 className="text-5xl text-center">Damage Calculator</h1>
            </div>

            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <Furina />
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <Link 
                    href='/user/600169846'
                >
                    User: Speedy
                </Link>
                <SearchBtn />
            </div>
        </main>
    )
}
