import * as React from "react";

function WetlandsOverworld(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Wetlands Overworld" />
                <Image path="WL2.png" alts="Wetlands Overworld 1" />
                <Stats
                    engine="F3DZEX"
                    polys="3452"
                    rooms="4"
                    region="Wetlands"
                />
                <Image path="WL1.png" alts="Wetlands Overworld 2" />
                <Image path="WL4.png" alts="Wetlands Overworld 3" />
                <Image path="WL5.png" alts="Wetlands Overworld 4" />

            </LayoutArticle>
        </>
    );
}

export default WetlandsOverworld;