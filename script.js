document.getElementById('prompt-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const profile = document.getElementById('profile').value;
    const sex = document.getElementById('sex').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const mallampatti = document.getElementById('mallampatti').value;

    let generatedPrompt = '';

    if (profile) {
        generatedPrompt += `I am an ${profile}. The following are the details of my patient. `;
    }
    if (height) {
        generatedPrompt += `Height: ${height} cm, `;
    }
    if (weight) {
        generatedPrompt += `Weight: ${weight} lbs, `;
    }
    if (mallampatti != 'NA') {
        generatedPrompt += `Mallampatti Grade: ${mallampatti}. `;
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
