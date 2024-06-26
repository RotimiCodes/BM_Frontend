import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './components/Dashboard/Overview';
import ProductPage from './components/DashboardSubPages/ProductPage';
import Shop from './components/Dashboard/Shop';
import AddProductPage from './components/DashboardSubPages/AddProductPage';
import Customers from './components/DashboardSubPages/Customers';
import SingleCustomerPage from './components/DashboardSubPages/SingleCustomerPage';
import Orders from './components/DashboardSubPages/Orders';
import ServicesPage from './components/DashboardSubPages/ServicesPage';
import Payments from './components/Dashboard/Payments';
import Withdrawal from './components/DashboardSubPages/Withdrawal';
import Messages from './components/Dashboard/Messages';


function App() {

  return (
 <Router>
 <div className="App"> 
   <Routes>
   <Route exact path="/" element={<Overview/>}/>  
   <Route exact path="/ProductPage" element={<ProductPage/>}/> 
   <Route exact path="/Shop" element={<Shop/>}/> 
   <Route exact path="/AddProductPage" element={<AddProductPage/>}/> 
   <Route exact path="/Customers" element={<Customers/>}/> 
   <Route exact path="/SingleCustomerPage" element={<SingleCustomerPage/>}/>
   <Route exact path="/Orders" element={<Orders/>}/>
   <Route exact path="/ServicesPage" element={<ServicesPage/>}/>
   <Route exact path="/Payments" element={<Payments/>}/>
   <Route exact path="/Payments/Withdrawal" element={<Withdrawal/>}/>

   <Route exact path="/Messages" element={<Messages />} /> 
   
   

   </Routes>
 </div>
 </Router>
  );
}

export default App;