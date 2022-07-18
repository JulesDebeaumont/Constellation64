import * as React from "react";

function TheUndergroundForest(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="The Underground Forest" />
                <Image path="TUF6.png" alts="The Underground Forest 1" />
                <Stats
                    engine="F3DZEX"
                    polys="4513"
                    rooms="8"
                    region="Wetlands"
                />
                <Image path="TUF7.png" alts="The Underground Forest 2" />
                <Image path="TUF8.png" alts="The Underground Forest 2" />
                <Image path="TUF9.png" alts="The Underground Forest 3" />
                <Image path="TUF10.png" alts="The Underground Forest 4" />

            </LayoutArticle>
        </>
    );
}

export default TheUndergroundForest;