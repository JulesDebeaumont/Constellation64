import * as React from "react";

function SacredTree(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Sacred Tree" />
                <Image path="ST1.png" alts="Sacred Tree 1" />
                <Stats
                    engine="F3DZEX"
                    polys="2906"
                    rooms="4"
                    region="Wetlands"
                />
                <Image path="ST2.png" alts="Sacred Tree 2" />
                <Image path="ST3.png" alts="Sacred Tree 3" />
                <Image path="ST4.png" alts="Sacred Tree 4" />

            </LayoutArticle>
        </>
    );
}

export default SacredTree;