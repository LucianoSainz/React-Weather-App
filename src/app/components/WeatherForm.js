import React from 'react';

const weatherForm = props => {
    return (
        <div className="card card-body">
            <form action="">
                <div className="form-group">
                    <input type="text" name="city" placeholder="city" className="form-control" autoFocus />
                </div>
                <div className="form-group">
                    <input type="text" name="country" placeholder="country" className="form-control" />
                </div>
                <button className="btn btn-primary btn-block">
                    Get weather
                </button>
            </form>
        </div>
    )
}

export default weatherForm;