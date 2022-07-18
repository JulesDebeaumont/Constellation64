import * as React from "react";

function EclipseTemple(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Eclipse Temple" />
                <Image path="EclipseTemple2.png" alts="Eclipse Temple 1" />
                <Stats
                    engine="F3DZEX"
                    polys="4320"
                    rooms="2"
                    region="Wetlands"
                />

            </LayoutArticle>
        </>
    );
}

export default EclipseTemple;