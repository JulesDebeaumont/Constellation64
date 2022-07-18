import * as React from "react";

function HotSpringValley(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Hot Spring Valley" />
                <Image path="HSV_IG2.png" alts="Hot Spring Valley 1" />
                <Stats
                    engine="F3DZEX"
                    polys="1848"
                    rooms="2"
                    region="Hot Spring Valley"
                />
                <Image path="HSV_IG.png" alts="Hot Spring Valley 2" />
                <Image path="HSV_IG3.png" alts="Hot Spring Valley 3" />

            </LayoutArticle>
        </>
    );
}

export default HotSpringValley;