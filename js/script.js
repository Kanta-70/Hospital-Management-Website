let data=document.getElementById("patient1")

function dv_fun1(obj){
    let dv=document.createElement('tr');
    dv.innerHTML=`
<tr>
            <td>${obj.name}</td>
            <td>${obj.number}</td>
            <td>${obj.email}</td>
            <td>${obj.date}</td>
          </tr>`;
return dv;
}

function submitData(){
    var name =$('#name').val();
    var number=$('#number').val();
    var email=$('#email').val();
    var date=$('#date').val();

    var obj = new Object();
    obj.name=name;
    obj.number=number;
    obj.email=email;
    obj.date=date;
    JSON.stringify(obj);
    //localStorage.setItem("testJSON",jsonString);

    //var text=localStorage.getItem("testJSON");
    //var myObj=JSON.parse(text);
    //document.getElementById('patient').innerHTML=jsonString;
    //document.write(jsonString);
    data.append(dv_fun1(obj));
}

var form = document.getElementById('form');
form.addEventListener('submit',function(e){
    e.preventDefault()
})
   
    