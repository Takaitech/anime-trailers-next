const Header = () => (
    <header >
        <div className="shape"></div>
         <div className="logoWrapper">
            <img className="logoArt" src="/images/logo-art.png"></img>
            <h1 className="title">ANIME TRAILERS</h1>
        </div>
        <style jsx>{`


            header {
                display: flex;
                justify-content: flex-end;
                width: 100%;
                position:absolute;
                top:0;
                right: 0;
            }

            .clipShape {
                background-color: #E6E6E6;
                flex: 0 0 5%;
                min-height: 150px;

            }

            .logoWrapper {
                background-color: #E6E6E6;
                flex: 0 0 50%;
                min-height: 150px;
                text-align: right;

            }
            .logoArt{
                height: 110px;
                margin: 15px 15px 0 0;

            }
            

            .title {
                font-family: council, sans-serif;
                font-weight: 400;
                font-style: normal;
                text-align: center;
                font-size: 21pt;
                text-align: center;
                width: 80%;
                margin: 0 10px 5px 0px;
                display: inline-block;
            }
        `}
        </style>
    </header>
)

export default Header