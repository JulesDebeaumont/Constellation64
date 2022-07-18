import * as React from "react";

function GoronCave(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Goron Cave" />
                <Image path="GC_IG.png" alts="Goron Cave 1" />
                <Stats
                    engine="F3DZEX"
                    polys="1311"
                    rooms="2"
                    region="Hot Spring Valley"
                />
                <Image path="GC_IG2.png" alts="Goron Cave 2" />

            </LayoutArticle>
        </>
    );
}

export default GoronCave;