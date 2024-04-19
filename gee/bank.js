let username='';
let balance='0';

function register()
{
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    if(usernameInput.Value.trim()=== '' || passwordInput.value;
    {
        alert('please enter both username and password')
        return;
    }
    username = usernameInput.value;
    document.getElementById('Welcome message').textContent = username;
    document.getElementById('registerform').style.display ='none';
    document.getElementById('account').style.display='balance';
}

    function withdraw(){
    const withdrawAmount = parseFloat(document.getElementById)
    if(isNaN(withdrawAmount) || withdrawAmount<=0)
    {
        alert('please enter a valid withdraw amount');
        return;
    }
    if(withdrawAmount > balance)
    {
        alert('Insufficient balance');
        return;
    }
    balance -= withdrawAmount;
    updateBalance();

}
function deposit()
{
    const depositAmount = parseFloat(document.getElementById('deposit'));
    if(isNaN (depositAmount) || depositAmount<=0)
    {
        alert('please enter a valid deposit amount');
    }
    balance += depositAmount;
    updateBalance();
}