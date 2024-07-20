import React from 'react';
import './Login.css';

function Login() {
  return (
  
    <div class="container-fluid Login" >
        <div class="row no-gutters">
            <div class="col-md-6 d-flex justify-content-center align-items-center">
                <img src="https://img.freepik.com/premium-psd/chair-with-wooden-base-word-it_154797-1161.jpg?size=626&ext=jpg&ga=GA1.1.866315162.1714210692&semt=sph" alt="Chair" class="img-fluid" />
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-center">
                <div class="signup-form">
                    <h2>Sign up</h2>
                    <p>Already have an account? <a href="#">Sign in</a></p>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your name" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Username" />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email address" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" />
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="terms" />
                            <label class="form-check-label" for="terms">
                                I agree with <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>
                            </label>
                        </div>
                        <button type="submit" class="btn btn-dark btn-block">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Login;
