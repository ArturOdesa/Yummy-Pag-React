import './Header.css';  

function Header() {
    return (
        <header>
            <div className="header-container">
                <nav className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-list-item"><a href="#hint" class="nav-list-anchor">Порада від Ямі</a></li>
                        <li className="nav-list-item"><a href="#sweeties" class="nav-list-anchor">Мої улюбленні солодощі</a></li>
                    </ul>
                </nav>
            <section className="header-description">
            <div className="container">
                <h1 className="description-title"><span className="orange-text">Yummy</span> Pug</h1>
                <p className="description-text">Всім привіт, я Ямі і я мопс, який дуже сильно полюбляє солодощі. Сьогодні я розкажу вам, чому саме солодощі і чому вони так важливі в нашому житті. <br />
                Доречі, моє імʼя з англійської мови перекладається як “Смачний”.</p>
                <a href="#sweeties" className="description-link">Мої улюбленні солодощі</a>
            </div>
        </section>
      </div>
    </header>
    );
}

export default Header;