import { Grid, GridCol } from "@mantine/core";

const { Wrapper } = require('enkanetwork.js');


export default async function Profile({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const { genshin } = new Wrapper({ cache: true });

    let playerData = null;
    try {
        playerData = await genshin.getPlayer(id);
        if (!playerData) {
            return <div className="p-4">Player not found.</div>;
        }
        console.log("Player Data:", playerData);
    } catch (error) {
        console.error("Error fetching player data:", error);
        return <div>Error loading player data.</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-blue-600 text-2xl font-bold mb-2">User Profile: {playerData.player.username}</h1>
            <p>World Level: {playerData.player.levels?.world}</p>
            <p>Adventure Rank: {playerData.player.levels?.rank}</p>
            <p>Signature: {playerData.player.signature}</p>
            <h2 className="text-xl font-semibold mt-4 mb-2">Showcase</h2>
            <Grid>
                {playerData.player.showcase?.map((char: any) => (
                    <GridCol span={6} key={char.characterId}>
                        <div className="font-bold">{char.name}</div>
                        <div>Level: {char.level}</div>
                        <div>Element: {char.element}</div>
                        {/* You can add images if you resolve asset URLs */}
                    </GridCol>
                ))}
            </Grid>
        </div>
    );
}