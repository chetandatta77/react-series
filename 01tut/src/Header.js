const Header = ({title}) => {
    const headerStyle = {
        backgroundColor: 'royal',
        color: '#fff'
    }
    return (
        <header style={headerStyle}>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Default title"
}

export default Header;