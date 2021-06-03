window.addEventListener('load',()=>{
    
    const params = (new URL(document.location)).searchParams;
    const patientName = params.get('name');
    const age = params.get('age');
    const gender = params.get('gender');
    const address = params.get('address');
    const reason = params.get('reason');

    document.getElementById('name').innerHTML = patientName;
    document.getElementById('age').innerHTML = age;
    document.getElementById('gender').innerHTML = gender;
    document.getElementById('address').innerHTML = address;
    document.getElementById('reason').innerHTML = reason;
})