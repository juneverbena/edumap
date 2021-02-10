function openMenu() {
    document.getElementById('mysideMenu').style.width = '250px';
}
function closeMenu() {
    document.getElementById('mysideMenu').style.width = '0';
}

function displayLevel(){
    console.log('현재 레벨은 ' + map.getLevel() + ' 입니다. ');
}

function mysetLevel(){
    let x = document.getElementById("ip_setLevel").value;
    x = Number(x);

    map.setLevel(x);
}