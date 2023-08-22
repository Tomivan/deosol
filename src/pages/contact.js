import React from "react";
import Nav from "../components/nav/nav.component";
import ContactComponent from "../components/contact/contact.component";
import Footer from "../components/footer/footer.component";

const Contact = () => {
    return(
        <div>
            <Nav />
            <ContactComponent />
            <Footer />
        </div>
    )
}

export default Contact;