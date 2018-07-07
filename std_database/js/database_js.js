/**
 * Created by AppBakerZ Pvt.ltd 02 on 7/6/2018.
 */
    var fName='';
    var lName='';
    var email='';
    var age='';
    var contact='';
    var address='';
    var arr=[];
    var del = '';


function addItem(e){
    e.preventDefault();
    fName = document.getElementById('fName').value;
    lName = document.getElementById('lName').value;
    email = document.getElementById('email').value;
    age = document.getElementById('age').value;
    contact = document.getElementById('contact').value;
    address = document.getElementById('address').value;
    arr=[fName,lName,email,age,address,contact];
    var row = document.createElement('tr');
    del = document.createElement('input');
    del.setAttribute('type','button');
    del.setAttribute('class','btn btn-danger');
    del.setAttribute('value','x');
    del.setAttribute('id','btn');

    if(fName == ''){
        alert('Must Fill the Given Fields')
    }else{
        for(i=0;i<arr.length;i++){
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(arr[i]));
            row.appendChild(cell)
        }
        row.appendChild(cell.appendChild(del));

        document.getElementById('tbody').appendChild(row)
    }

    del.addEventListener('click', rowDelete);
}

function rowDelete(){
    document.getElementById('btn').parentNode.remove();
}



//|| lName == '' || email == '' || contact == ''