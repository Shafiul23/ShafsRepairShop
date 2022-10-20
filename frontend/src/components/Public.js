import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Shaf's Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Foo City, Shaf's Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Shaf's Repairs<br />
                    123 Foo Street<br />
                    Foo City, A1 123<br />
                    <a href="tel:+444444444444">(44) 044 4444 4444</a>
                </address>
                <br />
                <p>Owner: Shafiul Mirza</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public