function temperatura(temp) {
    let C=0;
    let F=0;
    let determina=temp.toUpperCase().indexOf("F");
    
    if (determina>=0) {
        temp=temp.toUpperCase().replace("F","")
        F=Number(temp);
        C = (F - 32) * 5/9;
        return C
    } else {
        temp=temp.toUpperCase().replace("C","")
        C=Number(temp);
        F = C * 9/5 + 32;
        return F
    }
    
}
console.log(temperatura("50x"))