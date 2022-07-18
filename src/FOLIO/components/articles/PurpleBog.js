import * as React from "react";

function PurpleBog(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Purple Bog" />
                <Image path="PB1.png" alts="Purple Bog 1" />
                <Stats
                    engine="F3DZEX"
                    polys="1398"
                    rooms="2"
                    region="Wetlands"
                />
                <Image path="PB2.png" alts="Purple Bog 2" />

            </LayoutArticle>
        </>
    );
}

export default PurpleBog;