import * as React from "react";

function DIC(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Dark Ice Cathedrale" />
                <Image path="DIC2.png" alts="Dark Ice Cathedrale 1" />
                <Stats
                    engine="F3DZEX"
                    polys="7213"
                    rooms="16"
                    region="The Frozen Shore"
                />
                <Image path="DIC3.png" alts="Dark Ice Cathedrale 1" />
                <Image path="DIC4.png" alts="Dark Ice Cathedrale 1" />
                <Image path="DIC5.png" alts="Dark Ice Cathedrale 1" />
                <Image path="DIC6.png" alts="Dark Ice Cathedrale 1" />

            </LayoutArticle>
        </>
    );
}

export default DIC;