const Header = () => (
    <header >
        <div className="shape"></div>
        <div className="clipShape"></div>
         <div className="logoWrapper">
            <img className="logoArt" src="/images/logo-art.png"></img>
            <h1 className="title">ANIME TRAILERS</h1>
        </div>
        <style jsx>{`


            header {
                display: flex;
                justify-content: flex-end;
                font-family: system-ui;
            }

            .clipShape {
                clip-path: polygon(60% 0, 100% 0, 100% 100%, 0% 100%);
                background-color: #E6E6E6;
                flex: 0 0 5%;
                min-height: 150px;

            }

            .logoWrapper {
                background-color: #E6E6E6;
                flex: 0 0 60%;
                min-height: 150px;
                text-align: right;

            }
            .logoArt{
                height: 100px;
                margin: 15px 15px 0 0;

            }
            

            .title {
                text-align: center;
                font-size: 20px;

            }
        `}
        </style>
    </header>
)

export default Header