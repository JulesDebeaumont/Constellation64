function LayoutArticle(props) {
    const {textColor, children} = props
    return (
        <>
        <div className="layout-article" style={{ '--layout-color' : textColor }}>{children}</div>
        </>
    );
}

export default LayoutArticle;