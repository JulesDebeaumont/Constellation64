import * as React from "react";

function HotSpringTourizm(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Hot Spring Tourizm" />
                <Image path="HST.png" alts="Hot Spring Tourizm 1" />
                <Stats
                    engine="F3DZEX"
                    polys="1976"
                    rooms="2"
                    region="Hot Spring Valley"
                />
                <Image path="HST_IG2.png" alts="Hot Spring Tourizm 2" />
                <Image path="HST_IG3.png" alts="Hot Spring Tourizm 3" />

            </LayoutArticle>
        </>
    );
}

export default HotSpringTourizm;