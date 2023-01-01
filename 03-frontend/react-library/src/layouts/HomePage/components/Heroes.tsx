import React from "react";

const Heroes = () => {
    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-sm-6 col-md-6 ">
                        <div className="col-image-left"></div>
                    </div>
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="m1-2">
                            <h1>What have you been reading ?</h1>
                            <p className="lead">
                                The library team would like to know what you are reading .
                            </p>
                            <a href="#" className="btn main-color btn-lg text-white">Sign up</a>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>Our collection is always changing !</h1>
                            <p className="lead">
                                Try to check in daily as our collection is always changing !
                            </p>
                            <a href="#" className="btn main-color btn-lg text-white">Sign up</a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-right"></div>
                    </div>
                </div>
            </div>

            {/* Mobile Heroes */}
            <div className="d-lg-none">
                <div className="container">
                    <div className="mt-2">
                        <div className="col-image-left"></div>
                        <div className="mt-2">
                            <h1>What have you been reading ?</h1>
                            <p className="lead">
                                The library team would like to know what you are reading .
                            </p>
                            <a href="#" className="btn main-color btn-lg text-white">Sign up</a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="col-image-right"></div>
                        <div className="mt-2">
                            <h1>Our collection is always changing !</h1>
                            <p className="lead">
                                Try to check in daily as our collection is always changing !
                            </p>
                            <a href="#" className="btn main-color btn-lg text-white">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Heroes;