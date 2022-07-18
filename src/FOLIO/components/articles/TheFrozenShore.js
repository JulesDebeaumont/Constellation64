import * as React from "react";

function TheFrozenShore(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="The Frozen Shore" />
                <Image path="TFS_2.png" alts="The Frozen Shore 1" />
                <Stats
                    engine="F3DZEX"
                    polys="1955"
                    rooms="2"
                    region="Hot Spring Valley"
                />
                <Image path="TFS_3.png" alts="The Frozen Shore 2" />
                <Image path="TFS_4.png" alts="The Frozen Shore 3" />
                <Image path="TFS_5.png" alts="The Frozen Shore 4" />

            </LayoutArticle>
        </>
    );
}

export default TheFrozenShore;