document.getElementById('prompt-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const profile = document.getElementById('profile').value;
    const sex = document.getElementById('sex').value;
    const age = document.getElementById('age').value;
    const diag = document.getElementById('diag').value;
    const proc = document.getElementById('proc').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const asa = document.getElementById('asa').value;
    const bmi = document.getElementById('bmi').value;
    const hr = document.getElementById('hr').value;
    const rr = document.getElementById('rr').value;
    const sbp = document.getElementById('sbp').value;
    const dbp = document.getElementById('dbp').value;
    const mallampatti = document.getElementById('mallampatti').value;
    const hyomental = document.getElementById('hyomental').value;
    const thyromental = document.getElementById('thyromental').value;
    const thd = document.getElementById('thd').value;
    const sternomental = document.getElementById('sternomental').value;
    const mouth = document.getElementById('mouth').value;
    const flexion = document.getElementById('flexion').value;
    const extension = document.getElementById('extension').value;
    const jaw = document.getElementById('jaw').value;
    const mandible = document.getElementById('mandible').value;
    const micro = document.getElementById('micro').value;
    const buck = document.getElementById('buck').value;
    const loose = document.getElementById('loose').value;
    const ulbt = document.getElementById('ulbt').value;
    const obstetric = document.getElementById('obstetric').value;
    const fasting = document.getElementById('fasting').value;
    const diffAir = document.getElementById('diffAir').value;
    const diffInt = document.getElementById('diffInt').value;
    const cervical = document.getElementById('cervical').value;
    const facio = document.getElementById('facio').value;
    const irrad = document.getElementById('irrad').value;
    const obstruction = document.getElementById('obstruction').value;
    const beard = document.getElementById('beard').value;
    const apnea = document.getElementById('apnea').value;
    

    let generatedPrompt = '';

    if (profile) {
        generatedPrompt += `I am an ${profile}. The following are the details of my patient:`;
    }
    if (age) {
        generatedPrompt += `Age: ${age}. `;
    }
    if (sex) {
        generatedPrompt += `Sex: ${sex}. `;
    }
    if (diag) {
        generatedPrompt += `Currently diagnosed with ${diag}. `;
    }
    if (proc) {
        generatedPrompt += `Undergoing ${proc}. `;
    }
    if (height) {
        generatedPrompt += `Height: ${height} cm. `;
    }
    if (weight) {
        generatedPrompt += `Weight: ${weight} lb. `;
    }
    if (bmi) {
        generatedPrompt += `BMI: ${bmi}. `;
    }
    if (hr) {
        generatedPrompt += `Heart Rate: ${hr} bpm. `;
    }
    if (rr) {
        generatedPrompt += `Respiratory Rate: ${rr} per minute. `;
    }
    if (sbp) {
        generatedPrompt += `Systolic Blood Pressure: ${sbp} mmHg. `;
    }
    if (dbp) {
        generatedPrompt += `Diastolic Blood Pressure: ${dbp} mmHg. `;
    }
    if (asa != 'NA') {
        generatedPrompt += `ASA Classification: ${asa}. `;
    }
    if (mallampatti != 'NA') {
        generatedPrompt += `Modified Mallampati Score: ${mallampatti}. `;
    }
    if (hyomental) {
        generatedPrompt += `Hyomental distance: ${hyomental} cm. `;
    }    
    if (thyromental) {
        generatedPrompt += `Thyromental distance: ${thyromental} cm. `;
    } 
    if (thd) {
        generatedPrompt += `Thyro-hyoid distance: ${thd} cm. `;
    }
    if (sternomental) {
        generatedPrompt += `Sternomental distance: ${sternomental} cm. `;
    }
    if (mouth) {
        generatedPrompt += `Inter-incisor distance: ${mouth} cm. `;
    }
    if (flexion) {
        generatedPrompt += `Neck flexion: ${flexion} degree. `;
    }
    if (extension) {
        generatedPrompt += `Neck extension: ${extension} degree. `;
    }
    if (jaw) {
        generatedPrompt += `Jaw movement: ${jaw} degree. `;
    }
    if (mandible == 'Yes') {
        generatedPrompt += `Receding mandible present. `;
    }
    if (micro == 'Yes') {
        generatedPrompt += `Micrognathia present. `;
    }
    if (buck == 'Yes') {
        generatedPrompt += `Buck teeth present. `;
    }
    if (loose == 'Yes') {
        generatedPrompt += `Loose teeth present. `;
    }
    if (ulbt != 'NA') {
        generatedPrompt += `Upper Lip Bite Test: ${ulbt}. `;
    }
    if (obstetric == 'Yes') {
        generatedPrompt += `This is an obstetric patient. `;
    }
    if (fasting == 'Yes') {
        generatedPrompt += `The patient is fasting. `;
    }
    if (diffAir == 'Yes') {
        generatedPrompt += `History of difficult airway is present. `;
    }
    if (diffInt == 'Yes') {
        generatedPrompt += `History of difficult intubation is present. `;
    }
    if (cervical == 'Yes') {
        generatedPrompt += `Cervical trauma present. `;
    }
    if (facio == 'Yes') {
        generatedPrompt += `Faciomaxillary trauma present. `;
    }
    if (irrad == 'Yes') {
        generatedPrompt += `Previous neck irradiation present. `;
    }
    if (obstruction == 'Yes') {
        generatedPrompt += `Airway obstruction present. `;
    }
    if (beard == 'Yes') {
        generatedPrompt += `The patient has a beard. `;
    }
    if (apnea == 'Yes') {
        generatedPrompt += `History of apnea present. `;
    }
    if (radio) {
        generatedPrompt += `Radiology report findings: `;
    }



    if (generatedPrompt.endsWith(', ')) {
        generatedPrompt = generatedPrompt.slice(0, -2);
    }


    generatedPrompt += `Is this a difficult airway?`

    document.getElementById('generated-prompt').textContent = generatedPrompt;


    if (generatedPrompt) {
        document.getElementById('copy-to-clipboard').style.display = 'inline-block';
    } else {
        document.getElementById('copy-to-clipboard').style.display = 'none';
    }
});

document.getElementById('copy-to-clipboard').addEventListener('click', function() {
    const promptText = document.getElementById('generated-prompt').textContent;
    navigator.clipboard.writeText(promptText).then(function() {
        alert('Prompt copied to clipboard!');
    }, function() {
        alert('Failed to copy prompt to clipboard.');
    });
});


//     const generatedPrompt = `I am an ${profile}. My patient is a ${age} year old ${sex} whose height is ${height} cm and weight is ${weight} lbs.
//                              Mallampatti Grade is ${mallampatti}. Is this is a difficult airway?`;
//     document.getElementById('generated-prompt').textContent = generatedPrompt;
// });
