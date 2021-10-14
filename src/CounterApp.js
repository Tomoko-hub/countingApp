import React from 'react';


function CounterApp () {

    return (
        <>
            <div className="row">
                <div className="col">
                    <button type="button" class="btn btn-outline-info">1</button>
                    <button type="button" class="btn btn-outline-info">2</button>
                    <button type="button" class="btn btn-outline-info">3</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" class="btn btn-outline-info">4</button>
                    <button type="button" class="btn btn-outline-info">5</button>
                    <button type="button" class="btn btn-outline-info">6</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" class="btn btn-outline-info">7</button>
                    <button type="button" class="btn btn-outline-info">8</button>
                    <button type="button" class="btn btn-outline-info">9</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" class="btn btn-outline-info">=</button>
                    <button type="button" class="btn btn-outline-info">total</button>
                    <button type="button" class="btn btn-outline-info">total amount</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" class="btn btn-outline-info">+</button>
                    <button type="button" class="btn btn-outline-info">-</button>
                    <button type="button" class="btn btn-outline-info">*</button>
                    <button type="button" class="btn btn-outline-info">%</button>
                </div>
            </div>
        </>
    )
    
}

export default CounterApp;