const Card = () => {
    return openingData.map((el) => {
        return (
            <div className="card-container card">
                <div className="positions-container">{el.positions}</div>
                <div className="image-container">
                    <img src={el.logo} alt="" height="375" width="475" />
                </div>
                <div className="card-content">
                    <div clasName="title-container">
                        <b>
                            <h3>{el.title}</h3>
                        </b>
                    </div>
                    <div className="message-container">
                        <h5>{el.message}</h5>
                    </div>
                </div>
                <div className="button-container">
                    <button className="buttons btn">Join Now!</button>
                </div>
            </div>
        );
    });
};