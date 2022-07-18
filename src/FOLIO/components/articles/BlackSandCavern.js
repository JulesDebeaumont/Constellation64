import * as React from "react";

function BlackSandCavern(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Black Sand Cavern" />
                <Image path="bsc1.png" alts="Black Sand Cavern 1" />
                <Stats
                    engine="F3DZEX"
                    polys="477"
                    rooms="1"
                    region="Hot Spring Valley"
                />

            </LayoutArticle>
        </>
    );
}

export default BlackSandCavern;