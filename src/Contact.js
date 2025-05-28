import React from 'react'
export default function Contact() {
    return (
        <>
            <div className="text-white text-center"
                style={{
                    backgroundImage: "url('/photo1.jpg')",
                    backgroundSize: 'cover',
                    padding: '100px 0',
                }}>
                <h1>Contact US</h1>
            </div>
            <div className="container py-3"> 
                <div className="row"> 
                    <div className="col-lg-5"> 
                        <h4>Contact US</h4>
                        <p>Please complete and submit the form...</p>
                        <form>
                            <div className="mb-3"> 
                                <label className="form-label">This is about: *</label>
                                <select className="form-select"> 
                                    <option>Advertising Inquiry</option>
                                    <option>Support</option>
                                    <option>General Feedback</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message subject: *</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message: *</label>
                                <textarea className="form-control" rows="4"></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address: *</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone number:</label>
                                <input type="text" className="form-control" />
                            </div>
                            <p className="text-muted small">
                                * Required Field <br />
                                When you press the submit button...
                                <a href="/">privacy policy</a>
                            </p>
                            <button className="btn btn-outline-danger w-100">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="col-lg-5 mt-3 mt-lg-0">
                        <div className="bg-light p-3 mb-4 ">
                            <h5>Connect with us</h5>
                            <ul className="list">
                                <li><a href="/" className="text-decoration-none">Find us on Facebook</a></li>
                                <li><a href="/" className="text-decoration-none">Join the Facebook group</a></li>
                                <li><a href="/" className="text-decoration-none">Tweet us @Company</a></li>
                                <li><a href="/" className="text-decoration-none">Connect on LinkedIn</a></li>
                                <li><a href="/" className="text-decoration-none">Follow on Instagram</a></li>
                            </ul>
                        </div>
                        <div className="bg-light p-3 ">
                            <h5>Licensing and Reuse of Content:</h5>
                            <p className="small mb-1">
                                Contact our official partner, Wright’s Media...
                            </p>
                            <p className="small">
                                Please note that Wright’s Media is the only authorized company...
                            </p>
                            <a href="/" className="text-primary">License with us at Company Media</a>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-3 mt-lg-0">
                        <div className="mb-4">
                            <img src="/photo1.jpg" className="img-fluid " alt="Ad 1" style={{ width: '100%', height: '150px' }} />
                        </div>
                        <div className="mb-4">
                            <img src="/photo1.jpg" className="img-fluid " alt="Ad 2" style={{ width: '100%', height: '150px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
