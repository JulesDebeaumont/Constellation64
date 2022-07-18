import * as React from "react";

function HotSpringHole(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Hot Spring Hole" />
                <Image path="HSH_IG2.png" alts="Hot Spring Hole 1" />
                <Stats
                    engine="F3DZEX"
                    polys="1065"
                    rooms="1"
                    region="Hot Spring Valley"
                />
                <Image path="HSH_IG.png" alts="Hot Spring Hole 2" />

            </LayoutArticle>
        </>
    );
}

export default HotSpringHole;