import './Rules.css'
import 'bootstrap/dist/css/bootstrap.css'
import MyNavBar from "./MyNavBar";
export default function () {
    return <div>
        <MyNavBar/>
        <div>
            <h1 style={{ textAlign: 'center' }}>Rules</h1>
        </div>
        <div id="rules">
            <ul class="list-group">

                <li class="list-group-item list-group-item-danger">1. You can go first</li>
                <li class="list-group-item list-group-item-warning">2. After you go, the AI will follow you</li>
                <li class="list-group-item list-group-item-info">3. There are 5 ships hidden in the river
                , you need to try you best to miss that</li>
                <li class="list-group-item list-group-item-light">4. If you hit the ship,it will show cross 
                If you miss, then is fine</li>
                <li class="list-group-item list-group-item-dark">5. First one hit all ships lose</li>
            </ul>
        </div>;
    </div>
}