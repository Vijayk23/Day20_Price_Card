import { useState } from "react";
import { BsCheck,BsX } from "react-icons/bs";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <section className="container ">
      <div className="card">          
            <h5 className="cd-title">Free</h5>
            <h6 className="cd-price">$0<span className="period">/month</span></h6>
            <hr></hr>
            <div>
              <ul className="list-group">
                <li><BsCheck size={29}/>Single User</li>
                <li><BsCheck size={29}/>5GB Storage</li>
                <li><BsCheck size={29}/>Unlimited Public Projects</li>
                <li><BsCheck size={29}/>Community Access</li>
                <li className="text-muted"><BsX size={29}/>Unlimited Private Projects</li>
                <li className="text-muted"><BsX size={29}/>Community Access</li>
                <li className="text-muted"><BsX size={29}/>Dedicated Phone Support</li>
                <li className="text-muted"><BsX size={29}/>Free Subdomain</li>
                <li className="text-muted"><BsX size={29}/>Monthly Status Reports</li>
                </ul>
            </div>
            <div className="button">
            <button type="button" class="btn btn-primary btn-sm">BUTTON</button>
            </div>
          </div>
          <div className="card">
            <h5 className="cd-title">PLUS</h5>
            <h6 className="cd-price">$9<span class="period">/month</span></h6>
            <hr></hr>
            <div>
              <ul className="list-group">
                <li><BsCheck size={29}/><b>5 Users</b></li>
                <li><BsCheck size={29}/>50GB Storage</li>
                <li><BsCheck size={29}/>Unlimited Public Projects</li>
                <li><BsCheck size={29}/>Community Access</li>
                <li><BsCheck size={29}/>Unlimited Private Projects</li>
                <li><BsCheck size={29}/>Community Access</li>
                <li><BsCheck size={29}/>Dedicated Phone Support</li>
                <li><BsCheck size={29}/>Free Subdomain</li>
                <li className="text-muted"><BsX size={29}/>Monthly Status Reports</li>
              </ul>
            </div>
            <div className="button">
            <button type="button" class="btn btn-primary btn-sm">BUTTON</button>
            </div>
          </div>
          <div className="card">
            <h5 className="cd-title">PRO</h5>
            <h6 className="cd-price">$49<span class="period">/month</span></h6>
            <hr></hr>
            <div>
              <ul className="list-group">
                <li><BsCheck size={29}/><b>Unlimited Users</b></li>
                <li><BsCheck size={29}/>150GB Storage</li>
                <li><BsCheck size={29}/>Unlimited Public Projects</li>
                <li><BsCheck size={29}/>Community Access</li>
                <li><BsCheck size={29}/>Unlimited Private Projects</li>
                <li><BsCheck size={29}/>Community Access</li>
                <li><BsCheck size={29}/>Dedicated Phone Support</li>
                <li><BsCheck size={29}/><b>Unlimited</b> Free Subdomain</li>
                <li><BsCheck size={29}/>Monthly Status Reports</li>
                </ul>
            </div>
            <div className="button">
            <button type="button" class="btn btn-primary btn-sm">BUTTON</button>
            </div>          
      </div>
      </section>
    </div>
  );
}

export default App;
