import * as React from "react";

function KeetasEnd(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Keeta's End" />
                <Image path="KeetasEnd3.png" alts="Keeta's End 2" />
                <Stats
                    engine="Eevee"
                    polys="3452"
                    rooms="3"
                    region="Wetlands"
                />
                <Image path="KeetasEnd2.png" alts="Keeta's End 2" />

            </LayoutArticle>
        </>
    );
}

export default KeetasEnd;