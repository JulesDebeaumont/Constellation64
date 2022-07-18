import * as React from "react";

function TheBadMaw(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="The Bad Maw" />
                <Image path="TBM2.png" alts="The Bad Maw 1" />
                <Stats
                    engine="F3DZEX"
                    polys="1674"
                    rooms="1"
                    region="Wetlands"
                />
                <Image path="TBM3.png" alts="The Bad Maw  2" />

            </LayoutArticle>
        </>
    );
}

export default TheBadMaw;