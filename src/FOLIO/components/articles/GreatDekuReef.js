import * as React from "react";

function GreatDekuReef(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Great Deku Reef" />
                <Image path="GDR1.png" alts="Great Deku Reef 1" />
                <Stats
                    engine="F3DZEX"
                    polys="4110"
                    rooms="3"
                    region="Wetlands"
                />
                <Image path="GDR2.png" alts="Great Deku Reef 2" />
                <Image path="GDR3.png" alts="Great Deku Reef 3" />

            </LayoutArticle>
        </>
    );
}

export default GreatDekuReef;