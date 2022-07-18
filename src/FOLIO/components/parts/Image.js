function Image(props) {
    const { path, alts } = props
    return (
        <>
            <div className="article-image">
                <img src={`../imgFolio/${path}`} alt={alts} />
            </div>
        </>
    );
}

export default Image;