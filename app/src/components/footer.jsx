import ListGroup from 'react-bootstrap/ListGroup';

const Footer = () => {
    return (
        <div className="wrapper" style={{minHeight: "200px", backgroundColor:"#202224", marginTop:"1rem"}}>
            <div style={{padding: '1rem'}}>
                <h3>Portfolio</h3>
                <div><a href="/">Home</a></div>
                <div> <a href="/item">Portfolios</a></div>
                <div><a href="/add">Add new item</a></div>
                <div> <a href="/account">Account</a></div>
            </div>
        </div>
    )
}
export default Footer;