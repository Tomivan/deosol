import "./footer.component.css";

const Footer = () => {
    const year = new Date().getFullYear();
    
    return(
        <div className="footer">
            <p>&#169; {year} deosoleventsanddecor</p>
        </div>
    )
}

export default Footer;