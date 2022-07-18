import * as React from "react";

function WetlandsHouses(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Wetlands Houses" />
                <Image path="h2.png" alts="Wetlands Houses 1" />
                <Stats
                    engine="F3DZEX"
                    polys="2532"
                    rooms="2"
                    region="Wetlands"
                />
                <Image path="h1.png" alts="Wetlands Houses 1" />


            </LayoutArticle>
        </>
    );
}

export default WetlandsHouses;