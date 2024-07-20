import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';  

// تأكد من تحديد مسار الصورة الصحيح
import imagehome from '../images/istockphoto-1293366109-612x612.jpg';

function Home() {
    return (
        <>
            <div className="container-fluid home-section">
                <div className="container home-content">
                    <div className="row">
                        <div className="col-md-6 home-image">
                            <img src={imagehome} alt="Home Image" className="img-fluid" />
                        </div>
                        <div className="col-md-6 home-text">
                            <h1>Welcome to Our Website</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada lacus non mi fringilla, ut congue arcu mollis. Etiam auctor vitae elit eu bibendum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
