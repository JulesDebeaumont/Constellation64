import * as React from "react";

function GoronSanctum(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Goron Sanctum" />
                <Image path="GS1.png" alts="Goron Sanctum 1" />
                <Stats
                    engine="F3DZEX"
                    polys="1066"
                    rooms="2"
                    region="Hot Spring Valley"
                />
                <Image path="GS3.png" alts="Goron Sanctum 2" />
                <Image path="GS2.png" alts="Goron Sanctum 3" />

            </LayoutArticle>
        </>
    );
}

export default GoronSanctum;