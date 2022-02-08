import "./App.css";
import Preloader from './components/preloader';
import HomeStatus from './components/HomeStatus';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import TodoList from './components/TodoList';
import LogList from "./components/LogList"
import AddServiceUser from './components/AddServiceUser';
import UserList from './components/UserList';
import AddDocument from './components/AddDocument';
import DocumentList from './components/DocumentList';
import Login from './components/Login';
import UserChart from './components/UserChart';
import UserDetails from './components/UserDetails';
import Billings from './components/Billings';
import Support from './components/Support';
import KeyContacts from './components/KeyContacts';
import Messages from './components/Messages';
import Reception from './components/Reception';
import MonthReview from './components/MonthReview';
import Calendar from './components/Calendar';
import DailyLog from './components/DailyLog';
import { Medical } from './components/Medical';
import Transfer from './components/Transfer';
import Diary from './components/Diary';
import Assessments from './components/Assessments';
import Wounds from './components/Wounds';
import Infection from './components/Infection';
import Careplan from './components/Careplan';
import CreateCarePlan from './components/CreateCarePlan';
import CreateRisk from './components/CreateRisk';
import Risk from './components/Risk';
import AccidentIncident from './components/AccidentIncident';
import Vital from './components/Vital';
import Contacts from './components/Contacts';
import Summary from './components/Summary';
import RequestNewPassword from './components/RequestNewPassword';
import Addtodo from './components/Addtodo';
import AddLogs from './components/AddLogs';
import AddReceptionist from './components/AddReceptionist';


function App() {
  return (
    <>
    <Router>

        {/* <Preloader /> */}

        <Routes>
          
            {/* <Route exact path={process.env.PUBLIC_URL + '/'} element={<HomeStatus/>}/> */}
            <Route exact path='/' element={<HomeStatus/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/requestnewpassword" element={<RequestNewPassword/>}/>
            <Route exact path="/todolist" element={<TodoList/>}/>
            <Route exact path="/addtodo" element={<Addtodo/>}/>
            <Route exact path="/logs" element={<LogList/>}/>
            <Route exact path="/addlogs" element={<AddLogs/>}/>
            <Route exact path="/dailylog" element={<DailyLog/>}/>
            <Route exact path="/adduser" element={<AddServiceUser/>}/>
            <Route exact path="/userlist" element={<UserList/>}/>
            <Route exact path="/userchart" element={<UserChart/>}/>
            <Route exact path="/userdetails" element={<UserDetails/>}/>
            <Route exact path="/adddocument" element={<AddDocument/>}/>
            <Route exact path="/documentlist" element={<DocumentList/>}/>
            <Route exact path="/billings" element={<Billings/>}/>
            <Route exact path="/support" element={<Support/>}/>
            <Route exact path="/keycontacts" element={<KeyContacts/>}/>
            <Route exact path="/messages" element={<Messages/>}/>
            <Route exact path="/reception" element={<Reception/>}/>
            <Route exact path="/addreception" element={<AddReceptionist/>}/>
            <Route exact path="/monthlyreview" element={<MonthReview/>}/>
            <Route exact path="/calendar" element={<Calendar/>}/>
            <Route exact path="/medical" element={<Medical/>}/>
            <Route exact path="/transfer" element={<Transfer/>}/>
            <Route exact path="/diary" element={<Diary />}/>
            <Route exact path="/assessment" element={<Assessments />}/>
            <Route exact path="/wounds" element={<Wounds />}/>
            <Route exact path="/infection" element={<Infection />}/>
            <Route exact path="/careplan" element={<Careplan />}/>
            <Route exact path="/createcareplan" element={<CreateCarePlan />}/>
            <Route exact path="/risk" element={<Risk />}/>
            <Route exact path="/createrisk" element={<CreateRisk />}/>
            <Route exact path="/accidentincident" element={<AccidentIncident />}/>
            <Route exact path="/vital" element={<Vital />}/>
            <Route exact path="/contacts" element={<Contacts />}/>
            <Route exact path="/summary" element={<Summary />}/>

        </Routes>
    </Router>
    </>
  );
}
export default App;