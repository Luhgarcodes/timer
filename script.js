const totaltag = document.getElementById("totaltag");

const lostdays= document.getElementById("lostdays");
const losthr= document.getElementById("losthr");
const lostmin= document.getElementById("lostmin");
const lostsec= document.getElementById("lostsec");

const pendingdays= document.getElementById("pendingdays");
const pendinghr= document.getElementById("pendinghr");
const pendingmin= document.getElementById("pendingmin");
const pendingsec= document.getElementById("pendingsec");

const timer = setInterval(counter,1000);
// counter();
function counter(){
    const lastDate  = new Date("September 23,2028 00:00:00");
    const startDate = new Date("October 30,2022 15:00:00");
    const currentDate = new Date();
    total();
    lost();
    pending();   
    current();
    function total(){
        
        totalDays = (lastDate - startDate)/(1000*60*60*24);
        totaltag.textContent = ` Before ${lastDate.getFullYear()} - 30`;        
        // console.log(`10 crs-Plan @: ${totalDays.toFixed(0)}`);
    }
    function lost(){
        days_lost = (currentDate - startDate)/(1000*60*60*24);
        hr_lost = (24*days_lost).toFixed(0);
        min_lost = (24*60*days_lost).toFixed(0);
        sec_lost = (24*60*60*days_lost).toFixed(0);

        lostdays.textContent = `Lost days: ${days_lost.toFixed(0)}`;
        losthr.textContent = `Lost hours: ${hr_lost}`;
        lostmin.textContent = `Lost mins: ${min_lost}`;
        lostsec.textContent  = `Lost secs: ${sec_lost}`;

        // console.log(`Lost days: ${days_lost.toFixed(0)}`);
        // console.log(`Lost hours: ${hr_lost}`);
        // console.log(`Lost mins: ${min_lost}`);
        // console.log(`Lost secs: ${sec_lost}`);


    }
    function pending(){
        days_pending = (lastDate - currentDate)/(1000*60*60*24);
        hr_pending = (24*days_pending).toFixed(0);
        min_pending = (24*60*days_pending).toFixed(0);
        sec_pending = (24*60*60*days_pending).toFixed(0);

        pendingdays.textContent = `Pending days: ${days_pending.toFixed(0)}`;
        pendinghr.textContent = `Pending hours: ${hr_pending}`;
        pendingmin.textContent = `Pending mins: ${min_pending}`;
        pendingsec.textContent = `Pending secs: ${sec_pending}`;

        // console.log(`Pending days: ${days_pending.toFixed(0)}`);
        // console.log(`Pending hours: ${hr_pending}`);
        // console.log(`Pending mins: ${min_pending}`);
        // console.log(`Pending secs: ${sec_pending}`);
    }
    function current(){
        let hr = currentDate.getHours();
        min = currentDate.getMinutes();
        secs = currentDate.getSeconds();
        hr = (hr%12)||hr;
        hr = (((hr.toString()).length)>1)?hr:`0${hr}`;
        min = (((min.toString()).length)>1)?min:`0${min}`;
        secs = (((secs.toString()).length)>1)?secs:`0${secs}`;

        // console.log(hr);
        // console.log(min);
        // console.log(secs);

        currenthr.textContent = hr;
        currentmin.textContent = min;
        currentsec.textContent = secs;
    }
    }
// console.log(currentDate.toUTCString());
