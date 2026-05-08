function togglePassword()
{
    let passwordInput = document.getElementById("password");

    if(passwordInput.type === "password")
        passwordInput.type = "text";
    else
        passwordInput.type = "password";
}

function updateRule(id, condition)
{
    let element = document.getElementById(id);

    if(condition)
    {
        element.classList.add("pass");
        element.classList.remove("fail");
        element.innerHTML = "✅ " + element.innerHTML.substring(2);
        return 1;
    }
    else
    {
        element.classList.add("fail");
        element.classList.remove("pass");
        element.innerHTML = "❌ " + element.innerHTML.substring(2);
        return 0;
    }
}

function noConsecutiveLetters(password)
{
    for(let i = 0; i < password.length - 1; i++)
    {
        if(/[a-zA-Z]/.test(password[i]) &&
           /[a-zA-Z]/.test(password[i + 1]))
        {
            return false;
        }
    }

    return true;
}

function noConsecutiveDigits(password)
{
    for(let i = 0; i < password.length - 1; i++)
    {
        if(/[0-9]/.test(password[i]) &&
           /[0-9]/.test(password[i + 1]))
        {
            return false;
        }
    }

    return true;
}

function noRepeatedCharacters(password)
{
    for(let i = 0; i < password.length; i++)
    {
        let count = 0;

        for(let j = 0; j < password.length; j++)
        {
            if(password[i] === password[j])
                count++;
        }

        if(count > 3)
            return false;
    }

    return true;
}

function classify(score)
{
    if(score >= 0 && score <= 3)
        return "Rejected";
    else if(score >= 4 && score <= 5)
        return "Weak";
    else if(score >= 6 && score <= 7)
        return "Medium";
    else if(score >= 8 && score <= 9)
        return "Strong";
    else
        return "Extreme Strong";
}

function updateStrengthBar(score)
{
    let bar = document.getElementById("strengthBar");
    let percentage = (score / 10) * 100;

    bar.style.width = percentage + "%";

    if(score <= 3)
        bar.style.background = "red";
    else if(score <= 5)
        bar.style.background = "orange";
    else if(score <= 7)
        bar.style.background = "gold";
    else if(score <= 9)
        bar.style.background = "limegreen";
    else
        bar.style.background = "green";
}

function analyzePassword()
{
    let password = document.getElementById("password").value;

    let score = 0;

    score += updateRule("rule1", password.length >= 8);
    score += updateRule("rule2", password.length <= 20);
    score += updateRule("rule3", /[A-Z]/.test(password));
    score += updateRule("rule4", /[a-z]/.test(password));
    score += updateRule("rule5", /[0-9]/.test(password));
    score += updateRule("rule6", /[^A-Za-z0-9]/.test(password));
    score += updateRule("rule7", !/\s/.test(password));
    score += updateRule("rule8", noConsecutiveLetters(password));
    score += updateRule("rule9", noConsecutiveDigits(password));
    score += updateRule("rule10", noRepeatedCharacters(password));

    document.getElementById("score").innerHTML =
        "Rules Satisfied: " + score + "/10";

    document.getElementById("classification").innerHTML =
        "Classification: " + classify(score);

    updateStrengthBar(score);
}