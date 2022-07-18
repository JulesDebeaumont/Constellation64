import * as React from "react";

function WolfosHideout(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Wolfos Hideout" />
                <Image path="WolfosHideout1.png" alts="Wolfos Hideout 1" />
                <Stats
                    engine="F3DZEX"
                    polys="1194"
                    rooms="1"
                    region="Hot Spring Valley"
                />
                <Image path="WH_IG.png" alts="Wolfos Hideout 2" />

            </LayoutArticle>
        </>
    );
}

export default WolfosHideout;